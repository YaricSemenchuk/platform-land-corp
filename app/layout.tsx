import type { Metadata } from "next";
import { Readex_Pro, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Promobile — App Store Optimization Agency & Platform",
  description:
    "Reach rank 1 with app installs, ratings and reviews from PROMOBILE. Drive your app's organic growth with proven ASO and paid acquisition strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${readexPro.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-ink"
        suppressHydrationWarning
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
