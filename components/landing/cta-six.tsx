import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import FadeInAnimation from "../common/fade-in-animation";

const CTASix = () => {
  return (
    <section id={SECTIONS.CTASIX} className="w-full bg-primary-black">
      <div className="container mx-auto px-6  py-[8rem] md:py-[11.375rem] flex flex-col items-center">
        <div className="flex flex-col items-start gap-8 md:gap-16">
          <FadeInAnimation>
          <h3 className="text-white text-h3-mobile md:text-h3">
            Elluxe<span className="text-description">©</span>
          </h3>
          </FadeInAnimation>
          <div className="flex flex-col items-start gap-5 md:gap-10">
            <FadeInAnimation>
            <h4 className="text-white text-h4-mobile md:text-h4">
              We only earn when you do.
            </h4>
            </FadeInAnimation>
            <FadeInAnimation>
            <h4 className="text-white text-h4-mobile md:text-h4">
              There is no upfront cost. Elluxe is paid a share of the net revenue of
              the accounts we manage, agreed in writing before we start. The full
              terms are in your management agreement.
            </h4>
            </FadeInAnimation>
          </div>
          <FadeInAnimation>
          <Link href="/apply-now">
            <Button className="mt-10" variant="default">
              Apply Now
            </Button>
          </Link>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTASix;
