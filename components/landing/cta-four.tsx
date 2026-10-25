import { SECTIONS } from "@/lib/const";
import FadeInAnimation from "../common/fade-in-animation";

const CTAFour = () => {
  return (
    <section id={SECTIONS.CTAFOUR} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 flex flex-col items-center py-32 md:pt-[16.25rem] md:pb-[16.25rem]">
        <FadeInAnimation className="text-white text-h4-mobile md:text-h4 w-full md:w-2/3">
          <h4>
            We <span className="primary-gradient-text">help</span> creators run
            their accounts as a real business:{" "}
            <span className="primary-gradient-text">
              structure, support,
            </span>{" "}
            and a team that shows up{" "}
            <span className="primary-gradient-text">every day.</span>
          </h4>
        </FadeInAnimation>
      </div>
    </section>
  );
};

export default CTAFour;
