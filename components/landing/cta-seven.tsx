import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import FadeInAnimation from "../common/fade-in-animation";

const CTASeven = () => {
  return (
    <section id={SECTIONS.CTASEVEN} className="w-full bg-primary-black">
      <div className="container mx-auto px-6  py-[8rem] md:py-[16.125rem] flex flex-col items-center">
        <div className="flex flex-col items-start gap-8 md:gap-16">
          <FadeInAnimation>
          <h4 className="text-white text-h4-mobile md:text-h4">
            Are you truly satisfied with your current management, <span className="primary-gradient-text">or being overwhelmed without a real structure?
            </span>
          </h4>
          </FadeInAnimation>
          <div className="flex flex-col items-start gap-5 md:gap-8">
            <FadeInAnimation>
            <h4 className="text-white text-h4-mobile md:text-h4">
              <span className="underline">Trust your instincts</span> and
              schedule a call with us.
            </h4>
            </FadeInAnimation>
            <FadeInAnimation>
            <p className="text-white text-services-menu-mobile md:text-services-menu">
              It’s just a few minutes to find out{" "}
              <span className="primary-gradient-text">whether we’re a fit.</span>
            </p>
            </FadeInAnimation>
          </div>
          <FadeInAnimation>
          <Link href="/apply-now"><Button variant="default">See if you qualify</Button></Link>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTASeven;
