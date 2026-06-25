"use client";

import { useState, useCallback } from "react";
import { fireContactConversion } from "@/lib/gtag";

const C = {
  navy: "#FBF8F1", navy2: "#F4ECD7", card: "#FFFFFF", card2: "#F7F2E6",
  gold: "#9A7B39", gold2: "#C9A84C", gold3: "#7A5C22",
  white: "#1A1A16", muted: "#5F5A50",
  border: "#E9E2D4", faint: "rgba(26,26,22,0.06)",
  green: "#16A34A",
};

const BAND_MULT = [1, 1.35, 1.75, 2.3, 3.1];
const ENT_MULT: Record<number, number> = { 1: 1, 2: 1.8, 3: 2.4, 4: 3.0 };
const BAND_LABELS = ["Under £100k", "£100k–£500k", "£500k–£1M", "£1M–£5M", "£5M+"];

const TURNOVER_BANDS = [
  { label: "Under £100k", desc: "Sole trader / micro", tag: "Entry", tagColor: "#4ade80", tagBg: "rgba(74,222,94,0.10)" },
  { label: "£100k–£500k", desc: "Small business", tag: "Standard", tagColor: "#4ade80", tagBg: "rgba(74,222,94,0.10)" },
  { label: "£500k–£1M", desc: "Growing Ltd", tag: "Medium", tagColor: "#fbbf24", tagBg: "rgba(251,191,36,0.10)" },
  { label: "£1M–£5M", desc: "Established SME", tag: "Complex", tagColor: "#fb923c", tagBg: "rgba(249,115,22,0.10)" },
  { label: "£5M+", desc: "Large / group", tag: "Enterprise", tagColor: "#a78bfa", tagBg: "rgba(167,139,250,0.10)" },
];

interface Service {
  id: string; group: "core" | "reporting" | "tax" | "payroll";
  name: string; tag?: string; desc: string; base: number; mutex?: string;
}

const SERVICES: Service[] = [
  { id: "bk", group: "core", name: "Bookkeeping", tag: "Includes P&L + Balance Sheet free", desc: "Bank reconciliation, categorisation, monthly P&L and balance sheet delivered by the 10th", base: 175 },
  { id: "mi_q", group: "reporting", name: "MI Pack, quarterly", desc: "Management information pack with KPIs and commentary every quarter", base: 149, mutex: "mi_m" },
  { id: "mi_m", group: "reporting", name: "MI Pack, monthly", desc: "Full monthly management accounts with variance analysis and executive commentary", base: 249, mutex: "mi_q" },
  { id: "cf", group: "reporting", name: "Cash flow forecast", desc: "13-week rolling cash flow model maintained and delivered monthly", base: 129 },
  { id: "vat", group: "tax", name: "VAT returns", desc: "MTD-compliant quarterly VAT return prepared, reviewed and submitted to HMRC", base: 99 },
  { id: "ct", group: "tax", name: "Corporation Tax (CT600)", desc: "Annual CT600 preparation and HMRC submission, includes tax computation", base: 65 },
  { id: "ye", group: "tax", name: "Year-end accounts", desc: "Statutory accounts prepared and filed at Companies House", base: 65 },
  { id: "sa", group: "tax", name: "Self Assessment", desc: "Personal tax return for director or sole trader, all income streams covered", base: 65 },
  { id: "pay_j", group: "payroll", name: "Payroll journals to Xero", desc: "Payroll data entry and journal posting into Xero. Does not include RTI or payslips.", base: 69, mutex: "pay_f" },
  { id: "pay_f", group: "payroll", name: "Full payroll processing", desc: "Calculate pay, issue payslips, RTI to HMRC, P60s annually. Up to 10 employees.", base: 99, mutex: "pay_j" },
];

