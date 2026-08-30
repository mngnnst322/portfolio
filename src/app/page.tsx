import { orderedCases } from "@/content/cases";
import { CaseCard } from "@/components/CaseCard";
import { Hero } from "@/components/Hero";
import { WhatIDo } from "@/components/WhatIDo";
import { AboutContent } from "@/components/AboutContent";
import { Gallery } from "@/components/Gallery";
import { ContactSection } from "@/components/ContactSection";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 pb-16">
        <WhatIDo />

        <Reveal as="section" id="work" className="mt-12 scroll-mt-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
            Сонгосон ажлууд
          </h2>
          <div className="mt-6">
            {orderedCases.map((study, i) => (
              <CaseCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </Reveal>

        <AboutContent heading />

        <Gallery />

        <ContactSection />
      </div>
    </>
  );
}
