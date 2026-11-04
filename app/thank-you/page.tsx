import { ElluxeLogo } from "@/components/icons/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";

const ThankYou = () => {
  return (
    <>
      <Script id="ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17909666298/HVbqCN6g6O0bEPqj_9tC'
          });
        `}
      </Script>
      <main>
        <section className="w-full bg-primary-black md:-mt-[100px]">
          <div className="container mx-auto px-6 flex flex-col gap-10 md:gap-20 py-20 md:py-40 h-[100vh]">
            <div className=" text-white flex flex-col gap-8 md:gap-16">
              <div>
                <ElluxeLogo className="w-[220px] md:w-[340px]" />
              </div>
              <h1 className="text-h2-mobile md:text-h2">
                <span className="primary-gradient-text">Thank You</span> for
                Your Submission!
              </h1>
              <p className="text-[21px] md:text-[2rem] w-3/4">
                We&apos;ve received your application and will be in touch soon!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <Link href="/">
                <Button className="px-[2rem] py-[0.75rem]" variant="default">
                  Return to Home page
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ThankYou;
