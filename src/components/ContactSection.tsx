"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email us directly at info@cledger.co.uk");
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>

        {/* Section header */}
        <div style={styles.header}>
          <span style={styles.eyebrow}>Get in touch</span>
          <h2 style={styles.title}>
            Have a question?{" "}
            <em style={styles.titleItalic}>We&rsquo;ll get back to you.</em>
          </h2>
          <p style={styles.subtitle}>
            Not sure which service fits your business? Send us a message and we&rsquo;ll
            recommend the right solution, no commitment needed.
          </p>
        </div>

        <div style={styles.layout}>

          {/* Left: contact info */}
          <div style={styles.infoCol}>
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                ),
                label: "Email",
                value: "info@cledger.co.uk",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
                  </svg>
                ),
                label: "Phone",
                value: "+44 7774 002712",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                ),
                label: "Response time",
                value: "Within 24 hours on UK business days",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "Based in",
                value: "London, UK · Serving clients nationwide",
              },
            ].map((item) => (
              <div key={item.label} style={styles.infoCard}>
                <div style={styles.iconBox}>{item.icon}</div>
                <div>
                  <div style={styles.infoLabel}>{item.label}</div>
                  <div style={styles.infoValue}>{item.value}</div>
                </div>
              </div>
            ))}

            <div style={styles.liveNote}>
              <span style={styles.liveDot} />
              <span style={styles.liveText}>Currently accepting new clients</span>
            </div>
          </div>

          {/* Right: form */}
          <div style={styles.formCard}>
            {status === "success" ? (
              <div style={styles.successState}>
                <div style={styles.successIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <h3 style={styles.successTitle}>Enquiry sent</h3>
                <p style={styles.successText}>
                  Thank you, we&rsquo;ll review your message and respond within 24 hours
                  on UK business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={styles.formRow}>
                  <FormField label="Full name" required>
                    <input
                      style={styles.input}
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </FormField>
                  <FormField label="Email address" required>
                    <input
                      style={styles.input}
                      type="email"
                      name="email"
                      placeholder="jane@company.co.uk"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </FormField>
                </div>

                <div style={styles.formRow}>
                  <FormField label="Phone number">
                    <input
                      style={styles.input}
                      type="tel"
                      name="phone"
                      placeholder="+44 7700 000000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </FormField>
                  <FormField label="Business type">
                    <select
                      style={styles.select}
                      name="businessType"
                      value={form.businessType}
                      onChange={handleChange}
                    >
                      <option value="">Select one</option>
                      <option>Sole trader</option>
                      <option>Ltd company</option>
                      <option>Partnership</option>
                      <option>Startup / pre-revenue</option>
                      <option>E-commerce store</option>
                      <option>Other</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Service interested in" required>
                  <select
                    style={styles.select}
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option>Bookkeeping</option>
                    <option>VAT & Tax Compliance</option>
                    <option>Management Accounts</option>
                    <option>Annual Accounts & Corporation Tax</option>
                    <option>Personal Tax Return</option>
                    <option>Cashflow & Financial Planning</option>
                    <option>Full Finance Outsourcing</option>
                    <option>Not sure, need a recommendation</option>
                  </select>
                </FormField>

                <FormField label="Message" required>
                  <textarea
                    style={{ ...styles.input, ...styles.textarea }}
                    name="message"
                    placeholder="Tell us about your business and what you need help with..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </FormField>

                {errorMsg && <p style={styles.errorMsg}>{errorMsg}</p>}

                <div style={styles.submitRow}>
                  <p style={styles.submitNote}>
                    <strong style={styles.submitNoteStrong}>No spam, ever.</strong>
                    <br />
                    We only use your details to respond to your enquiry.
                  </p>
                  <button
                    type="submit"
                    style={{
                      ...styles.submitBtn,
                      opacity: status === "loading" ? 0.7 : 1,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                    }}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Send enquiry"}
                    {status !== "loading" && (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22,2 15,22 11,13 2,9" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={styles.formGroup}>
      <label style={styles.label}>
        {label}
        {required && <span style={styles.required}> *</span>}
      </label>
      {children}
    </div>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────
const C = {
  navy: "#0B1222",
  navy2: "#131d31",
  card: "#111827",
  gold: "#C9A84C",
  gold2: "#e8c96a",
  gold3: "#f5e0a0",
  white: "#F8F5EE",
  muted: "#8a94a8",
  border: "rgba(201,168,76,0.18)",
  inputBg: "#0e1520",
  inputBorder: "rgba(255,255,255,0.10)",
  green: "#4ade80",
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: C.navy,
    padding: "6rem 1.5rem",
    fontFamily: "'Sora', 'Inter', sans-serif",
    WebkitFontSmoothing: "antialiased",
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "3.5rem",
  },
  eyebrow: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: C.gold,
    marginBottom: "1rem",
  },
  title: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: 400,
    lineHeight: 1.15,
    color: C.white,
    marginBottom: "1rem",
  },
  titleItalic: {
    fontStyle: "italic",
    color: C.gold2,
  },
  subtitle: {
    fontSize: 15,
    color: C.muted,
    maxWidth: 500,
    margin: "0 auto",
    lineHeight: 1.7,
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1.7fr",
    gap: "3rem",
    alignItems: "start",
  },
  infoCol: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  infoCard: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    background: C.card,
    border: "0.5px solid rgba(255,255,255,0.07)",
    borderRadius: 12,
    padding: "1rem 1.2rem",
    transition: "border-color 0.2s",
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 9,
    background: "rgba(201,168,76,0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: C.gold,
  },
  infoLabel: {
    fontSize: 10,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: C.muted,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 13,
    color: C.white,
    lineHeight: 1.5,
  },
  liveNote: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
    paddingLeft: 4,
  },
  liveDot: {
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: C.green,
    flexShrink: 0,
    animation: "pulse 2s infinite",
  },
  liveText: {
    fontSize: 12,
    color: C.muted,
  },
  formCard: {
    background: C.card,
    border: "0.5px solid rgba(255,255,255,0.07)",
    borderRadius: 14,
    padding: "2rem 1.8rem",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 0,
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginBottom: 14,
  },
  label: {
    fontSize: 10,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    color: C.muted,
  },
  required: {
    color: C.gold,
  },
  input: {
    fontFamily: "'Sora', 'Inter', sans-serif",
    fontSize: 13,
    color: C.white,
    background: C.inputBg,
    border: `0.5px solid ${C.inputBorder}`,
    borderRadius: 9,
    padding: "11px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  select: {
    fontFamily: "'Sora', 'Inter', sans-serif",
    fontSize: 13,
    color: C.white,
    background: C.inputBg,
    border: `0.5px solid ${C.inputBorder}`,
    borderRadius: 9,
    padding: "11px 14px",
    width: "100%",
    outline: "none",
    appearance: "none" as const,
    cursor: "pointer",
  },
  textarea: {
    resize: "none" as const,
    height: 110,
    lineHeight: 1.6,
  },
  errorMsg: {
    fontSize: 12,
    color: "#f87171",
    marginBottom: 12,
    marginTop: -4,
  },
  submitRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    marginTop: "1.2rem",
    flexWrap: "wrap" as const,
  },
  submitNote: {
    fontSize: 11,
    color: C.muted,
    lineHeight: 1.6,
  },
  submitNoteStrong: {
    color: C.gold3,
    fontWeight: 600,
  },
  submitBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'Sora', 'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    padding: "12px 26px",
    borderRadius: 10,
    border: "none",
    background: C.gold,
    color: C.navy,
    cursor: "pointer",
    transition: "background 0.2s, transform 0.15s",
    whiteSpace: "nowrap" as const,
  },
  successState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "3rem 1rem",
    gap: "1rem",
  },
  successIcon: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "rgba(74,222,128,0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  successTitle: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    fontSize: "1.6rem",
    fontWeight: 400,
    color: C.white,
  },
  successText: {
    fontSize: 13,
    color: C.muted,
    lineHeight: 1.7,
    maxWidth: 300,
  },
};
