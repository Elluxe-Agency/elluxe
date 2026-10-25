import { Button } from "@/components/ui/button";
import FadeInAnimation from "../common/fade-in-animation";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";

const ServicesFour = () => {
  return (
    <section id={SECTIONS.COMPANYDEVELOPMENT} className="w-full bg-primary-black">
      <FadeInAnimation threshold={0.2}>
      <div className="container mx-auto px-6 py-32 md:py-[262px]">
        <div className="flex flex-col min-[1280px]:flex-row min-[1280px]:justify-between">
          <div className="flex flex-col items-start mb-4">
            <h4 className="text-white text-h4-mobile md:text-h4 mb-8">
              Company <span className="primary-gradient-text">development</span>
            </h4>
            <Link href="/apply-now"><Button className="hidden min-[1280px]:block" variant="outline">Apply Now</Button></Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-1 text-white">
              <h4 className="text-h4">01</h4>
              <p className="text-description-mobile md:text-description-title">
                Elluxe
              </p>
            </div>
            <p className="text-white text-description-mobile md:text-description leading-[22px] tracking-[2%] min-[1280px]:w-[495px]">
              We empower our models to take control of their financial futures.
              With expert guidance and support, we help them build independent
              careers that do not depend on a single platform. We work with
              creators at every stage, from first launch to established
              accounts, with a personalized plan and a team behind you. No
              matter your current level, we are committed to doing the work
              with you, every day.
            </p>
            <Link href="/apply-now"><Button className="min-[1280px]:hidden w-fit mt-4" variant="outline">Apply Now</Button></Link>
          </div>
        </div>
      </div>
      </FadeInAnimation>
    </section>
  );
};

export default ServicesFour;
