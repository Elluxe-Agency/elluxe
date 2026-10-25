"use client";
import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import VideoWithOverlay from "../ui/video-with-overlay";

const AboutUs = () => {

  return (
    <section
      id={SECTIONS.ABOUTUS}
      className="w-full bg-marble-bg-big bg-cover py-32 md:py-[7.5rem]"
    >
      <div className="container mx-auto px-6 flex flex-col gap-16 ">
        <h4 className="text-white text-h4-mobile md:text-h4">
          Meet us - The Elluxe Experience
        </h4>
        <div className="hidden md:block rounded-[20px]">
          <VideoWithOverlay
            width="1920"
            height="1080"
            className="rounded-[20px] aspect-[2/3] object-none md:object-contain md:aspect-auto"
            src="/videos/elluxe_desktop.mp4"
            poster="/gifs/elluxe_desktop_gif.gif"
            playsInline
            preload="none"
          />
        </div>
        <div className="md:hidden rounded-[20px]">
          <VideoWithOverlay
            width="608"
            height="1080"
            className="rounded-[20px] aspect-[9/16] object-cover md:object-contain md:aspect-auto"
            src="/videos/elluxe_mobile.mp4"
            poster="/gifs/elluxe_mobile_gif.gif"
            playsInline
            preload="none"
          />
        </div>
        <Link className="self-center" href="/apply-now">
          <Button>See if you qualify</Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
