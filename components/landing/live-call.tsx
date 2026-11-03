import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import FadeInAnimation from "../common/fade-in-animation";

const ON_THE_CALL = [
  {
    n: "01",
    title: "Real numbers, without the fluff.",
    text: "Anonymised results from creators at different stages: first weeks, three to six months in, and a year or more. The good and the slow, so you can judge whether this is for you.",
  },
  {
    n: "02",
    title: "Case studies, step by step.",
    text: "How a creator's personal brand and social accounts progressed over time, how we recovered disabled accounts, and how we helped creators get onto OFTV.",
  },
  {
    n: "03",
    title: "What our network opens.",
    text: "Introductions, collaborations and platform contacts built over years in the industry, which most creators cannot reach alone.",
  },
];

const LiveCall = () => {
  return (
    <section
      id={SECTIONS.ABOUTUS}
      className="w-full bg-marble-bg-big bg-cover py-32 md:py-[7.5rem]"
    >
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <FadeInAnimation className="flex flex-col gap-4 md:gap-6 w-full md:w-2/3">
          <h3 className="text-white text-h3-mobile md:text-h3">
            Apply to see{" "}
            <span className="primary-gradient-text">if you qualify.</span>
          </h3>
          <p className="text-white/80 text-[1.125rem] md:text-[1.375rem]">
            Qualified applicants get a live call with our team. No pitch deck,
            no hype. On the call we:
          </p>
        </FadeInAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {ON_THE_CALL.map((item) => (
            <FadeInAnimation
              key={item.n}
              className="rounded-2xl border border-white/15 bg-black/40 backdrop-blur-sm p-6 md:p-8 flex flex-col gap-3 min-w-0"
            >
              <p className="primary-gradient-text text-h4-mobile md:text-h4 font-bold leading-none">
                {item.n}
              </p>
              <p className="text-white text-[1.25rem] md:text-[1.5rem] font-bold leading-tight">
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
            Numbers and case studies are shared on the call only, one to one,
            with the creators&apos; identities protected. They describe what
            happened for specific people and are never a promise of what will
            happen for you. Individual results vary.
          </p>
          <Link href="/apply-now">
            <Button variant="default">See if you qualify</Button>
          </Link>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default LiveCall;
