import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9n5bunVAgPbXEByekPS0P-64woWxAglpbLIvDfSJbMkxVl4Q3cVBEv4ZqnQXFYd_k3w/exec";

export async function POST(req: Request) {
  try {
    const { name, email, company, bandLabel, entities, monthly, discounted, services } = await req.json();

    if (!name || !email || !services?.length) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const serviceNames = services.map((s: { name: string; price: number }) => s.name).join(", ");
    const serviceRows = services.map((s: { name: string; price: number }) =>
      `<tr>
        <td style="padding:10px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:14px;color:#F8F5EE;">${s.name}</td>
        <td style="padding:10px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:14px;font-weight:600;color:#e8c96a;text-align:right;">£${s.price.toLocaleString()}/mo</td>
      </tr>`
    ).join("");

    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

    // ── 1. Log to Google Sheets via Apps Script ──────────────────────────────
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date, time, name, email,
          company: company || "",
          bandLabel,
          entities: entities === 4 ? "4+" : String(entities),
          services: serviceNames,
          monthly: String(monthly),
          discounted: String(discounted),
          annual: String(monthly * 12),
        }),
      });
    } catch (sheetError) {
      console.error("Sheets logging error:", sheetError);
    }

    // ── 2. Email to client ───────────────────────────────────────────────────
    await resend.emails.send({
      from: "Cledger <info@cledger.co.uk>",
      to: email,
      replyTo: "info@cledger.co.uk",
      subject: `Your Cledger quote — £${monthly.toLocaleString()}/month`,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0B1222;color:#F8F5EE;border-radius:12px;overflow:hidden;">
          <div style="background:#111827;border-bottom:1px solid rgba(201,168,76,0.2);padding:28px 32px;">
            <div style="font-size:22px;font-weight:600;color:#F8F5EE;letter-spacing:-0.3px;">Cledger</div>
            <div style="font-size:12px;color:#C9A84C;margin-top:4px;text-transform:uppercase;letter-spacing:0.1em;">Your custom quote</div>
          </div>
          <div style="padding:32px;">
            <p style="font-size:15px;color:#F8F5EE;margin-bottom:8px;">Hi ${name},</p>
            <p style="font-size:14px;color:#8a94a8;line-height:1.7;margin-bottom:24px;">
              Here's the custom package you built on cledger.co.uk.
              ${company ? `We've put this together for <strong style="color:#F8F5EE;">${company}</strong>.` : ""}
              We'll follow up within 24 hours on UK business days.
            </p>
            <div style="background:#111827;border:0.5px solid rgba(255,255,255,0.07);border-radius:10px;padding:20px 22px;margin-bottom:24px;">
              <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#8a94a8;margin-bottom:12px;">
                ${entities === 4 ? "4+" : entities} ${entities === 1 ? "entity" : "entities"} · ${bandLabel} turnover
              </div>
              <table style="width:100%;border-collapse:collapse;">${serviceRows}</table>
            </div>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:12px;background:#131d31;border-radius:8px 0 0 8px;width:50%;">
                  <div style="font-size:10px;text-transform:uppercase;color:#8a94a8;margin-bottom:6px;">Monthly total</div>
                  <div style="font-size:26px;font-weight:600;color:#F8F5EE;">£${monthly.toLocaleString()}<span style="font-size:13px;font-weight:400;color:#8a94a8;">/mo</span></div>
                  <div style="font-size:11px;color:#8a94a8;margin-top:3px;">£${(monthly * 12).toLocaleString()} per year</div>
                </td>
                <td style="padding:12px;background:#131d31;border-left:1px solid #0B1222;border-radius:0 8px 8px 0;width:50%;">
                  <div style="font-size:10px;text-transform:uppercase;color:#8a94a8;margin-bottom:6px;">With founding 15% off</div>
                  <div style="font-size:26px;font-weight:600;color:#e8c96a;">£${discounted.toLocaleString()}<span style="font-size:13px;font-weight:400;color:#8a94a8;">/mo</span></div>
                  <div style="font-size:11px;color:#8a94a8;margin-top:3px;">£${(discounted * 12).toLocaleString()} per year</div>
                </td>
              </tr>
            </table>
            <div style="background:rgba(74,222,128,0.06);border:0.5px solid rgba(74,222,128,0.2);border-radius:10px;padding:14px 16px;margin-bottom:28px;">
              <div style="font-size:12px;color:#8a94a8;line-height:1.6;">
                🏅 <strong style="color:#4ade80;">Founding client offer:</strong> Lock in 15% off for life when you sign up during our launch phase. First 3 clients only — strictly limited.
              </div>
            </div>
            <div style="margin-bottom:24px;">
              <a href="mailto:info@cledger.co.uk?subject=Re: My Cledger quote" style="display:inline-block;background:#C9A84C;color:#0B1222;font-size:13px;font-weight:600;padding:13px 28px;border-radius:9px;text-decoration:none;">Reply to get started →</a>
            </div>
            <div style="font-size:12px;color:#8a94a8;line-height:1.7;border-top:0.5px solid rgba(255,255,255,0.07);padding-top:20px;">
              <strong style="color:#F8F5EE;">What happens next?</strong><br>
              Reply to this email or book a free 30-minute call at cledger.co.uk. We'll confirm your package, send an engagement letter, and have everything set up within 5 business days.
            </div>
          </div>
          <div style="background:#111827;border-top:1px solid rgba(255,255,255,0.06);padding:18px 32px;">
            <div style="font-size:11px;color:#8a94a8;">Cledger Ltd · London, United Kingdom · <a href="https://cledger.co.uk" style="color:#C9A84C;">cledger.co.uk</a></div>
          </div>
        </div>
      `,
    });

    // ── 3. Notification to Cledger ───────────────────────────────────────────
    await resend.emails.send({
      from: "Cledger Website <info@cledger.co.uk>",
      to: "info@cledger.co.uk",
      replyTo: email,
      subject: `New quote — ${name} · £${monthly.toLocaleString()}/mo · ${bandLabel}`,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#0B1222;color:#F8F5EE;border-radius:12px;overflow:hidden;">
          <div style="background:#111827;border-bottom:1px solid rgba(201,168,76,0.2);padding:24px 28px;">
            <div style="font-size:18px;font-weight:600;color:#F8F5EE;">New quote request</div>
            <div style="font-size:12px;color:#C9A84C;margin-top:3px;">${date} at ${time} · logged to Google Sheets</div>
          </div>
          <div style="padding:28px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              <tr><td style="padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:11px;text-transform:uppercase;color:#8a94a8;width:130px;">Name</td><td style="padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:14px;color:#F8F5EE;">${name}</td></tr>
              <tr><td style="padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:11px;text-transform:uppercase;color:#8a94a8;">Email</td><td style="padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:14px;"><a href="mailto:${email}" style="color:#C9A84C;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:11px;text-transform:uppercase;color:#8a94a8;">Company</td><td style="padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:14px;color:#F8F5EE;">${company}</td></tr>` : ""}
              <tr><td style="padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:11px;text-transform:uppercase;color:#8a94a8;">Turnover</td><td style="padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.07);font-size:14px;color:#F8F5EE;">${bandLabel}</td></tr>
              <tr><td style="padding:8px 0;font-size:11px;text-transform:uppercase;color:#8a94a8;">Entities</td><td style="padding:8px 0;font-size:14px;color:#F8F5EE;">${entities === 4 ? "4+" : entities}</td></tr>
            </table>
            <div style="background:#111827;border-radius:10px;padding:16px 18px;margin-bottom:16px;">
              <table style="width:100%;border-collapse:collapse;">${serviceRows}</table>
            </div>
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              <tr>
                <td style="padding:12px;background:#131d31;border-radius:8px 0 0 8px;">
                  <div style="font-size:10px;color:#8a94a8;margin-bottom:4px;">Monthly</div>
                  <div style="font-size:20px;font-weight:600;color:#F8F5EE;">£${monthly.toLocaleString()}</div>
                </td>
                <td style="padding:12px;background:#131d31;border-left:1px solid #0B1222;">
                  <div style="font-size:10px;color:#8a94a8;margin-bottom:4px;">With 15% off</div>
                  <div style="font-size:20px;font-weight:600;color:#e8c96a;">£${discounted.toLocaleString()}</div>
                </td>
                <td style="padding:12px;background:#131d31;border-left:1px solid #0B1222;border-radius:0 8px 8px 0;">
                  <div style="font-size:10px;color:#8a94a8;margin-bottom:4px;">Annual</div>
                  <div style="font-size:20px;font-weight:600;color:#F8F5EE;">£${(monthly * 12).toLocaleString()}</div>
                </td>
              </tr>
            </table>
            <a href="mailto:${email}?subject=Re: Your Cledger quote — £${monthly.toLocaleString()}/month" style="display:inline-block;background:#C9A84C;color:#0B1222;font-size:13px;font-weight:600;padding:12px 24px;border-radius:9px;text-decoration:none;">Reply to ${name} →</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