const CONSULTATIONS = [
  { name: "Clarity call", desc: "One focused topic, tax question, HMRC query, quick compliance decision.", price: 95, unit: "30 min", featured: false },
  { name: "Strategy session", desc: "Business structure, VAT planning, forecasting or director tax optimisation.", price: 175, unit: "1 hour", featured: true },
  { name: "Financial review", desc: "Full health check, P&L, cash flow, tax position + written recommendations.", price: 325, unit: "2 hours", featured: false },
  { name: "CFO advisory", desc: "Multi-entity, complex structure, investor prep or board-level financial support.", price: 595, unit: "half day", featured: false },
];

const GROUP_LABELS: Record<string, string> = {
  core: "Core bookkeeping", reporting: "Management reporting",
  tax: "Tax & compliance", payroll: "Payroll",
};

// ─── Quote Modal ──────────────────────────────────────────────────────────────
interface QuoteModalProps {
  services: Service[];
  getPrice: (base: number) => number;
  monthly: number;
  discounted: number;
  bandLabel: string;
  entities: number;
  onClose: () => void;
}

function QuoteModal({ services, getPrice, monthly, discounted, bandLabel, entities, onClose }: QuoteModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { setError("Please enter your name and email."); return; }
    setError(""); setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, company,
          bandLabel, entities,
          monthly, discounted,
          services: services.map(s => ({ name: s.name, price: getPrice(s.base) })),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      fireContactConversion();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email us directly at info@cledger.co.uk");
    }
  };

  return (
    <div style={m.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={m.modal}>
        {status === "success" ? (
          <div style={m.successBox}>
            <div style={m.successIcon}>✓</div>
            <h3 style={m.successTitle}>Quote sent!</h3>
            <p style={m.successText}>
              We've emailed your custom quote to <strong style={{ color: C.white }}>{email}</strong>.
              We'll follow up within 24 hours on UK business days.
            </p>
            <button style={m.closeBtn} onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div style={m.modalHeader}>
              <div>
                <div style={m.modalEyebrow}>Your custom quote</div>
                <h3 style={m.modalTitle}>Get this emailed to you</h3>
              </div>
              <button style={m.xBtn} onClick={onClose}>✕</button>
            </div>

            <div style={m.quoteSummary}>
              <div style={m.quoteRows}>
                {services.map(s => (
                  <div key={s.id} style={m.quoteRow}>
                    <span style={m.quoteRowName}>{s.name}</span>
                    <span style={m.quoteRowPrice}>£{getPrice(s.base).toLocaleString()}/mo</span>
                  </div>
                ))}
              </div>
              <div style={m.quoteTotals}>
                <div style={m.quoteTotalItem}>
                  <span style={m.quoteTotalLabel}>Monthly total</span>
                  <span style={m.quoteTotalNum}>£{monthly.toLocaleString()}/mo</span>
                </div>
                <div style={m.quoteTotalDivider} />
                <div style={m.quoteTotalItem}>
                  <span style={m.quoteTotalLabel}>With founding 15% off</span>
                  <span style={{ ...m.quoteTotalNum, color: C.gold2 }}>£{discounted.toLocaleString()}/mo</span>
                </div>
              </div>
              <div style={m.quoteMeta}>{entities === 4 ? "4+" : entities} {entities === 1 ? "entity" : "entities"} · {bandLabel} turnover</div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div style={m.formRow}>
                <div style={m.formGroup}>
                  <label style={m.label}>Full name <span style={{ color: C.gold }}>*</span></label>
                  <input style={m.input} type="text" placeholder="Jane Smith" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div style={m.formGroup}>
                  <label style={m.label}>Email address <span style={{ color: C.gold }}>*</span></label>
                  <input style={m.input} type="email" placeholder="jane@company.co.uk" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div style={m.formGroup}>
                <label style={m.label}>Company name (optional)</label>
                <input style={m.input} type="text" placeholder="Acme Ltd" value={company} onChange={e => setCompany(e.target.value)} />
              </div>
              {error && <p style={m.errorMsg}>{error}</p>}
              <button type="submit" style={{ ...m.submitBtn, opacity: status === "loading" ? 0.7 : 1 }} disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send my quote →"}
              </button>
              <p style={m.privacyNote}>We'll only use your details to send your quote and follow up. No spam.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PricingSection() {
  const [band, setBand] = useState(0);
  const [ents, setEnts] = useState(1);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [showModal, setShowModal] = useState(false);

  const getPrice = useCallback((base: number) =>
    Math.round(base * BAND_MULT[band] * ENT_MULT[ents]), [band, ents]);

  const toggle = (id: string) => {
    const svc = SERVICES.find(s => s.id === id)!;
    setSelected(prev => {
      const next = { ...prev };
      if (svc.mutex && !prev[id]) next[svc.mutex] = false;
      next[id] = !prev[id];
      return next;
    });
  };

  const selectedServices = SERVICES.filter(s => selected[s.id]);
  const monthly = selectedServices.reduce((sum, s) => sum + getPrice(s.base), 0);
  const discounted = Math.round(monthly * 0.85);
  const groups = ["core", "reporting", "tax", "payroll"] as const;

  return (
    <>
      <section id="pricing" style={s.section}>
        <div style={s.container}>

          <div style={s.header}>
            <span style={s.eyebrow}>Pricing · Build your package</span>
            <h2 style={s.title}>Pay only for what <em style={s.titleEm}>your business actually needs</em></h2>
            <p style={s.subtitle}>Select your turnover, number of entities, and the services you need. Your monthly fee is calculated instantly, transparent, no surprises, no lock-in.</p>
            <div style={s.trustRow}>
              {["Qualified accountants", "MTD compliant", "No lock-in contracts", "No hidden add-ons"].map(b => (
                <span key={b} style={s.trustBadge}>{b}</span>
              ))}
            </div>
          </div>

          <StepLabel num={1} text="Annual turnover" />
          <div style={s.bandGrid}>
            {TURNOVER_BANDS.map((tb, i) => (
              <button key={i} onClick={() => setBand(i)} style={{ ...s.bandBtn, ...(band === i ? s.bandBtnOn : {}) }}>
                <div style={s.bandLabel}>{tb.label}</div>
                <div style={s.bandDesc}>{tb.desc}</div>
                <span style={{ ...s.bandTag, color: tb.tagColor, background: tb.tagBg }}>{tb.tag}</span>
              </button>
            ))}
          </div>

          <StepLabel num={2} text="Number of entities" />
          <div style={s.entRow}>
            {[1, 2, 3, 4].map(n => (
              <button key={n} onClick={() => setEnts(n)} style={{ ...s.entBtn, ...(ents === n ? s.entBtnOn : {}) }}>
                <span style={s.entBig}>{n === 4 ? "4+" : n}</span>
                {n === 1 ? "Single entity" : n === 2 ? "Two entities" : n === 3 ? "Three entities" : "Four or more"}
              </button>
            ))}
          </div>

          <StepLabel num={3} text="Select your services" />
          {groups.map(grp => (
            <div key={grp} style={s.grpSection}>
              <div style={s.grpLabel}>{GROUP_LABELS[grp]}</div>
              <div style={s.svcGrid}>
                {SERVICES.filter(svc => svc.group === grp).map(svc => (
                  <div key={svc.id} onClick={() => toggle(svc.id)}
                    style={{ ...s.svcCard, ...(selected[svc.id] ? s.svcCardOn : {}) }}>
                    <div style={{ ...s.chk, ...(selected[svc.id] ? s.chkOn : {}) }}>
                      {selected[svc.id] && "✓"}
                    </div>
                    <div style={s.svcBody}>
                      <div style={s.svcName}>
                        {svc.name}
                        {svc.tag && <span style={s.svcTag}>{svc.tag}</span>}
                      </div>
                      <div style={s.svcDesc}>{svc.desc}</div>
                      <div style={s.svcPrice}>£{getPrice(svc.base).toLocaleString()}/mo</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={s.summary}>
            <div style={s.sumHead}>
              <div style={s.sumTitle}>Your monthly estimate</div>
              <div style={s.sumNote}>{ents === 4 ? "4+" : ents} {ents === 1 ? "entity" : "entities"} · {BAND_LABELS[band]} turnover</div>
            </div>
            {selectedServices.length === 0 ? (
              <div style={s.sumEmpty}>Select services above to see your quote</div>
            ) : (
              <div style={s.sumRows}>
                {selectedServices.map(svc => (
                  <div key={svc.id} style={s.sumRow}>
                    <span style={s.sumRowName}>{svc.name}</span>
                    <span style={s.sumRowPrice}>£{getPrice(svc.base).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}
            <div style={s.sumDivider} />
            <div style={s.sumTotals}>
              <div style={s.sumTotalBox}>
                <div style={s.sumTotalLabel}>Monthly total</div>
                <div style={s.sumTotalNum}><span style={s.sumSup}>£</span>{monthly.toLocaleString()}<span style={s.sumSub}>/mo</span></div>
                {monthly > 0 && <div style={s.sumTotalSub}>£{(monthly * 12).toLocaleString()} per year</div>}
              </div>
              <div style={{ ...s.sumTotalBox, ...s.sumTotalBoxGold }}>
                <div style={s.sumTotalLabel}>With founding discount (15% off)</div>
                <div style={{ ...s.sumTotalNum, color: C.gold2 }}><span style={{ ...s.sumSup, color: C.gold2 }}>£</span>{discounted.toLocaleString()}<span style={s.sumSub}>/mo</span></div>
                {monthly > 0 && <div style={s.sumTotalSub}>£{(discounted * 12).toLocaleString()} per year</div>}
              </div>
            </div>
            {monthly > 0 && (
              <div style={s.discBanner}>
                <div style={s.discDot} />
                <div style={s.discText}>First 3 founding clients get <strong style={{ color: C.green }}>15% off for life</strong>, same qualified accountants, locked in permanently.</div>
              </div>
            )}
          </div>

          <div style={s.ctaRow}>
            <button
              style={{ ...s.ctaPrimary, ...(monthly === 0 ? s.ctaDisabled : {}) }}
              onClick={() => monthly > 0 && setShowModal(true)}
              disabled={monthly === 0}
            >
              {monthly === 0 ? "Select services to get a quote" : "Get this quote emailed to me →"}
            </button>
            <button style={s.ctaOutline}>Book a free call</button>
          </div>

          <div style={s.divider} />
          <div style={s.consHeader}>
            <h3 style={s.consTitle}>Consultation rates</h3>
            <p style={s.consSub}>For directors, investors and business owners who need expert advice, not ongoing bookkeeping.</p>
          </div>
          <div style={s.consGrid}>
            {CONSULTATIONS.map(c => (
              <div key={c.name} style={{ ...s.consCard, ...(c.featured ? s.consCardFeatured : {}) }}>
                {c.featured && <div style={s.consBest}>Most booked</div>}
                <div style={s.consName}>{c.name}</div>
                <div style={s.consDesc}>{c.desc}</div>
                <div style={s.consPrice}><span style={s.consSup}>£</span>{c.price}<span style={s.consSub2}> · {c.unit}</span></div>
              </div>
            ))}
          </div>

          <div style={s.founding}>
            <div style={s.foundingIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A7B39" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div>
              <div style={s.foundingTitle}>Founding client offer, first 3 clients only</div>
              <div style={s.foundingText}>Lock in <strong style={{ color: C.white }}>15% off your monthly fee for life</strong> during our launch phase. Same qualified accountants, same deliverables, this rate never increases. Strictly limited.</div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <QuoteModal
          services={selectedServices}
          getPrice={getPrice}
          monthly={monthly}
          discounted={discounted}
          bandLabel={BAND_LABELS[band]}
          entities={ents}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

function StepLabel({ num, text }: { num: number; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.7rem" }}>
      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#F4ECD7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: C.gold, flexShrink: 0 }}>{num}</div>
      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: C.gold }}>{text}</span>
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const s: Record<string, React.CSSProperties> = {
  section: { background: C.navy, padding: "6rem 1.5rem", fontFamily: "'Hanken Grotesk','Inter',sans-serif", WebkitFontSmoothing: "antialiased" },
  container: { maxWidth: 960, margin: "0 auto" },
  header: { textAlign: "center", marginBottom: "3rem" },
  eyebrow: { display: "inline-block", fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: C.gold, marginBottom: "1rem", fontFamily: "'IBM Plex Mono',monospace" },
  title: { fontFamily: "'Newsreader',Georgia,serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 400, lineHeight: 1.12, color: C.white, marginBottom: "0.9rem" },
  titleEm: { fontStyle: "italic", color: C.gold2 },
  subtitle: { fontSize: 14, color: C.muted, maxWidth: 520, margin: "0 auto 1.5rem", lineHeight: 1.7 },
  trustRow: { display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" },
  trustBadge: { fontSize: 11, fontWeight: 500, padding: "5px 14px", borderRadius: 30, border: `1px solid ${C.border}`, color: C.muted, background: C.card },
  bandGrid: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 7, marginBottom: "2rem" },
  bandBtn: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "0.85rem 0.7rem", cursor: "pointer", textAlign: "left", transition: "all 0.2s", fontFamily: "'Hanken Grotesk','Inter',sans-serif" },
  bandBtnOn: { border: `1.5px solid ${C.gold}`, background: C.card2 },
  bandLabel: { fontSize: 12, fontWeight: 600, color: C.white, marginBottom: 2, lineHeight: 1.3 },
  bandDesc: { fontSize: 10, color: C.muted, marginBottom: 5 },
  bandTag: { fontSize: 9, fontWeight: 600, padding: "2px 7px", borderRadius: 20, display: "inline-block" },
  entRow: { display: "flex", gap: 7, marginBottom: "2rem", flexWrap: "wrap" },
  entBtn: { flex: 1, minWidth: 90, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "0.75rem 0.5rem", cursor: "pointer", textAlign: "center", fontFamily: "'Hanken Grotesk','Inter',sans-serif", fontSize: 11, fontWeight: 500, color: C.muted, transition: "all 0.2s" },
  entBtnOn: { border: `1.5px solid ${C.gold}`, background: C.card2, color: C.white },
  entBig: { fontSize: "1.5rem", fontWeight: 600, color: C.gold2, display: "block", lineHeight: 1, marginBottom: 3 },
  grpSection: { marginBottom: "1.2rem" },
  grpLabel: { fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, marginBottom: "0.6rem", paddingLeft: 8, borderLeft: `2px solid ${C.gold}` },
  svcGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 7, marginBottom: "0.5rem" },
  svcCard: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "0.85rem 1rem", cursor: "pointer", transition: "all 0.18s", display: "flex", alignItems: "flex-start", gap: 10 },
  svcCardOn: { border: `1px solid ${C.gold}`, background: C.card2 },
  chk: { width: 18, height: 18, borderRadius: 5, border: `1.5px solid ${C.border}`, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "transparent", transition: "all 0.18s" },
  chkOn: { background: C.gold, borderColor: C.gold, color: "#fff" },
  svcBody: { flex: 1 },
  svcName: { fontSize: 12, fontWeight: 600, color: C.white, marginBottom: 2, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" },
  svcTag: { fontSize: 9, fontWeight: 600, padding: "2px 7px", borderRadius: 20, background: "rgba(22,163,74,0.10)", color: "#16A34A" },
  svcDesc: { fontSize: 11, color: C.muted, lineHeight: 1.5, marginBottom: 4 },
  svcPrice: { fontSize: 12, fontWeight: 600, color: C.gold2 },
  summary: { background: C.card2, border: `1.5px solid ${C.border}`, borderRadius: 14, padding: "1.6rem 1.8rem", margin: "1.5rem 0" },
  sumHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.2rem" },
  sumTitle: { fontFamily: "'Newsreader',Georgia,serif", fontSize: "1.2rem", fontWeight: 400, color: C.white },
  sumNote: { fontSize: 11, color: C.muted },
  sumEmpty: { textAlign: "center", padding: "1.5rem 0", color: C.muted, fontSize: 13 },
  sumRows: { display: "flex", flexDirection: "column", gap: 0, marginBottom: "1rem" },
  sumRow: { display: "flex", justifyContent: "space-between", fontSize: 13, padding: "7px 0", borderBottom: `1px solid ${C.faint}` },
  sumRowName: { color: C.muted },
  sumRowPrice: { fontWeight: 500, color: C.white },
  sumDivider: { border: "none", borderTop: `1px solid ${C.border}`, margin: "0.8rem 0" },
  sumTotals: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" },
  sumTotalBox: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "0.9rem 1rem" },
  sumTotalBoxGold: { border: `1px solid ${C.gold}` },
  sumTotalLabel: { fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: C.muted, marginBottom: "0.3rem" },
  sumTotalNum: { fontSize: "1.8rem", fontWeight: 600, color: C.white, lineHeight: 1 },
  sumSup: { fontSize: "0.8rem", color: C.gold2, verticalAlign: "top", marginTop: 3, display: "inline-block" },
  sumSub: { fontSize: "0.75rem", fontWeight: 400, color: C.muted },
  sumTotalSub: { fontSize: 11, color: C.muted, marginTop: 2 },
  discBanner: { background: "rgba(22,163,74,0.06)", border: "1px solid rgba(22,163,74,0.2)", borderRadius: 10, padding: "0.7rem 1rem", marginTop: "0.8rem", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },
  discDot: { width: 7, height: 7, borderRadius: "50%", background: C.green, flexShrink: 0 },
  discText: { fontSize: 12, color: C.muted },
  ctaRow: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "3rem" },
  ctaPrimary: { flex: 2, minWidth: 180, fontFamily: "'Hanken Grotesk','Inter',sans-serif", fontSize: 13, fontWeight: 600, padding: "13px 24px", borderRadius: 10, border: "none", background: "#1A1A16", color: "#F7F4EC", cursor: "pointer", transition: "all 0.2s" },
  ctaDisabled: { opacity: 0.5, cursor: "not-allowed" },
  ctaOutline: { flex: 1, minWidth: 140, fontFamily: "'Hanken Grotesk','Inter',sans-serif", fontSize: 13, fontWeight: 600, padding: "13px 20px", borderRadius: 10, border: `1px solid ${C.border}`, background: "transparent", color: C.white, cursor: "pointer" },
  divider: { border: "none", borderTop: `1px solid ${C.border}`, margin: "0 0 2.5rem" },
  consHeader: { textAlign: "center", marginBottom: "1.5rem" },
  consTitle: { fontFamily: "'Newsreader',Georgia,serif", fontSize: "1.5rem", fontWeight: 400, color: C.white, marginBottom: "0.4rem" },
  consSub: { fontSize: 13, color: C.muted },
  consGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 10, marginBottom: "2rem" },
  consCard: { background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "1.1rem 1rem", transition: "border-color 0.2s" },
  consCardFeatured: { border: `1px solid ${C.gold}` },
  consBest: { fontSize: 9, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", padding: "3px 9px", borderRadius: 20, background: "#F4ECD7", color: C.gold, display: "inline-block", marginBottom: "0.5rem" },
  consName: { fontSize: 13, fontWeight: 600, color: C.white, marginBottom: "0.3rem" },
  consDesc: { fontSize: 11, color: C.muted, lineHeight: 1.5, marginBottom: "0.8rem" },
  consPrice: { fontSize: "1.6rem", fontWeight: 600, color: C.white, lineHeight: 1 },
  consSup: { fontSize: "0.8rem", color: C.gold2, verticalAlign: "top", marginTop: 3, display: "inline-block" },
  consSub2: { fontSize: "0.75rem", fontWeight: 400, color: C.muted },
  founding: { display: "flex", gap: "1rem", background: "#F4ECD7", border: `1px solid ${C.border}`, borderRadius: 12, padding: "1.3rem 1.5rem", alignItems: "flex-start", flexWrap: "wrap" },
  foundingIcon: { fontSize: 22, flexShrink: 0 },
  foundingTitle: { fontSize: 13, fontWeight: 600, color: C.gold, marginBottom: "0.25rem" },
  foundingText: { fontSize: 12, color: C.muted, lineHeight: 1.6 },
};

// Modal styles
const m: Record<string, React.CSSProperties> = {
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" },
  modal: { background: "#fff", border: `1px solid ${C.border}`, borderRadius: 16, padding: "2rem", width: "100%", maxWidth: 520, maxHeight: "90vh", overflowY: "auto", fontFamily: "'Hanken Grotesk','Inter',sans-serif" },
  modalHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" },
  modalEyebrow: { fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: C.gold, marginBottom: 4, fontFamily: "'IBM Plex Mono',monospace" },
  modalTitle: { fontFamily: "'Newsreader',Georgia,serif", fontSize: "1.4rem", fontWeight: 400, color: C.white },
  xBtn: { background: "transparent", border: "none", color: C.muted, fontSize: 16, cursor: "pointer", padding: "4px 8px", lineHeight: 1 },
  quoteSummary: { background: C.card2, border: `1px solid ${C.border}`, borderRadius: 10, padding: "1rem 1.1rem", marginBottom: "1.5rem" },
  quoteRows: { display: "flex", flexDirection: "column", gap: 0, marginBottom: "0.8rem" },
  quoteRow: { display: "flex", justifyContent: "space-between", fontSize: 12, padding: "5px 0", borderBottom: `1px solid ${C.border}` },
  quoteRowName: { color: C.muted },
  quoteRowPrice: { fontWeight: 500, color: C.white },
  quoteTotals: { display: "flex", alignItems: "center", gap: "1rem", paddingTop: "0.6rem", flexWrap: "wrap" },
  quoteTotalItem: { display: "flex", flexDirection: "column", gap: 2 },
  quoteTotalLabel: { fontSize: 10, textTransform: "uppercase", letterSpacing: "0.07em", color: C.muted },
  quoteTotalNum: { fontSize: "1.2rem", fontWeight: 600, color: C.white },
  quoteTotalDivider: { width: "1px", height: 32, background: C.border },
  quoteMeta: { fontSize: 10, color: C.muted, marginTop: "0.6rem" },
  formRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 0 },
  formGroup: { display: "flex", flexDirection: "column", gap: 5, marginBottom: 12 },
  label: { fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: C.muted },
  input: { fontFamily: "'Hanken Grotesk','Inter',sans-serif", fontSize: 13, color: C.white, background: "#FAFAF7", border: `1px solid ${C.border}`, borderRadius: 9, padding: "11px 14px", outline: "none", width: "100%" },
  errorMsg: { fontSize: 12, color: "#dc2626", marginBottom: 10 },
  submitBtn: { width: "100%", fontFamily: "'Hanken Grotesk','Inter',sans-serif", fontSize: 13, fontWeight: 600, padding: "13px", borderRadius: 10, border: "none", background: "#1A1A16", color: "#F7F4EC", cursor: "pointer", transition: "all 0.2s", marginBottom: 10 },
  privacyNote: { fontSize: 11, color: C.muted, textAlign: "center", lineHeight: 1.5 },
  successBox: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem 1rem", gap: "1rem" },
  successIcon: { width: 52, height: 52, borderRadius: "50%", background: "rgba(22,163,74,0.10)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: C.green },
  successTitle: { fontFamily: "'Newsreader',Georgia,serif", fontSize: "1.5rem", fontWeight: 400, color: C.white },
  successText: { fontSize: 13, color: C.muted, lineHeight: 1.7, maxWidth: 320 },
  closeBtn: { fontFamily: "'Hanken Grotesk','Inter',sans-serif", fontSize: 13, fontWeight: 600, padding: "11px 28px", borderRadius: 10, border: `1px solid ${C.border}`, background: "transparent", color: C.white, cursor: "pointer" },
};
