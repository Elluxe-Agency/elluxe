import { SECTIONS } from "@/lib/const";
import FadeInAnimation from "../common/fade-in-animation";

const CTAFour = () => {
  return (
    <section id={SECTIONS.CTAFOUR} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 flex flex-col items-center py-32 md:pt-[16.25rem] md:pb-[16.25rem]">
        <FadeInAnimation className="text-white text-h4-mobile md:text-h4 w-full md:w-2/3">
          <h4>
            Your inbox, answered{" "}
            <span className="primary-gradient-text">around the clock.</span> A
            trained chat team covers every hour of every day, in your voice,
            with limits you set. Fans get answers in minutes, not mornings.{" "}
            <span className="primary-gradient-text">You get your evenings back.</span>
          </h4>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default CTAFour;
