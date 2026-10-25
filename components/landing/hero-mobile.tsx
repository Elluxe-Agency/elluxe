import { SECTIONS } from "@/lib/const";
import { ShieldIcon } from "../icons/common";
import Image from "next/image";
import FadeInButton from "../ui/fade-in-button";
import Link from "next/link";

const HeroMobile = () => {
  return (
    <section
      id={SECTIONS.HERO}
      className="w-full bg-hero-bg-mobile bg-cover bg-center -mt-[6.25rem] flex sm:hidden items-center h-[100vh]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-full flex flex-col items-center mt-[130px] gap-[42px]">
          <div className="flex gap-[3px] items-center justify-center">
            <ShieldIcon className="h-[40px] w-[40px]" />
            <div className="flex flex-col text-[#E6E6E6]">
              <p className="text-[22px]/[16px] font-bold">Talent management</p>
              <p className="text-[13.7px]/[20px] font-light tracking-wider">
                for creators, since 2024
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-[35px]/[38px] font-bold md:text-h2 text-white text-center">
            <span className="primary-gradient-text ">
              <h1>Your career.</h1>
            </span>
            <h1>Managed, protected, grown.</h1>
          </div>
          <div>
            <p className="text-center text-[#E6E6E6] text-[18px]/[22px] font-light tracking-wider">
              Management, marketing and 24/7 support, <br />
              so you can focus on your content
            </p>
          </div>
          <Link className="-mt-2" href="/apply-now">
            <FadeInButton />
          </Link>
          <div>
            <Image
              width={260}
              height={318}
              className="w-[260px]"
              src="/images/hero-mobile-image.png"
              alt="hero-mobile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
