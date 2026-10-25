"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GirlOne from "@/assets/images/girl-one.png";
import GirlTwo from "@/assets/images/girl-two.png";
import GirlThree from "@/assets/images/girl-three.png";
import GirlFour from "@/assets/images/girl-four.png";
import GirlFive from "@/assets/images/girl-five.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";

const Results = () => {
  const results = [
    {id:"clinet_one" , image: GirlOne, alt: "clinet_one"},
    {id:"clinet_two" , image: GirlTwo, alt: "clinet_two"},
    {id:"clinet_three" , image: GirlThree, alt: "clinet_three"},
    {id:"clinet_four" , image: GirlFour, alt: "clinet_four"},
    {id:"clinet_five" , image: GirlFive, alt: "clinet_five"},
  ]
  return (
    <section id={SECTIONS.RESULTS} className="w-full bg-marble-bg-big bg-cover">
      <div className="container mx-auto px-6 flex flex-col items-center gap-16 md:gap-24 py-32 md:pt-[9.6875rem] md:pb-[10.6875rem]">
        <h4 className="text-white text-h4-mobile md:text-h4 self-start">
          What some of our creators{" "}
          <span className="primary-gradient-text leading-[58px]">have achieved</span>
        </h4>
        <Carousel
          className="px-8 w-full relative"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <div className="w-[95px] h-full absolute top-0 left-7 z-10 bg-result-carousel-fade rotate-180" />
          <div className="w-[95px] h-full absolute top-0 right-7 z-10 bg-result-carousel-fade" />
          <CarouselContent className="flex">
            {results.map((result) => <CarouselItem key={result.id} className="md:basis-1/3 max-[390px]:pl-6 pl-8 sm:pl-16 max-lg:ml-20">
              <Image
                className="max-w-[209px] md:max-w-[237px] mx-8 md:mx-0"
                src={result.image}
                alt={result.alt}
              />
            </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-6" />
          <CarouselNext className="hidden md:flex -right-6" />
        </Carousel>
        <p className="text-white/90 text-[0.9rem] md:text-[1rem] leading-relaxed text-center max-w-[48rem] -mt-8 md:-mt-12">
          Statements shown are from selected Elluxe clients, shared with their
          permission. These results are not typical and are not a promise or
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
