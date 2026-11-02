import LegalPage from "@/components/legal/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earnings Disclaimer | Elluxe Talent Management",
  description: "Earnings Disclaimer for elluxe.co, operated by High Life Vision LLC.",
};

const CONTENT = String.raw`# Earnings Disclaimer
Last updated: 2 November 2026 · Elluxe Talent Management, a brand of High Life Vision LLC.

Elluxe does not display earnings figures, statements or income examples on this Site. If we ever refer to the past performance of a specific client, for example in a private consultation or a written proposal, that information comes from that client, shared with their permission. **It is not a typical result.** It is not a promise, projection or guarantee that you will achieve the same or any particular result.

Your results depend on factors we do not control: the content you create, how consistently you work, your existing audience, platform policies and fees, competition and market conditions. Many creators earn far less than the figures shown, and some earn nothing. Elluxe makes no claim about typical or average earnings of creators on any platform.

Elluxe provides management, marketing and support services. We do not guarantee income, growth or any financial outcome, and nothing on this Site is financial advice.

If you have questions about any figure shown on this Site, email hello@elluxe.co.
`;

export default function Page() {
  return <LegalPage markdown={CONTENT} />;
}
