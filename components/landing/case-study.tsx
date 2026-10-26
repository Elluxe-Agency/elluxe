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
            How a launch works
          </p>
          <h3 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            From zero to a{" "}
            <span className="primary-gradient-text">fully managed</span> account.
          </h3>
        </FadeInAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FadeInAnimation className="flex flex-col gap-2 border-t border-white/20 pt-5">
            <p className="primary-gradient-text text-[1.125rem] font-bold">Week 1</p>
            <p className="text-white/85 text-[1rem] md:text-[1.0625rem] leading-relaxed">
              Persona, positioning and a content plan built with you, even from a standing
              start: no page, no audience, no content library.
            </p>
          </FadeInAnimation>
          <FadeInAnimation className="flex flex-col gap-2 border-t border-white/20 pt-5">
            <p className="primary-gradient-text text-[1.125rem] font-bold">Weeks 2 to 4</p>
            <p className="text-white/85 text-[1rem] md:text-[1.0625rem] leading-relaxed">
              Accounts set up and protected, daily content direction, 24/7 chat coverage live,
              cross-platform marketing running.
            </p>
          </FadeInAnimation>
          <FadeInAnimation className="flex flex-col gap-2 border-t border-white/20 pt-5">
            <p className="primary-gradient-text text-[1.125rem] font-bold">Ongoing</p>
            <p className="text-white/85 text-[1rem] md:text-[1.0625rem] leading-relaxed">
              Weekly numbers, monthly statements, and the same team on your account every day,
              on the deal we agreed in writing.
            </p>
          </FadeInAnimation>
        </div>
        <FadeInAnimation className="flex flex-col gap-6 items-start">
          <Link href="/apply-now"><Button variant="default">See if you qualify</Button></Link>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default CaseStudy;
