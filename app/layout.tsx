import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SmileCare Dental Clinic | Your Smile, Our Priority",
  description:
    "Experience world-class dental care with cutting-edge technology. Book appointments with our expert dentists for teeth cleaning, implants, orthodontics, and cosmetic dentistry.",
  keywords: [
    "dental clinic",
    "dentist",
    "teeth cleaning",
    "dental implants",
    "orthodontics",
    "cosmetic dentistry",
    "SmileCare",
  ],
  openGraph: {
    title: "SmileCare Dental Clinic | Your Smile, Our Priority",
    description:
      "Experience world-class dental care with cutting-edge technology and compassionate professionals.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
