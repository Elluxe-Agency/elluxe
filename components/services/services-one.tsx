import { Button } from "@/components/ui/button";
import FadeInAnimation from "../common/fade-in-animation";
import Link from "next/link";

const ServicesOne = () => {
  return (
    <section className="w-full bg-primary-black -mt-[100px] bg-marble-bg-big bg-cover bg-center">
      <div className="container mx-auto px-6 py-36 md:pt-[240px] md:pb-[220px] flex flex-col items-center gap-24 pt-[200px]">
        <div className="flex flex-col items-center gap-9">
          <FadeInAnimation threshold={0.1}>
          <h1 className="primary-gradient-text text-h1-mobile md:text-h1">
            Elluxe
          </h1>
          </FadeInAnimation>
          <FadeInAnimation>
          <h3 className="text-white text-h3-mobile md:text-h3 text-center">
            <span className="primary-gradient-text">Your career.</span> Managed,
            protected, grown.
          </h3>
          </FadeInAnimation>
        </div>
        <FadeInAnimation>
        <Link href="/apply-now"><Button variant="default">Apply Now</Button></Link>
        </FadeInAnimation>      
      </div>
    </section>
  );
};

export default ServicesOne;
