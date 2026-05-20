import type { Metadata } from "next";
import { Readex_Pro, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer/Footer";
import { MetaPixel } from "@/components/MetaPixel/MetaPixel";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://promobile.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Promobile — App Store Optimization Agency & Platform",
    template: "%s | Promobile",
  },
  description:
    "Reach rank 1 with app installs, ratings and reviews from PROMOBILE. Drive your app's organic growth with proven ASO and paid acquisition strategies.",
  applicationName: "Promobile",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Promobile",
    title: "Promobile — App Store Optimization Agency & Platform",
    description:
      "Reach rank 1 with app installs, ratings and reviews from PROMOBILE. Drive your app's organic growth with proven ASO and paid acquisition strategies.",
    images: [
      {
        url: "/logopromobile.png",
        width: 1200,
        height: 630,
        alt: "Promobile",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promobile — App Store Optimization Agency & Platform",
    description:
      "Reach rank 1 with app installs, ratings and reviews from PROMOBILE.",
    images: ["/logopromobile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
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
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Promobile",
              url: siteUrl,
              logo: `${siteUrl}/logopromobile.png`,
              sameAs: [],
            }),
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
