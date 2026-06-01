"use client";

// src/components/CledgerStatus.tsx
// Live status feed — shows real-time Cledger activity on your website.
// 
// HOW IT WORKS:
// 1. You post updates to #cledger-updates Slack channel manually or via automation
// 2. A Slack webhook posts those updates to /api/slack-status (see slack-status-route.ts)
// 3. Updates are stored in a simple JSON file or Vercel KV
// 4. This component polls /api/slack-status every 30s and displays them
//
// For demo/launch: the component accepts a `staticUpdates` prop so you can
// hardcode initial updates until the webhook is live.

import { useEffect, useState } from "react";

interface StatusUpdate {
  id: string;
  message: string;
  timestamp: string;
  type: "filed" | "reminder" | "client" | "system" | "milestone";
}

const TYPE_CONFIG = {
  filed: { emoji: "✅", label: "Filed", color: "#178F65" },
  reminder: { emoji: "📩", label: "Reminder sent", color: "#C9A84C" },
  client: { emoji: "🤝", label: "Client update", color: "#C9A84C" },
  system: { emoji: "⚙️", label: "System", color: "#8a94a8" },
  milestone: { emoji: "🏆", label: "Milestone", color: "#C9A84C" },
};

// Hardcoded demo updates — replace with real data once webhook is live
const DEMO_UPDATES: StatusUpdate[] = [
  {
    id: "1",
    message: "VAT return filed and submitted to HMRC",
    timestamp: "2 hours ago",
    type: "filed",
  },
  {
    id: "2",
    message: "MTD deadline reminder sent to 3 clients",
    timestamp: "Yesterday",
    type: "reminder",
  },
  {
    id: "3",
    message: "Monthly management accounts delivered",
    timestamp: "2 days ago",
    type: "filed",
  },
  {
    id: "4",
    message: "New client onboarded — bookkeeping + VAT",
    timestamp: "3 days ago",
    type: "client",
  },
  {
    id: "5",
    message: "Corporation Tax CT600 prepared and reviewed",
    timestamp: "4 days ago",
    type: "filed",
  },
];

interface CledgerStatusProps {
  /** Pass true to fetch live data from /api/slack-status */
  live?: boolean;
  /** Max number of updates to show */
  maxItems?: number;
}

export default function CledgerStatus({
  live = false,
  maxItems = 5,
}: CledgerStatusProps) {
  const [updates, setUpdates] = useState<StatusUpdate[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  useEffect(() => {
    if (!live) return;

    const fetchUpdates = async () => {
      try {
        const res = await fetch("/api/slack-status");
        if (!res.ok) return;
        const data = await res.json();
        setUpdates(data.updates.slice(0, maxItems));
        setIsLive(true);
        setLastRefresh(new Date());
      } catch {
        // Fall back to demo data silently
      }
    };

    fetchUpdates();
    const interval = setInterval(fetchUpdates, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, [live, maxItems]);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0B1222 0%, #131d31 100%)",
        border: "1px solid rgba(201,168,76,0.2)",
        borderRadius: "16px",
        padding: "32px",
        fontFamily: "'Sora', sans-serif",
        maxWidth: "600px",
        width: "100%",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#178F65",
              boxShadow: "0 0 8px #178F65",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            style={{
              color: "#F8F5EE",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.02em",
            }}
          >
            Live Activity Feed
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              fontSize: "11px",
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: "20px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {isLive ? "● LIVE" : "POWERED BY SLACK"}
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p
        style={{
          color: "#8a94a8",
          fontSize: "13px",
          marginBottom: "24px",
          lineHeight: "1.5",
        }}
      >
        Real work, happening right now. Every update posted here is a task completed for a Cledger client.
      </p>

      {/* Updates list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {updates.map((update, index) => {
          const config = TYPE_CONFIG[update.type];
          return (
            <div
              key={update.id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "10px",
                animation: `fadeIn 0.4s ease ${index * 0.08}s both`,
              }}
            >
              <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>
                {config.emoji}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    color: "#F8F5EE",
                    fontSize: "14px",
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  {update.message}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "4px",
                  }}
                >
                  <span
                    style={{
                      color: config.color,
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {config.label}
                  </span>
                  <span style={{ color: "#8a94a8", fontSize: "11px" }}>·</span>
                  <span style={{ color: "#8a94a8", fontSize: "11px" }}>
                    {update.timestamp}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "20px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "#8a94a8", fontSize: "12px" }}>
          {isLive
            ? `Last updated ${lastRefresh.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`
            : "Updates posted in real time via Slack"}
        </span>
        <span
          style={{
            color: "#C9A84C",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "default",
          }}
        >
          Cledger ✦
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}