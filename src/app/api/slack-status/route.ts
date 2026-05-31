// src/app/api/slack-status/route.ts
// 
// TWO purposes:
// 1. POST — receives incoming messages from Slack (via Outgoing Webhook or Slack Events API)
//    Slack sends a POST here whenever you post in #cledger-updates
//
// 2. GET  — serves the latest updates to CledgerStatus.tsx on your website
//
// SETUP STEPS:
// 1. In Slack, go to https://api.slack.com/apps → Create new app
// 2. Enable "Incoming Webhooks" — get your webhook URL → add as SLACK_WEBHOOK_URL in Vercel
// 3. Enable "Event Subscriptions" → set Request URL to https://www.cledger.co.uk/api/slack-status
// 4. Subscribe to: message.channels
// 5. Add SLACK_SIGNING_SECRET to Vercel env vars (from your Slack app's Basic Information page)
// 6. Create a public channel called #cledger-updates in your Slack workspace
// 7. Add your Slack app to that channel

import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// In production, use Vercel KV or a database.
// For simplicity, this uses an in-memory store (resets on cold start).
// Upgrade path: replace with Vercel KV (vercel.com/docs/storage/vercel-kv)
const updatesStore: StoredUpdate[] = [];
const MAX_STORED = 20;

interface StoredUpdate {
  id: string;
  message: string;
  timestamp: string;
  rawTs: number;
  type: UpdateType;
}

type UpdateType = "filed" | "reminder" | "client" | "system" | "milestone";

// ─── Classify update type from message text ───────────────────────────────────

function classifyUpdate(text: string): UpdateType {
  const lower = text.toLowerCase();
  if (lower.includes("filed") || lower.includes("submitted") || lower.includes("completed") || lower.includes("delivered"))
    return "filed";
  if (lower.includes("reminder") || lower.includes("deadline") || lower.includes("sent"))
    return "reminder";
  if (lower.includes("client") || lower.includes("onboard") || lower.includes("signed"))
    return "client";
  if (lower.includes("milestone") || lower.includes("first") || lower.includes("launched"))
    return "milestone";
  return "system";
}

// ─── Format relative timestamp ────────────────────────────────────────────────

function relativeTime(ts: number): string {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 172800) return "Yesterday";
  return `${Math.floor(diff / 86400)} days ago`;
}

// ─── Verify Slack signature ───────────────────────────────────────────────────

function verifySlackSignature(
  signingSecret: string,
  body: string,
  timestamp: string,
  signature: string
): boolean {
  const baseString = `v0:${timestamp}:${body}`;
  const hmac = crypto
    .createHmac("sha256", signingSecret)
    .update(baseString)
    .digest("hex");
  const expectedSig = `v0=${hmac}`;
  return crypto.timingSafeEqual(
    Buffer.from(expectedSig),
    Buffer.from(signature)
  );
}

// ─── POST — receive from Slack ────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  const body = await request.text();
  const parsed = JSON.parse(body);

  // Handle Slack URL verification challenge (one-time setup)
  if (parsed.type === "url_verification") {
    return NextResponse.json({ challenge: parsed.challenge });
  }

  // Verify the request is genuinely from Slack
  const signingSecret = process.env.SLACK_SIGNING_SECRET;
  if (signingSecret) {
    const timestamp = request.headers.get("x-slack-request-timestamp") || "";
    const signature = request.headers.get("x-slack-signature") || "";

    // Reject requests older than 5 minutes (replay attack prevention)
    if (Math.abs(Date.now() / 1000 - parseInt(timestamp)) > 300) {
      return NextResponse.json({ error: "Request too old" }, { status: 400 });
    }

    if (!verifySlackSignature(signingSecret, body, timestamp, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  // Extract message from Slack event
  const event = parsed.event;
  if (!event || event.type !== "message" || event.bot_id) {
    return NextResponse.json({ ok: true }); // Ignore bot messages and non-message events
  }

  const text: string = event.text || "";
  if (!text.trim()) return NextResponse.json({ ok: true });

  // Store the update
  const update: StoredUpdate = {
    id: event.ts || Date.now().toString(),
    message: text,
    timestamp: relativeTime(parseFloat(event.ts) * 1000),
    rawTs: parseFloat(event.ts) * 1000,
    type: classifyUpdate(text),
  };

  updatesStore.unshift(update); // Add to front
  if (updatesStore.length > MAX_STORED) updatesStore.pop(); // Keep store lean

  return NextResponse.json({ ok: true });
}

// ─── GET — serve to website widget ───────────────────────────────────────────

export async function GET() {
  // Refresh relative timestamps on every request
  const updates = updatesStore.map((u) => ({
    ...u,
    timestamp: relativeTime(u.rawTs),
  }));

  return NextResponse.json(
    { updates, count: updates.length },
    {
      headers: {
        "Cache-Control": "no-store, must-revalidate",
        "Access-Control-Allow-Origin": "https://www.cledger.co.uk",
      },
    }
  );
}