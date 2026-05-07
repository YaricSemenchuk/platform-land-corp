import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Partnership } from "@/components/Partnership/Partnership";
import { Results } from "@/components/Results/Results";
import { Pricing } from "@/components/Pricing/Pricing";
import { Faq } from "@/components/Faq/Faq";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Header />
      <Hero />
      <About />
      <Partnership />
      <Results />
      <Pricing />
      <Faq />
      <div className="py-8" />
      <CtaBanner
        title="Are you ready to start?"
        primary={{ label: "Get Started", href: "#contact" }}
        variant="dark"
      />
    </main>
  );
}
