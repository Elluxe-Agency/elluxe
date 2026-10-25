import LegalPage from "@/components/legal/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Elluxe Talent Management",
  description: "Terms of Service for elluxe.co, operated by High Life Vision LLC.",
};

const CONTENT = String.raw`# Terms of Service
These terms govern your use of **elluxe.co** (the "Site"), operated by High Life Vision LLC trading as Elluxe Talent Management, 30 N Gould St, Ste R, Sheridan, WY 82801, USA ("Elluxe", "we"). Last updated: 16 October 2026.

## 1. What this Site is
The Site describes our talent-management services for adult content creators and lets you apply to work with us. Submitting an application does not create a management relationship. We work only under a separate written **Management Agreement** signed by both parties, and we accept only a limited number of applicants.

## 2. Eligibility
You must be at least 18 years old and legally able to enter into contracts in your country.

## 3. Our services and fees
Elluxe provides account management, marketing, messaging/chat support, social media management, website creation, creator networking and online-safety support, as described on the Site and detailed in the Management Agreement.
**Fees:** we do not charge creators any upfront, setup or monthly fee. Elluxe is paid a share of the net revenue of the accounts we manage. The exact revenue split, the minimum-share ramp for new accounts, the term and the termination rules are set out in the Management Agreement, which you receive and can review before signing.

## 3a. Growth terms for creators who already earn
If your account was self-managed, and not managed by another agency, in the period before you join, we record a baseline from your platform earnings statements for that period. During the growth period set in your Management Agreement, Elluxe's share applies only to net revenue above that baseline, and net revenue at or below the baseline is paid to you in full. Conditions: you deliver the agreed content plan, grant the agreed account access, keep pricing and account settings as agreed, and share platform statements for verification. Platform suspensions caused by a breach on your side pause the growth period. The baseline period, the growth period and the split that follows are stated in your Management Agreement before you sign. The growth terms do not change the length of the agreement or any other term.

## 4. No earnings guarantee
Any figures, statements, screenshots or testimonials on the Site are the results of specific clients and are **not typical**. They are not a promise, projection or guarantee of what you will earn. Results depend on your content, consistency, audience, platform rules and market conditions. See our Earnings Disclaimer.

## 5. Your information
You confirm that the information in your application is accurate and that you have the right to share any links, images or account details you provide. Our handling of personal data is described in the Privacy Policy.

## 6. Intellectual property
The Site, its design, text, images and brand are owned by or licensed to High Life Vision LLC. You may not copy or reuse them without written permission. Content you create as a client remains governed by the Management Agreement.

## 7. Acceptable use
Do not use the Site to submit false applications, to scrape data, to interfere with the Site, or for anything unlawful.

## 8. Disclaimer and limitation of liability
The Site is provided "as is". To the fullest extent permitted by law, High Life Vision LLC is not liable for any indirect, incidental or consequential loss arising from use of the Site. Nothing here limits liability that cannot be limited by law. Your rights as a client are governed by the Management Agreement, not by these Site terms.

## 9. Governing law
These Site terms are governed by the laws of the State of Wyoming, USA. Disputes about the Site are resolved in the courts of Sheridan County, Wyoming, unless your local consumer law gives you other rights.

## 10. Changes
We may update these terms; the current version is always on this page.

**Contact:** hello@elluxe.co · High Life Vision LLC, 30 N Gould St, Ste R, Sheridan, WY 82801, USA
`;

export default function Page() {
  return <LegalPage markdown={CONTENT} />;
}
