import { SECTIONS } from "@/lib/const"
import FadeInAnimation from "../common/fade-in-animation"

const CTAEight = () => {
    return (
      <section id={SECTIONS.CTAEIGHT} className="w-full bg-primary-black">
          <div className="container mx-auto px-6  py-[8rem] md:py-[21.375rem] flex flex-col items-center gap-8 md:gap-16">
            <FadeInAnimation>
            <h3 className="text-h3-mobile md:text-h3 primary-gradient-text text-center">Trust, Integrity, Transparency</h3>
            </FadeInAnimation>
            <FadeInAnimation>
            <p className="text-white text-sub-title-mobile md:text-sub-title text-center">Written terms, a named team and daily work on your account. That is the whole offer.</p>
            </FadeInAnimation>
          </div>
      </section>
    )
  }
  
  export default CTAEight