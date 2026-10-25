import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import { StaggeredFade } from "../common/staggered-fade";
import FadeInAnimationLeft from "../common/fade-in-animation-left";

const Hero = () => {
  return (
    <section
      id={SECTIONS.HERO}
      className="w-full bg-hero-bg bg-cover bg-center -mt-[6.25rem] hidden sm:flex items-center h-[80vh] md:h-[100vh]"
    >
      <div className="container mx-auto px-6 md:mt-[3.125rem]">
        <div className="lg:max-w-1/2 md:max-w-2/3 max-w-full flex flex-col items-start gap-[2rem] md:gap-[2.75rem]">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-0">
              <span className="primary-gradient-text flex">
                <StaggeredFade
                  className="text-primary-gradient-text "
                  text="Your career."
                  delay={0}
                />
                <StaggeredFade
                  className="text-white ml-2 "
                  text=" Managed,"
                  delay={1200}
                />
              </span>
              <span className="text-white">
                <StaggeredFade
                  className="text-white"
                  text="protected, grown."
                  delay={1600}
                />
              </span>
            </div>
            <FadeInAnimationLeft>
              <p className="text-white text-[1.25rem] md:text-[1.5rem] w-5/6 md:w-1/2">
                We handle management, marketing and 24/7 support, so you can
                focus on your content
              </p>
            </FadeInAnimationLeft>
          </div>
          <Link href="/apply-now">
            <Button variant="white">Apply Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
