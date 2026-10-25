"use client";
import { SECTIONS } from "@/lib/const";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/earnings-disclaimer", label: "Earnings Disclaimer" },
];

const LegalRow = () => (
  <div className="flex flex-col items-center gap-3 text-white px-6 text-center">
    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.9rem]">
      {LEGAL_LINKS.map((l) => (
        <li key={l.href}>
          <Link className="underline underline-offset-4" href={l.href}>
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
    <p className="text-[0.85rem] text-white/80 max-w-[44rem]">
      Elluxe Talent Management is a brand of High Life Vision LLC, 30 N Gould
      St, Ste R, Sheridan, WY 82801, United States. No upfront fees: we are
      paid a share of net revenue under a written management agreement.
      Earnings shown on this site are not typical; individual results vary.
    </p>
    <p>©2026 Elluxe Talent Management. All rights reserved.</p>
  </div>
);

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (section: string) => {
    if (pathname !== "/") {
      router.push(`/#${section}`);
    }
    scrollToSection(section);
  };

  if (pathname === "/apply-now") {
    return (
      <section className="w-full bg-primary-black">
        <div className="container mx-auto py-8">
          <LegalRow />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-primary-black">
      <div className="container mx-auto py-8 md:pt-[53px] md:pb-[18px]">
        <div className="h-px w-full bg-white" />
        <ul className="text-white text-[1rem] gap-6 flex justify-center my-7 md:mt-4 md:mb-9 px-6">
          <li
            onClick={() => handleNavigation(SECTIONS.ABOUTUS)}
            className="cursor-pointer"
          >
            About Us
          </li>
          <Link href="/services">
            <li className="cursor-pointer">Services</li>
          </Link>
          <li
            onClick={() => handleNavigation(SECTIONS.RESULTS)}
            className="cursor-pointer"
          >
            Results
          </li>
          <li
            onClick={() => handleNavigation(SECTIONS.CONTACTUS)}
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>
        <LegalRow />
      </div>
    </section>
  );
};

export default Footer;
