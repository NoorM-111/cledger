import Link from 'next/link'
import BlogLayout, { s, C } from '@/components/BlogLayout'

export const metadata = {
  title: 'Bookkeeping Hourly Rates UK 2026: What You Pay',
  description: 'UK bookkeepers charge £20–£50 per hour in 2026. Rates by bookkeeper type, and when hourly billing costs more than a fixed monthly fee.',
  openGraph: {
    title: 'Bookkeeping Hourly Rates UK 2026: What You Pay',
    description: 'UK bookkeepers charge £20–£50 per hour in 2026. Rates by bookkeeper type, and when hourly billing quietly costs more than a fixed monthly fee.',
    url: 'https://www.cledger.co.uk/blog/bookkeeping-hourly-rates-uk',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.cledger.co.uk/blog/bookkeeping-hourly-rates-uk',
  },
}

export default function BookkeepingHourlyRatesUK() {
  return (
    <BlogLayout
      eyebrow="Pricing guide"
      title="Bookkeeping hourly rates UK 2026: what you actually pay"
      date="September 26, 2026"
      readTime="7 min read"
      intro={<>UK bookkeepers charge <strong style={s.strong}>£20 to £50 per hour</strong> in 2026. Where you land inside that range depends on three things: whether they are qualified, whether they carry professional indemnity, and how much of the thinking you are asking them to do. This guide breaks the range down properly, and explains when paying by the hour quietly costs more than a fixed monthly fee.</>}
      ctaText="See fixed monthly pricing instead →"
      ctaHref="/pricing"
      slug="bookkeeping-hourly-rates-uk"
      description="UK bookkeepers charge £20–£50 per hour in 2026. Rates by bookkeeper type, what drives them, and when hourly billing costs more than a fixed monthly fee."
      dateModified="2026-09-26"
      faqs={[
        { q: 'How much do bookkeepers charge per hour in the UK?', a: 'UK bookkeepers charge £20 to £50 per hour in 2026. Unqualified freelancers doing basic data entry sit at the bottom of that range. AAT-qualified bookkeepers handling VAT returns and month-end sit at £30 to £45. Practice-employed bookkeepers billed through an accountancy firm reach £50 or more, because the rate covers supervision and the firm’s professional indemnity.' },
        { q: 'What does a freelance bookkeeper charge per hour?', a: 'Freelance bookkeepers in the UK typically charge £20 to £35 per hour. The lower end usually means transaction coding to your instructions, with judgement calls passed back to you. The upper end usually means an AAT-qualified freelancer who will make those calls themselves and stand behind them.' },
        { q: 'Is hourly or fixed-fee bookkeeping cheaper?', a: 'Fixed fees are cheaper for most businesses with steady transaction volumes, because the price does not move when a month is messy. Hourly is cheaper only when your volume is genuinely low and predictable. The hidden cost of hourly is that the one month you most need help — a VAT deadline, a backlog, a bank feed that broke — is the month the invoice is largest.' },
        { q: 'Why do bookkeeping hourly rates vary so much?', a: 'Three factors account for most of the spread. Qualification: an AAT-qualified bookkeeper commands more than someone self-taught. Liability: a bookkeeper carrying professional indemnity insurance prices that in. And judgement: coding to a fixed chart of accounts is cheap, while deciding what something is, chasing you for the answer, and being right about the VAT treatment is not.' },
        { q: 'How many hours does bookkeeping take per month?', a: 'For a small UK business with 50 to 150 monthly transactions, budget four to eight hours a month for bookkeeping and VAT preparation. Below 50 transactions, two to four hours is realistic. Above 300, you are usually past the point where hourly billing is sensible and a fixed monthly package costs less.' },
        { q: 'Do accountants charge more per hour than bookkeepers?', a: 'Yes, substantially. UK accountants typically charge £50 to £150 per hour for advisory and compliance work, against £20 to £50 for bookkeeping. That gap is the reason it rarely makes sense to have an accountant do your data entry — you are paying an advisory rate for processing work.' },
      ]}
    >
      <h2 style={s.h2}>How much do bookkeepers charge per hour in the UK?</h2>
      <p style={s.p}><strong style={s.strong}>£20 to £50 per hour</strong> in 2026. Most small businesses paying hourly land between £25 and £40.</p>
      <p style={s.p}>That range is wide because it covers genuinely different work sold under one word. Here is what each band actually buys.</p>

      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}>Who</th>
            <th style={s.th}>Hourly rate</th>
            <th style={s.th}>What that buys</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Freelance, unqualified', '£20–£28', 'Transaction coding to your instructions. Judgement calls come back to you.'],
            ['Freelance, AAT-qualified', '£28–£38', 'Coding plus VAT returns and month-end. Makes the calls rather than escalating them.'],
            ['Bookkeeper inside a practice', '£35–£50', 'Supervised work, reviewed before it reaches you, with the firm’s indemnity behind it.'],
            ['Accountant doing bookkeeping', '£50–£150', 'An advisory rate applied to processing work. Rarely good value.'],
          ].map(([who, rate, what]) => (
            <tr key={who}>
              <td style={s.td}>{who}</td>
              <td style={s.td}>{rate}</td>
              <td style={s.td}>{what}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={s.p}>The cheapest rate is not always the cheapest outcome. A £22 an hour bookkeeper who returns a list of queries every month costs you your own time to resolve them — and your time is the expensive kind.</p>

      <h2 style={s.h2}>What does a freelance bookkeeper charge per hour?</h2>
      <p style={s.p}><strong style={s.strong}>£20 to £35 per hour</strong> is the normal freelance range in the UK.</p>
      <p style={s.p}>The question worth asking a freelancer is not their rate. It is what happens when something is ambiguous. A receipt with no VAT number, a payment that might be a director’s loan, a supplier invoice that arrives three months late — these are the moments that decide whether bookkeeping is actually off your plate.</p>
      <p style={s.p}>Cheaper freelancers hand those back. That is not dishonest; it is what the rate pays for. But it means the work is not finished when the invoice arrives.</p>

      <h2 style={s.h2}>Why do hourly rates vary so much?</h2>
      <p style={s.p}>Three things explain nearly all of the spread.</p>
      <ul>
        <li style={s.li}><strong style={s.strong}>Qualification.</strong> An AAT-qualified bookkeeper has been examined on VAT, payroll and double entry. That is worth roughly £8 to £12 an hour over someone self-taught.</li>
        <li style={s.li}><strong style={s.strong}>Liability.</strong> A bookkeeper carrying professional indemnity insurance prices it in. If your VAT return is wrong, it matters a great deal whether anyone stands behind it.</li>
        <li style={s.li}><strong style={s.strong}>Judgement.</strong> Coding to a fixed chart of accounts is cheap. Working out what something is, chasing you for the answer, and being right about the VAT treatment is not.</li>
      </ul>

      <h2 style={s.h2}>Is hourly or fixed-fee bookkeeping cheaper?</h2>
      <p style={s.p}>For most businesses with steady volume, <strong style={s.strong}>fixed fees work out cheaper</strong> — and more importantly, they are predictable.</p>
      <p style={s.p}>Here is the arithmetic on a real shape of business. A VAT-registered limited company with roughly 120 transactions a month, needing bookkeeping and quarterly VAT returns:</p>

      <table style={s.table}>
        <thead>
          <tr>
            <th style={s.th}></th>
            <th style={s.th}>Hourly at £32</th>
            <th style={s.th}>Fixed monthly</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['A quiet month (5 hrs)', '£160', '£274'],
            ['A normal month (7 hrs)', '£224', '£274'],
            ['VAT quarter (11 hrs)', '£352', '£274'],
            ['A messy month — backlog, broken bank feed (16 hrs)', '£512', '£274'],
            ['Twelve months', '£3,072', '£3,288'],
          ].map(([row, hourly, fixed]) => (
            <tr key={row}>
              <td style={s.td}>{row}</td>
              <td style={s.td}>{hourly}</td>
              <td style={s.td}>{fixed}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={s.p}>Over a year the two are close — £3,072 against £3,288. The difference is not the total. It is that the hourly column spikes to £512 in exactly the month you are least able to absorb it, and you cannot see it coming.</p>

      <div style={s.highlight}>
        <p style={{ ...s.p, marginBottom: 0 }}>The real cost of hourly billing is not the rate. It is that <strong style={s.strong}>the month you most need help is the month the invoice is largest</strong> — and that you have a quiet financial incentive not to ask.</p>
      </div>

      <h2 style={s.h2}>How many hours does bookkeeping actually take?</h2>
      <p style={s.p}>Useful for sense-checking any quote you are given:</p>
      <ul>
        <li style={s.li}><strong style={s.strong}>Under 50 transactions a month</strong> — two to four hours. Hourly billing is genuinely fine here.</li>
        <li style={s.li}><strong style={s.strong}>50 to 150 transactions</strong> — four to eight hours, plus two to four more in a VAT quarter.</li>
        <li style={s.li}><strong style={s.strong}>150 to 300 transactions</strong> — eight to fifteen hours. This is where fixed fees usually overtake hourly.</li>
        <li style={s.li}><strong style={s.strong}>Over 300 transactions</strong> — hourly billing stops making sense. You are buying a process, not a person’s afternoon.</li>
      </ul>
      <p style={s.p}>If a quote assumes far fewer hours than these, ask what is excluded. It is usually VAT, or the chasing.</p>

      <h2 style={s.h2}>When hourly is the right choice</h2>
      <p style={s.p}>Hourly is not a trap. It is the better structure in three situations: when your volume is genuinely low and stable, when you need a one-off catch-up or clean-up rather than an ongoing arrangement, and when you want a second pair of eyes on something specific without committing to a monthly relationship.</p>
      <p style={s.p}>It is the wrong structure when your volume moves, when deadlines are fixed, or when you need to budget twelve months ahead — which describes most growing businesses.</p>

      <h2 style={s.h2}>What Cledger charges, and why it is not hourly</h2>
      <p style={s.p}>We do not bill bookkeeping by the hour. Bookkeeping starts at <strong style={s.strong}>£175 a month</strong>, VAT returns at <strong style={s.strong}>£99 a month</strong>, and the fee does not move because a month was difficult.</p>
      <p style={s.p}>That is a deliberate choice rather than a pricing convenience. Hourly billing puts your interests and ours on opposite sides: we earn more when your books take longer, and you pay most in the months you are already under pressure. A fixed fee removes that. If your bank feed breaks in the week of a VAT deadline, that is our problem to absorb, not a line on your invoice.</p>
      <p style={s.p}>Advisory work is the exception, because it genuinely is bought by the hour: a 30-minute clarity call is £95, and a one-hour strategy session is £175.</p>
      <p style={s.p}>For the monthly view of the same question, see <Link href="/blog/how-much-does-a-bookkeeper-cost-uk" style={{ color: C.gold }}>how much a bookkeeper costs in the UK</Link>, or build your own figure on the <Link href="/pricing" style={{ color: C.gold }}>pricing calculator</Link>.</p>
    </BlogLayout>
  )
}
