import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const INTRO: Record<string, string> = {
  salary: 'Here is your estimated PAYE take-home pay breakdown for 2026/27 based on the details you entered.',
  'corporation-tax': 'Here is your estimated corporation tax position for 2026/27 based on the details you entered.',
  vat: 'Here is your estimated VAT position based on the details you entered.',
}

const SUBJECTS: Record<string, string> = {
  salary: 'Your PAYE & take-home estimate — 2026/27 tax year | Cledger',
  'corporation-tax': 'Your corporation tax estimate — 2026/27 | Cledger',
  vat: 'Your VAT position estimate | Cledger',
}

function buildUserHTML(
  name: string,
  calculatorType: string,
  results: Record<string, string>,
): string {
  const resultsRows = Object.entries(results)
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 16px;border-bottom:1px solid #1e2d48;color:#8a94a8;font-size:13px;font-family:sans-serif;">${k}</td>
        <td style="padding:10px 16px;border-bottom:1px solid #1e2d48;color:#F8F5EE;font-size:13px;font-weight:600;font-family:sans-serif;">${v}</td>
      </tr>`,
    )
    .join('')

  const intro = INTRO[calculatorType] ?? 'Here are your tax calculator results.'

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0B1222;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">

    <div style="background:#111827;border:1px solid rgba(201,168,76,0.15);border-radius:12px;padding:28px 32px;margin-bottom:20px;">
      <div style="margin-bottom:20px;">
        <span style="display:inline-flex;align-items:center;gap:8px;">
          <span style="display:inline-block;width:28px;height:28px;background:#C9A84C;border-radius:5px;text-align:center;line-height:28px;font-weight:700;font-size:14px;color:#0B1222;font-family:sans-serif;">C</span>
          <span style="font-size:17px;font-weight:700;color:#F8F5EE;font-family:sans-serif;">Cledger<span style="color:#C9A84C;">.</span></span>
        </span>
      </div>
      <p style="color:#8a94a8;font-size:14px;margin:0 0 8px;font-family:sans-serif;">Hi ${name},</p>
      <p style="color:#F8F5EE;font-size:15px;line-height:1.6;margin:0;font-family:sans-serif;">${intro}</p>
    </div>

    <div style="background:#111827;border:1px solid rgba(201,168,76,0.15);border-radius:12px;overflow:hidden;margin-bottom:20px;">
      <div style="background:rgba(201,168,76,0.12);padding:10px 16px;">
        <p style="color:#C9A84C;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0;font-family:sans-serif;">Your results</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tbody>${resultsRows}</tbody>
      </table>
    </div>

    <div style="background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.2);border-radius:8px;padding:14px 16px;margin-bottom:20px;">
      <p style="color:#8a94a8;font-size:12px;line-height:1.7;margin:0;font-family:sans-serif;">These figures are estimates based on the information you provided. They do not constitute financial or tax advice. Always confirm your position with a qualified accountant before filing.</p>
    </div>

    <div style="background:#131d31;border:1px solid rgba(201,168,76,0.15);border-radius:12px;padding:24px 28px;margin-bottom:20px;">
      <p style="color:#F8F5EE;font-size:15px;font-weight:600;margin:0 0 8px;font-family:sans-serif;">Want Cledger to handle this for you?</p>
      <p style="color:#8a94a8;font-size:13px;line-height:1.6;margin:0 0 16px;font-family:sans-serif;">We provide bookkeeping, VAT, payroll, Self Assessment, and corporation tax filing for UK businesses. Qualified accountants. MTD compliant. Transparent monthly pricing.</p>
      <a href="https://www.cledger.co.uk/#contact" style="display:inline-block;background:#C9A84C;color:#0B1222;font-weight:600;font-size:14px;padding:11px 22px;border-radius:8px;text-decoration:none;font-family:sans-serif;">Get in touch →</a>
    </div>

    <p style="color:#8a94a8;font-size:13px;margin:0 0 4px;font-family:sans-serif;">The Cledger Team</p>
    <p style="margin:0 0 24px;font-family:sans-serif;">
      <a href="mailto:info@cledger.co.uk" style="color:#C9A84C;font-size:13px;text-decoration:none;">info@cledger.co.uk</a>
      <span style="color:#8a94a8;font-size:13px;"> · </span>
      <a href="https://www.cledger.co.uk" style="color:#C9A84C;font-size:13px;text-decoration:none;">www.cledger.co.uk</a>
    </p>
    <div style="border-top:1px solid rgba(201,168,76,0.1);padding-top:16px;">
      <p style="color:#4a5568;font-size:11px;margin:0;font-family:sans-serif;">Cledger Ltd — UK Accounting Specialists | cledger.co.uk</p>
    </div>
  </div>
</body>
</html>`
}

function buildInternalText(
  name: string,
  email: string,
  calculatorType: string,
  results: Record<string, string>,
  inputs: Record<string, string>,
): string {
  const inputLines = Object.entries(inputs).map(([k, v]) => `${k}: ${v}`).join('\n')
  const resultLines = Object.entries(results).map(([k, v]) => `${k}: ${v}`).join('\n')

  return `LEAD DETAILS
Name: ${name}
Email: ${email}
Calculator used: ${calculatorType}
Timestamp: ${new Date().toISOString()}

INPUTS ENTERED:
${inputLines}

RESULTS CALCULATED:
${resultLines}

Follow up within 24 hours.`
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, calculatorType, results, inputs } = body as {
      name: string
      email: string
      calculatorType: string
      results: Record<string, string>
      inputs: Record<string, string>
    }

    if (!name || !email || !calculatorType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const subject = SUBJECTS[calculatorType] ?? 'Your tax calculator results | Cledger'

    await Promise.all([
      resend.emails.send({
        from: 'Cledger <info@cledger.co.uk>',
        to: [email],
        subject,
        html: buildUserHTML(name, calculatorType, results),
      }),
      resend.emails.send({
        from: 'Cledger Calculator <info@cledger.co.uk>',
        to: ['info@cledger.co.uk'],
        subject: `New calculator lead — ${calculatorType} — ${name}`,
        text: buildInternalText(name, email, calculatorType, results, inputs),
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
