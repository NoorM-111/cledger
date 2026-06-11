"use client";

import { Zap, Lock, Paperclip, CalendarClock, Clock, MessageSquare } from 'lucide-react'

export default function SlackAccess() {
  return (
    <section
      style={{
        background: "#0B1222",
        padding: "80px 24px",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              fontSize: "11px",
              fontWeight: 700,
              padding: "5px 14px",
              borderRadius: "20px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Exclusive to Cledger clients
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            color: "#F8F5EE",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontFamily: "'DM Serif Display', serif",
            textAlign: "center",
            margin: "0 0 16px",
            lineHeight: "1.15",
          }}
        >
          Your accountant is{" "}
          <em style={{ color: "#C9A84C" }}>one message away.</em>
        </h2>

        {/* Subheadline */}
        <p
          style={{
            color: "#8a94a8",
            fontSize: "18px",
            textAlign: "center",
            maxWidth: "620px",
            margin: "0 auto 60px",
            lineHeight: "1.6",
          }}
        >
          Every Cledger client gets a private Slack channel shared directly with your dedicated Cledger accountant.
          No tickets. No waiting 3 days for an email reply. Just instant access to your accountant.
        </p>

        {/* Feature grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "56px",
          }}
        >
          {[
            {
              icon: <Zap size={26} strokeWidth={1.5} color="#C9A84C" />,
              title: "Response within the hour",
              desc: "Message us during UK business hours and get a real answer, not an automated reply, within 60 minutes.",
            },
            {
              icon: <Lock size={26} strokeWidth={1.5} color="#C9A84C" />,
              title: "Your own private channel",
              desc: "A dedicated #client-[your-business] Slack channel. Only you and your Cledger accountant. Completely private.",
            },
            {
              icon: <Paperclip size={26} strokeWidth={1.5} color="#C9A84C" />,
              title: "Share files instantly",
              desc: "Drop bank statements, invoices, or payroll files directly in Slack. No more emailing attachments back and forth.",
            },
            {
              icon: <CalendarClock size={26} strokeWidth={1.5} color="#C9A84C" />,
              title: "Deadline reminders built in",
              desc: "VAT deadlines, payroll dates, CT600 filings, we message you before anything is due. Never miss a deadline again.",
            },
            {
              icon: <Clock size={26} strokeWidth={1.5} color="#C9A84C" />,
              title: "UK hours. Always.",
              desc: "We work to UK business hours (9am–5pm GMT/BST). Your messages are read by a real person, not a chatbot.",
            },
            {
              icon: <MessageSquare size={26} strokeWidth={1.5} color="#C9A84C" />,
              title: "Direct, not ticketed",
              desc: "Most online accountants route every question through a ticket queue. At Cledger you message your accountant directly.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "28px 24px",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(201,168,76,0.35)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div style={{ marginBottom: "12px" }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  color: "#F8F5EE",
                  fontSize: "16px",
                  fontWeight: 700,
                  margin: "0 0 8px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: "#8a94a8",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mock Slack UI */}
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto 56px",
            background: "#1a1d21",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
          }}
        >
          {/* Slack titlebar */}
          <div
            style={{
              background: "#19171d",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: c,
                  }}
                />
              ))}
            </div>
            <span
              style={{
                color: "#8a94a8",
                fontSize: "12px",
                marginLeft: "8px",
                fontWeight: 600,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                minWidth: 0,
                flex: 1,
              }}
            >
              # client-your-business, Cledger Workspace
            </span>
          </div>

          {/* Messages */}
          <div style={{ padding: "20px 20px 8px" }}>
            {[
              {
                sender: "You",
                avatar: "Y",
                avatarBg: "#3b82f6",
                time: "9:14 AM",
                message:
                  "Hi Noor, quick one. A new customer isn't VAT registered and is asking if we still add VAT to their invoice. Do we?",
              },
              {
                sender: "Noor · Cledger",
                avatar: "N",
                avatarBg: "#C9A84C",
                time: "9:31 AM",
                message:
                  "Yes. You charge VAT based on your registration, not theirs. Add 20% and issue a VAT invoice with your VAT number on it. I'll make sure it's coded correctly in Xero when it comes through. 👍",
              },
              {
                sender: "You",
                avatar: "Y",
                avatarBg: "#3b82f6",
                time: "9:32 AM",
                message: "Perfect, thank you. That's exactly what I needed.",
              },
            ].map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "6px",
                    background: msg.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  {msg.avatar}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "8px",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      style={{
                        color: "#F8F5EE",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                    >
                      {msg.sender}
                    </span>
                    <span style={{ color: "#8a94a8", fontSize: "11px" }}>
                      {msg.time}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "#d1d5db",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div
            style={{
              margin: "0 16px 16px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              padding: "10px 14px",
              color: "#8a94a8",
              fontSize: "13px",
            }}
          >
            Message #client-your-business
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "#8a94a8",
              fontSize: "15px",
              marginBottom: "24px",
            }}
          >
            Slack access is included in every Cledger plan. No extra charge.
          </p>
          <a
            href="/pricing"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #C9A84C, #e8c96a)",
              color: "#0B1222",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 36px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            See plans & pricing →
          </a>
        </div>
      </div>
    </section>
  );
}