import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import FadeInAnimation from "../common/fade-in-animation";

const DEAL = [
  {
    title: "No upfront cost. Ever.",
    text: "No setup fee, no retainer, no per-service charges. Elluxe is paid a share of net revenue, and nothing else.",
  },
  {
    title: "Already earning? We only get paid on what we add.",
    text: "Your verified results before joining become your baseline. Our share applies to the growth above it. Terms apply.",
  },
  {
    title: "Your inbox answered 24/7.",
    text: "A trained chat team covers every hour of every day, in your voice, with limits you set.",
  },
  {
    title: "A fixed split, in writing, before you sign.",
    text: "One number, no hidden deductions, weekly payouts, monthly statements.",
  },
  {
    title: "Your account stays yours.",
    text: "You own your accounts and your content. Our access is for management and reverts to you when we part ways.",
  },
];

const GrowthDeal = () => {
  return (
    <section id={SECTIONS.GROWTHDEAL} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 pb-32 md:pb-[12rem] flex flex-col gap-12 md:gap-16">
        <FadeInAnimation className="flex flex-col gap-4 md:gap-6 w-full md:w-2/3">
          <h3 className="text-white text-h3-mobile md:text-h3">
            The Elluxe{" "}
            <span className="primary-gradient-text">Growth Deal</span>
          </h3>
          <p className="text-white/80 text-[1.125rem] md:text-[1.375rem]">
            The deal most agencies won&apos;t put in writing. We do, before you sign.
          </p>
        </FadeInAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {DEAL.map((item) => (
            <FadeInAnimation
              key={item.title}
              className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 md:p-8 flex flex-col gap-3 min-w-0"
            >
              <p className="primary-gradient-text text-[1.25rem] md:text-[1.5rem] font-bold leading-tight">
                {item.title}
              </p>
              <p className="text-white/85 text-[1rem] md:text-[1.0625rem] leading-relaxed">
                {item.text}
              </p>
            </FadeInAnimation>
          ))}
        </div>
        <FadeInAnimation className="flex flex-col gap-6 items-start">
          <p className="text-white/60 text-[0.875rem] md:text-[0.95rem] max-w-[48rem] leading-relaxed">
            Growth terms apply to self-managed accounts with platform statements shared for
            verification. Full details in our{" "}
            <Link className="underline" href="/terms-of-service">Terms of Service</Link> and{" "}
            <Link className="underline" href="/refund-policy">Refund Policy</Link>, and in your
            management agreement before you sign.
          </p>
          <Link href="/apply-now"><Button variant="default">See if you qualify</Button></Link>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default GrowthDeal;
