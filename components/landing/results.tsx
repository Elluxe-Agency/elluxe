import GirlThree from "@/assets/images/girl-three.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";

const Results = () => {
  return (
    <section id={SECTIONS.RESULTS} className="w-full bg-marble-bg-big bg-cover">
      <div className="container mx-auto px-6 flex flex-col items-center gap-16 md:gap-24 py-32 md:pt-[9.6875rem] md:pb-[10.6875rem]">
        <h4 className="text-white text-h4-mobile md:text-h4 self-start">
          What one of our creators{" "}
          <span className="primary-gradient-text leading-[58px]">has achieved</span>
        </h4>
        <Image
          className="max-w-[240px] md:max-w-[280px]"
          src={GirlThree}
          alt="Monthly statement of an Elluxe client, shared with permission"
        />
        <p className="text-white/90 text-[0.9rem] md:text-[1rem] leading-relaxed text-center max-w-[48rem] -mt-8 md:-mt-12">
          This statement is from one Elluxe client, shared with her
          permission. This result is not typical and are not a promise or
          guarantee of future earnings. Individual results vary and depend on
          your content, effort, audience and market conditions.{" "}
          <Link className="underline" href="/earnings-disclaimer">Earnings disclaimer</Link>
        </p>
        <Link href="/apply-now"><Button>See if you qualify</Button></Link>
      </div>
    </section>
  );
};

export default Results;
