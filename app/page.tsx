import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Process } from "@/components/Process/Process";
import { Partnership } from "@/components/Partnership/Partnership";
import { Results } from "@/components/Results/Results";
import { Pricing } from "@/components/Pricing/Pricing";
import { Faq } from "@/components/Faq/Faq";
import { CtaBanner } from "@/components/CtaBanner/CtaBanner";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Hero />
      <About />
      <Process />
      <Partnership />
      <Results />
      <CtaBanner
        title="Let's make things happen"
        body="Unlock your app's full potential with our marketing expertise. Click to skyrocket your downloads and visibility."
        primary={{ label: "Get Started", href: "#contact" }}
        secondary={{ label: "See Pricing", href: "#pricing" }}
        variant="light"
      />
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
