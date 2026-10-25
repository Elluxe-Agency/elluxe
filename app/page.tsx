import AboutUs from "@/components/landing/about-us";
import Branches from "@/components/landing/branches";
import ContactUs from "@/components/landing/contact-us";
import CTAEight from "@/components/landing/cta-eight";
import CTAFive from "@/components/landing/cta-five";
import CTAFour from "@/components/landing/cta-four";
import CTAOne from "@/components/landing/cta-one";
import CTASeven from "@/components/landing/cta-seven";
import CTASix from "@/components/landing/cta-six";
import CTAThree from "@/components/landing/cta-three";
import CTATwo from "@/components/landing/cta-two";
import Featured from "@/components/landing/featured";
import Hero from "@/components/landing/hero";
import HeroMobile from "@/components/landing/hero-mobile";
import Results from "@/components/landing/results";
import GrowthDeal from "@/components/landing/growth-deal";
import CaseStudy from "@/components/landing/case-study";
import Faq from "@/components/landing/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroMobile/>
      <Featured />
      <CTAOne />
      <AboutUs />
      <CTATwo/>
      <CTAThree/>
      <GrowthDeal/>
      <Results/>
      <CaseStudy/>
      <CTAFour/>
      <CTAFive/>
      <Branches/>
      <CTASix/>
      <CTASeven/>
      <CTAEight/>
      <Faq/>
      <ContactUs/>
    </main>
  );
}
