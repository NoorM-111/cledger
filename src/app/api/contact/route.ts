import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, businessType, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Cledger Website <noreply@cledger.co.uk>",
      to: "info@cledger.co.uk",
      replyTo: email,
      subject: `New enquiry from ${name}, ${service}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0B1222; color: #F8F5EE; border-radius: 12px; overflow: hidden;">

          <!-- Header -->
          <div style="background: #111827; border-bottom: 1px solid rgba(201,168,76,0.2); padding: 28px 32px;">
            <div style="font-size: 22px; font-weight: 600; color: #F8F5EE; letter-spacing: -0.3px;">Cledger</div>
            <div style="font-size: 12px; color: #C9A84C; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.1em;">New website enquiry</div>
          </div>

          <!-- Body -->
          <div style="padding: 32px;">

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a94a8; width: 140px;">Full name</td>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 14px; color: #F8F5EE;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a94a8;">Email</td>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 14px; color: #C9A84C;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a94a8;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 14px; color: #F8F5EE;">${phone}</td>
              </tr>` : ""}
              ${businessType ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a94a8;">Business type</td>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 14px; color: #F8F5EE;">${businessType}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a94a8;">Service</td>
                <td style="padding: 10px 0; border-bottom: 0.5px solid rgba(255,255,255,0.07); font-size: 14px; color: #F8F5EE;">${service}</td>
              </tr>
            </table>

            <!-- Message -->
            <div style="margin-top: 24px;">
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a94a8; margin-bottom: 10px;">Message</div>
              <div style="background: #131d31; border: 0.5px solid rgba(201,168,76,0.15); border-radius: 10px; padding: 16px 18px; font-size: 14px; color: #F8F5EE; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</div>
            </div>

            <!-- CTA -->
            <div style="margin-top: 28px;">
              <a href="mailto:${email}?subject=Re: Your Cledger enquiry" style="display: inline-block; background: #C9A84C; color: #0B1222; font-size: 13px; font-weight: 600; padding: 12px 24px; border-radius: 9px; text-decoration: none;">Reply to ${name}</a>
            </div>

          </div>

          <!-- Footer -->
          <div style="background: #111827; border-top: 1px solid rgba(255,255,255,0.06); padding: 20px 32px;">
            <div style="font-size: 11px; color: #8a94a8; line-height: 1.6;">
              This enquiry was submitted via the contact form at <a href="https://cledger.co.uk" style="color: #C9A84C;">cledger.co.uk</a>
              &nbsp;·&nbsp; Cledger Ltd, London, United Kingdom
            </div>
          </div>

        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
