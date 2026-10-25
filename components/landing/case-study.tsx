import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import FadeInAnimation from "../common/fade-in-animation";

const CaseStudy = () => {
  return (
    <section id={SECTIONS.CASESTUDY} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 py-32 md:pt-[10rem] md:pb-[10rem] flex flex-col gap-10 md:gap-14">
        <FadeInAnimation className="flex flex-col gap-4 md:gap-6">
          <p className="text-white/60 text-[0.8rem] md:text-[0.9rem] font-semibold tracking-[0.2em] uppercase">
            Case study
          </p>
          <h3 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            From zero to the{" "}
            <span className="primary-gradient-text">top 1%</span> in 90 days.
          </h3>
        </FadeInAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FadeInAnimation className="flex flex-col gap-2 border-t border-white/20 pt-5">
            <p className="primary-gradient-text text-[1.125rem] font-bold">Day 0</p>
            <p className="text-white/85 text-[1rem] md:text-[1.0625rem] leading-relaxed">
              Drea Kitty launched with Elluxe from a standing start: no page, no audience, no
              content library.
            </p>
          </FadeInAnimation>
          <FadeInAnimation className="flex flex-col gap-2 border-t border-white/20 pt-5">
            <p className="primary-gradient-text text-[1.125rem] font-bold">What we did</p>
            <p className="text-white/85 text-[1rem] md:text-[1.0625rem] leading-relaxed">
              Persona and launch plan, daily content direction, 24/7 chat coverage, cross-platform
              marketing, and protection from day one.
            </p>
          </FadeInAnimation>
          <FadeInAnimation className="flex flex-col gap-2 border-t border-white/20 pt-5">
            <p className="primary-gradient-text text-[1.125rem] font-bold">Day 90</p>
            <p className="text-white/85 text-[1rem] md:text-[1.0625rem] leading-relaxed">
              The account held OnlyFans&apos; top 1% creator ranking, run by the same team, on the
              same deal we offer you.
            </p>
          </FadeInAnimation>
        </div>
        <FadeInAnimation className="flex flex-col gap-6 items-start">
          <p className="text-white/60 text-[0.875rem] md:text-[0.95rem] max-w-[48rem] leading-relaxed">
            One client&apos;s result, shared with her permission. It is not typical and not a promise
            or guarantee of what you will achieve. Individual results vary and depend on your
            content, effort, audience and market conditions.{" "}
            <Link className="underline" href="/earnings-disclaimer">Earnings disclaimer</Link>
          </p>
          <Link href="/apply-now"><Button variant="default">See if you qualify</Button></Link>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default CaseStudy;
