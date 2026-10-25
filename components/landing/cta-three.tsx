import ArrowButton from "@/components/ui/arrow-button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import FadeInAnimation from "../common/fade-in-animation";

const CTAThree = () => {
  return (
    <section id={SECTIONS.CTATHREE} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 flex flex-col items-center gap-16 md:gap-[7rem] pb-32 md:pt-[6.25rem] md:pb-[12.0625rem]">
        <FadeInAnimation className="text-white text-h4-mobile md:text-h4 text-left md:text-center w-full md:w-2/4">
          <h4>
            All-inclusive talent management: your inbox{" "}
            <span className="primary-gradient-text">answered 24/7</span>, marketing
            across every platform, and the structure to{" "}
            <span className="primary-gradient-text">grow</span> your account
            without burning out.
          </h4>
        </FadeInAnimation>
        <FadeInAnimation className="self-end">
          <div className="flex items-center gap-[0.875rem] md:gap-7" >
            <p className="text-white text-services-link-mobile md:text-services-link">
              <span className="primary-gradient-text">See more</span> of our
              work and how we
              <br /> support our creators
            </p>
            <Link href="/services">
              <ArrowButton carousel={false} />
            </Link>
          </div>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default CTAThree;
