import { Button } from "@/components/ui/button";
import FadeInAnimation from "../common/fade-in-animation";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";

const ServicesFive = () => {
  return (
    <section id={SECTIONS.MANAGEMENTMARKETING} className="w-full bg-primary-black">
      <FadeInAnimation threshold={0.2}>
      <div className="container mx-auto px-6 py-32 md:py-[190px]">
        <div className="flex justify-between">
          <div className="flex flex-col min-[1280px]:flex-row md:gap-8  min-[1280px]:justify-between">
            <div className="flex items-start flex-col-reverse min-[1280px]:flex-row gap-8">
              <div className="flex flex-col min-[1280px]:flex-row gap-12 md:gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-1 text-white">
                    <h4 className="text-h4">01</h4>
                    <p className="text-description-mobile md:text-description-title">Marketing</p>
                  </div>
                  <p className="text-white text-description-mobile md:text-description leading-[22px] tracking-[2%] min-[1280px]:w-[250px]">
                    At Elluxe, we know that effective marketing is essential for
                    growing and sustaining a successful account. Our team of
                    experts uses proven strategies to boost engagement and
                    foster genuine fan loyalty. By crafting a personalized
                    marketing plan tailored to your brand and goals, we ensure
                    your success. From social media promotion to targeted
                    advertising and niche campaigns, we employ diverse
                    strategies to help you reach the right audience and grow
                    your account.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-1 text-white">
                    <h4 className="text-h4">02</h4>
                    <p className="text-description-mobile md:text-description-title">
                      OnlyFans Account Management 
                    </p>
                  </div>
                  <p className="text-white text-description-mobile md:text-description leading-[22px] tracking-[2%] min-[1280px]:w-[250px]">
                    Managing an account can be overwhelming, especially as your
                    audience grows. Our team takes care of everything, from
                    optimizing your profile and setting subscription rates to
                    chatting 24/7 with your subscribers, building lasting
                    connections that support long-term growth. This way, you can
                    focus solely on what you do best: creating superb content
                    for your fans
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-1 text-white">
                    <h4 className="text-h4">03</h4>
                    <p className="text-description-mobile md:text-description-title">Social Media Management</p>
                  </div>
                  <p className="text-white text-description-mobile md:text-description leading-[22px] tracking-[2%]  min-[1280px]:w-[250px]">
                    Social media is a powerful way for celebrities to connect
                    with fans and promote their content. At Elluxe, we
                    understand how managing multiple accounts can be
                    overwhelming. That’s why our social media management team
                    takes care of creating, managing, and optimizing your
                    presence on platforms like Instagram, Twitter, and TikTok.
                    Focus on creating amazing content and enjoying life while we
                    handle the rest.
                  </p>
                  <Button className="min-[1280px]:hidden w-fit mt-4" variant="outline">
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-end justify-between">
                <h4 className="text-white text-h4-mobile md:text-h4 md:mb-8 mb-8 min-[1280px]:text-right">
                  Management
                  <br />{" "}
                  <span className="primary-gradient-text">& Marketing</span>
                </h4>
                <Link href="/apply-now"><Button className="hidden min-[1280px]:block" variant="outline">
                  Apply Now
                </Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeInAnimation>
    </section>
  );
};

export default ServicesFive;
