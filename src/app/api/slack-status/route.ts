import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

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

function relativeTime(ts: number): string {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 172800) return "Yesterday";
  return `${Math.floor(diff / 86400)} days ago`;
}

function verifySlackSignature(
  signingSecret: string,
  body: string,
  timestamp: string,
  signature: string
): boolean {
  const baseString = `v0:${timestamp}:${body}`;
  const hmac = crypto.createHmac("sha256", signingSecret).update(baseString).digest("hex");
  const expectedSig = `v0=${hmac}`;
  return crypto.timingSafeEqual(Buffer.from(expectedSig), Buffer.from(signature));
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const parsed = JSON.parse(body);

  if (parsed.type === "url_verification") {
    return NextResponse.json({ challenge: parsed.challenge });
  }

  const signingSecret = process.env.SLACK_SIGNING_SECRET;
  if (signingSecret) {
    const timestamp = request.headers.get("x-slack-request-timestamp") || "";
    const signature = request.headers.get("x-slack-signature") || "";
    if (Math.abs(Date.now() / 1000 - parseInt(timestamp)) > 300) {
      return NextResponse.json({ error: "Request too old" }, { status: 400 });
    }
    if (!verifySlackSignature(signingSecret, body, timestamp, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  const event = parsed.event;

  // ── Filter out everything except real human messages ──────────────────────
  if (!event) return NextResponse.json({ ok: true });
  if (event.type !== "message") return NextResponse.json({ ok: true });
  if (event.bot_id) return NextResponse.json({ ok: true });        // ignore bots
  if (event.subtype) return NextResponse.json({ ok: true });       // ignore join/leave/edit events

  const text: string = event.text || "";
  if (!text.trim()) return NextResponse.json({ ok: true });

  const update: StoredUpdate = {
    id: event.ts || Date.now().toString(),
    message: text,
    timestamp: relativeTime(parseFloat(event.ts) * 1000),
    rawTs: parseFloat(event.ts) * 1000,
    type: classifyUpdate(text),
  };

  updatesStore.unshift(update);
  if (updatesStore.length > MAX_STORED) updatesStore.pop();

  return NextResponse.json({ ok: true });
}

export async function GET() {
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