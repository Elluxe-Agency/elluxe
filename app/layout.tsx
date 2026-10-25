import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";
import GoogleAnalyticsScripts from "@/components/analytics";
import ClarityTrackingScript from "@/components/clarity";

const SFProDisplay = localFont({
  src: [
    {
      path: "./fonts/SF-Pro-Display-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SF-Pro-Display-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Elluxe Management",
  description:
    "Talent management for creators: account management, marketing, 24/7 support and online safety. No upfront fees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="bg-primary-black" lang="en">
      <head>
        <link
          rel="preload"
          href="/images/hero-bg-mobile.png"
          as="image"
        />
        <link
          rel="preload"
          href="/images/hero-mobile-image.png"
          as="image"
        />
        <link
          rel="preload"
          href="/images/hero-bg.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/featured-marble-bg.png"
          as="image"
        />

        <link
          rel="preload"
          href="/images/marble-bg-big.png"
          as="image"
        />
        <GoogleAnalyticsScripts />
        <ClarityTrackingScript />
      </head>
      <body className={SFProDisplay.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
