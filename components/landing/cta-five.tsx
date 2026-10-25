import ArrowButton from "@/components/ui/arrow-button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import FadeInAnimation from "../common/fade-in-animation";

const CTAFive = () => {
  return (
    <section id={SECTIONS.CTAFIVE} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 flex flex-col items-center gap-16 md:gap-[7rem] py-32 md:pt-[6.25rem] md:pb-[12.0625rem]">
        <FadeInAnimation>
        <h4 className="text-white text-h4-mobile md:text-h4">
          No more dependency.<br/>No more hassles.<br/>No more ...
        </h4>
        </FadeInAnimation>
        <FadeInAnimation className="self-end">
        <div className="flex items-center gap-[0.875rem] md:gap-7">
          <p className="text-white text-services-link-mobile md:text-services-link">
            <span className="primary-gradient-text">See more</span>  about how<br/> we work with<br/> our creators
          </p>
          <Link href="/services" ><ArrowButton carousel={false} /></Link>
        </div>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default CTAFive;
