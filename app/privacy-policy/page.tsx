import LegalPage from "@/components/legal/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Elluxe Talent Management",
  description: "Privacy Policy for elluxe.co, operated by High Life Vision LLC.",
};

const CONTENT = String.raw`# Privacy Policy
**Elluxe Talent Management** is a brand of High Life Vision LLC, 30 N Gould St, Ste R, Sheridan, WY 82801, United States ("Elluxe", "we"). Last updated: 16 October 2026.

## What we collect
- **Application form** (elluxe.co/apply-now): name, email, phone / messaging handle, country, social and OnlyFans profile links, current monthly earnings range, and the answers you give about your content and goals.
- **Contact form**: name, email, message.
- **Usage data**: pages visited, device and browser type, approximate location, referral source, and advertising click identifiers (for example Google Ads gclid), collected through Google Analytics, Google Ads conversion tracking and Microsoft Clarity.

## Why we use it
- To review your application and contact you about working together (legitimate interest / pre-contract steps).
- To measure which advertising brings applicants and improve this website (legitimate interest; consent where required by your local law).
- To comply with legal obligations and enforce our agreements.

We do **not** sell your personal data. We do not use the data you submit for any purpose other than the above.

## Who sees it
- Our team and contractors who handle applications, bound by confidentiality.
- Service providers that process data for us: Airtable (application storage), Google (Analytics, Ads, Workspace), Microsoft Clarity (site analytics), Netlify (hosting), messaging providers (WhatsApp, Telegram) when you choose to talk to us there.
- Authorities where the law requires it.
Some providers are in the United States; we rely on their standard contractual safeguards for transfers.

## How long we keep it
Applications are kept for up to 24 months after our last contact, or longer if you become a client (for the term of the agreement plus the statutory retention period). Analytics data follows the retention settings of the provider (Google Analytics: 14 months).

## Your rights
Depending on where you live (including the EU/UK and California) you may request access to, correction of, or deletion of your data, object to or restrict processing, ask for a copy in portable form, and withdraw consent. Write to **privacy@elluxe.co**. You can also complain to your local data-protection authority.

## Cookies
We use essential cookies and analytics/advertising cookies (Google Analytics, Google Ads, Microsoft Clarity). You can block cookies in your browser; the site still works.

## Minors
Our services are for adults only (18+). We do not knowingly collect data from anyone under 18; if you believe we have, contact us and we will delete it.

## Changes
We will post any changes on this page with a new "last updated" date.

**Contact:** privacy@elluxe.co · High Life Vision LLC, 30 N Gould St, Ste R, Sheridan, WY 82801, USA
`;

export default function Page() {
  return <LegalPage markdown={CONTENT} />;
}
