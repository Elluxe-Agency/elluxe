"use client";
import { useState } from "react";
import { CloseIcon, ElluxeLogo, HamburgerIcon } from "../icons/common";
import { Button } from "../ui/button";
import { scrollToSection } from "@/lib/utils";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleMobileScroll = (section: string) => {
    if(pathname !== "/"){
      router.push(`/#${section}`);
    }
    setOpen(false);
    scrollToSection(section);
  };

  const handleNavigation = (section: string) => {
    console.log(pathname)
    if(pathname !== "/"){
      router.push(`/#${section}`);
    }
    scrollToSection(section);
  };


  return (
    <nav className="w-full min-h-[78px] sticky top-0 bg-transparent z-[100] pt-2 px-2 md:px-0">
      <div className="container px-6 py-4 mx-auto relative bg-gradient-to-tr from-[#1C1D1F]/80 from-0% via-[#28292C]/80 via-50% to-[#1C1D1F] to-100% backdrop-blur-sm rounded-[24px] ">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex gap-1 items-center">
            <ElluxeLogo className="h-[24px] w-[150px] md:h-[38px] md:w-[200px]" />
          </Link>
          <ul className="text-white text-navigation gap-6 hidden md:flex">
            <li
              onClick={() => handleNavigation(SECTIONS.ABOUTUS)}
              className="cursor-pointer"
            >
              About Us
            </li>
            <Link  onClick={() => setOpen(!open)} href="/services">
              <li className="cursor-pointer">Services</li>
            </Link>
            <li
              onClick={() => handleNavigation(SECTIONS.CASESTUDY)}
              className="cursor-pointer"
            >
              How it works
            </li>
            <li
              onClick={() => handleNavigation(SECTIONS.CONTACTUS)}
              className="cursor-pointer"
            >
              Contact
            </li>
          </ul>
          <div className="flex items-center gap-3">
            {open ? (
              <div
                className="p-2 block md:hidden"
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </div>
            ) : (
              <div
                className="p-2 block md:hidden"
                onClick={() => setOpen(true)}
              >
                <HamburgerIcon />
              </div>
            )}
            <Link href="/apply-now">
              <Button className="hidden sm:block" variant="default" size="nav">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {open && (
        <div className="pl-3 pr-6 mt-3 absolute w-full md:hidden">
          <div className="rounded-[24px] bg-featured-card-bg w-full">
            <ul className="text-white text-navigation flex flex-col items-center gap-6 py-8">
              <li
                onClick={() => handleMobileScroll(SECTIONS.ABOUTUS)}
                className="cursor-pointer"
              >
                About Us
              </li>
              <Link onClick={() => setOpen(!open)} href="/services">
                <li className="cursor-pointer">Services</li>
              </Link>
              <li
                onClick={() => handleMobileScroll(SECTIONS.CASESTUDY)}
                className="cursor-pointer"
              >
                How it works
              </li>
              <li
                onClick={() => handleMobileScroll(SECTIONS.CONTACTUS)}
                className="cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
