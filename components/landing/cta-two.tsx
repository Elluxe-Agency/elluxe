import Image from "next/image";
import MobilePhone from "@/assets/images/mobile_chat.png";
import { SECTIONS } from "@/lib/const";
import FadeInAnimation from "@/components/common/fade-in-animation";

const CTATwo = () => {
  return (
    <section id={SECTIONS.CTATWO} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 py-[14rem] flex flex-col gap-32 items-center">
      <FadeInAnimation className="text-white text-h3-mobile md:text-h4 self-start w-5/6 md:w-1/2">
        <h4 >
          No &quot;leading OnlyFans management&quot; fluff. A hands-on team that
          runs your account like a business.
        </h4>
        </FadeInAnimation>
        <FadeInAnimation className="text-white text-h3-mobile md:text-h4 text-right md:text-left self-end w-5/6 md:w-1/2">
        <h4>
          <span className="primary-gradient-text whitespace-nowrap">Management, marketing,</span>
          <br />
          <span className="primary-gradient-text">security and support.</span> One
          team, one plan, every day.
        </h4>
        </FadeInAnimation>
        <FadeInAnimation className="text-white text-h3-mobile md:text-h4 self-start w-5/6 md:w-1/2">
        <h4 >
          <span className="primary-gradient-text">Focus on your content.</span> We handle everything else.
        </h4>
        </FadeInAnimation>
        <FadeInAnimation className="text-white text-h3-mobile md:text-h4 text-right md:text-left self-end w-5/6 md:w-1/2">
        <h4 >
          We&apos;re not here{" "}
          <span className="primary-gradient-text">to boast.</span> We&apos;re here
          to do the work with you, and show you the numbers every week.
        </h4>
        </FadeInAnimation>
        <div className="mt-16 flex flex-col items-center gap-32">
          <FadeInAnimation className="text-white text-h3-mobile md:text-h3 text-center">
          <h3 >
            This is <span className="primary-gradient-text">about you</span>
          </h3>
          </FadeInAnimation>
          <FadeInAnimation className="text-white text-h3-mobile md:text-h3">
          <h3 >
            Your life.
            <br /> Your future.
            <br /> Your choice.
          </h3>
          </FadeInAnimation>
          <FadeInAnimation threshold={0.2}>
            <Image
              className="max-w-[300px] md:max-w-[520px]"
              src={MobilePhone}
              alt="mobile_phone"
            />
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
