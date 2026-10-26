import { SECTIONS } from "@/lib/const";
import FadeInAnimation from "../common/fade-in-animation";

const FAQS = [
  {
    q: "What does Elluxe cost?",
    a: "Nothing upfront. We take a share of net revenue, fixed in writing before you sign. If you already earn, our share applies only to the growth we add on top of your baseline. Terms apply.",
  },
  {
    q: "How much work is it for me?",
    a: "Plan for 8 to 10 hours a week of content creation. We handle posting, messaging, marketing, pricing and the admin.",
  },
  {
    q: "Do I have to show my face?",
    a: "No. We manage faceless creators too, and we build a persona and protection plan with you.",
  },
  {
    q: "Who owns my account and content?",
    a: "You do. Our access is for management and reverts to you at the end of the agreement.",
  },
  {
    q: "Do you take beginners?",
    a: "Yes, if you can commit the hours. We build the persona, the plan and the accounts with you from a standing start.",
  },
  {
    q: "What happens after I apply?",
    a: "A short call within a few days, a written proposal with the exact split, and onboarding within a week if we both say yes.",
  },
];

const Faq = () => {
  return (
    <section id={SECTIONS.FAQ} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 pb-32 md:pb-[10rem] flex flex-col gap-10 md:gap-14">
        <FadeInAnimation>
          <h3 className="text-white text-h3-mobile md:text-h3">
            Questions, <span className="primary-gradient-text">answered.</span>
          </h3>
        </FadeInAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {FAQS.map((item) => (
            <FadeInAnimation key={item.q} className="flex flex-col gap-2 border-t border-white/20 pt-5 min-w-0">
              <p className="text-white text-[1.125rem] md:text-[1.25rem] font-bold">{item.q}</p>
              <p className="text-white/80 text-[1rem] md:text-[1.0625rem] leading-relaxed">{item.a}</p>
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
