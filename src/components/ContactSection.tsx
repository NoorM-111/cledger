"use client";

import { useState } from "react";
import { fireContactConversion } from "@/lib/gtag";

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
      fireContactConversion();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email us directly at info@cledger.co.uk");
    }
  };

  return (
    <section id="contact" style={S.section}>
      <div style={S.container}>

        <div style={S.header}>
          <span style={S.eyebrow}>Get in touch</span>
          <h2 style={S.title}>
            Have a question?{" "}
            <em style={S.titleItalic}>We&rsquo;ll get back to you.</em>
          </h2>
          <p style={S.subtitle}>
            Not sure which service fits your business? Send us a message and we&rsquo;ll
            recommend the right solution — no commitment needed.
          </p>
        </div>

        <div style={S.layout}>

          <div style={S.infoCol}>
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
                value: "UK · Serving clients nationwide",
              },
            ].map((item) => (
              <div key={item.label} style={S.infoCard}>
                <div style={S.iconBox}>{item.icon}</div>
                <div>
                  <div style={S.infoLabel}>{item.label}</div>
                  <div style={S.infoValue}>{item.value}</div>
                </div>
              </div>
            ))}

            <div style={S.liveNote}>
              <span style={S.liveDot} />
              <span style={S.liveText}>Currently accepting new clients</span>
            </div>
          </div>

          <div style={S.formCard}>
            {status === "success" ? (
              <div style={S.successState}>
                <div style={S.successIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <h3 style={S.successTitle}>Enquiry sent</h3>
                <p style={S.successText}>
                  Thank you — we&rsquo;ll review your message and respond within 24 hours
                  on UK business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={S.formRow}>
                  <FormField label="Full name" required>
                    <input style={S.input} type="text" name="name" placeholder="Jane Smith" value={form.name} onChange={handleChange} />
                  </FormField>
                  <FormField label="Email address" required>
                    <input style={S.input} type="email" name="email" placeholder="jane@company.co.uk" value={form.email} onChange={handleChange} />
                  </FormField>
                </div>

                <div style={S.formRow}>
                  <FormField label="Phone number">
                    <input style={S.input} type="tel" name="phone" placeholder="+44 7700 000000" value={form.phone} onChange={handleChange} />
                  </FormField>
                  <FormField label="Business type">
                    <select style={S.select} name="businessType" value={form.businessType} onChange={handleChange}>
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
                  <select style={S.select} name="service" value={form.service} onChange={handleChange}>
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
                  <textarea style={{ ...S.input, ...S.textarea }} name="message" placeholder="Tell us about your business and what you need help with..." value={form.message} onChange={handleChange} />
                </FormField>

                {errorMsg && <p style={S.errorMsg}>{errorMsg}</p>}

                <div style={S.submitRow}>
                  <p style={S.submitNote}>
                    <strong style={S.submitNoteStrong}>No spam, ever.</strong>
                    <br />
                    We only use your details to respond to your enquiry.
                  </p>
                  <button
                    type="submit"
                    className="btn btn-navy"
                    style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Sending…" : "Send enquiry"}
                    {status !== "loading" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={S.formGroup}>
      <label style={S.label}>
        {label}
        {required && <span style={{ color: '#9A7B39' }}> *</span>}
      </label>
      {children}
    </div>
  );
}

const S: Record<string, React.CSSProperties> = {
  section: {
    background: '#F7F4EC',
    padding: '96px 0',
    fontFamily: "'Hanken Grotesk', 'Inter', sans-serif",
    borderTop: '1px solid #E4DDCF',
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: '0 40px',
  },
  header: {
    textAlign: "center",
    marginBottom: "3.5rem",
  },
  eyebrow: {
    display: "inline-block",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: '#9A7B39',
    marginBottom: "1rem",
  },
  title: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
    fontWeight: 400,
    lineHeight: 1.1,
    color: '#1A1A16',
    marginBottom: "1rem",
    letterSpacing: '-1px',
  },
  titleItalic: {
    fontStyle: "italic",
    color: '#9A7B39',
  },
  subtitle: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 15,
    color: '#5F5A50',
    maxWidth: 500,
    margin: "0 auto",
    lineHeight: 1.75,
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 1.7fr",
    gap: "2.5rem",
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
    background: '#FFFFFF',
    border: "1px solid #E9E2D4",
    borderRadius: 10,
    padding: "1rem 1.2rem",
  },
  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 8,
    background: '#F4ECD7',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: '#9A7B39',
  },
  infoLabel: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: '#B0A892',
    marginBottom: 2,
  },
  infoValue: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13,
    color: '#1A1A16',
    lineHeight: 1.5,
    fontWeight: 500,
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
    background: '#4ade80',
    flexShrink: 0,
  },
  liveText: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 12,
    color: '#9A958A',
  },
  formCard: {
    background: '#FFFFFF',
    border: "1px solid #E9E2D4",
    borderRadius: 12,
    padding: "2rem 1.8rem",
  },
  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginBottom: 14,
  },
  label: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: '#9A958A',
  },
  input: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 14,
    color: '#1A1A16',
    background: '#FAFAF7',
    border: "1px solid #E9E2D4",
    borderRadius: 8,
    padding: "11px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.18s ease",
  },
  select: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 14,
    color: '#1A1A16',
    background: '#FAFAF7',
    border: "1px solid #E9E2D4",
    borderRadius: 8,
    padding: "11px 14px",
    width: "100%",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
  },
  textarea: {
    resize: "none",
    height: 110,
    lineHeight: 1.6,
  },
  errorMsg: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 12,
    color: "#ef4444",
    marginBottom: 12,
    marginTop: -4,
  },
  submitRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    marginTop: "1.2rem",
    flexWrap: "wrap",
  },
  submitNote: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 11,
    color: '#9A958A',
    lineHeight: 1.6,
  },
  submitNoteStrong: {
    color: '#5F5A50',
    fontWeight: 600,
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
    background: "rgba(74,222,128,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  successTitle: {
    fontFamily: "'Newsreader', Georgia, serif",
    fontSize: "1.6rem",
    fontWeight: 400,
    color: '#1A1A16',
  },
  successText: {
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13,
    color: '#5F5A50',
    lineHeight: 1.7,
    maxWidth: 300,
  },
};
