import type { Metadata } from "next";
import { Fraunces, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";
import Preloader from "@/components/Preloader";
import CursorSpotlight from "@/components/CursorSpotlight";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "LERTIV | Tampa Bay Outdoor Construction & Property Enhancement",
  description:
    "LERTIV builds the spaces where Florida life happens. Paver patios, outdoor kitchens, pergolas, and full exterior transformations across Tampa Bay since 2011.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <GrainOverlay />
        <CursorSpotlight />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
