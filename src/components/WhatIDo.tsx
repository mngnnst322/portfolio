import { services } from "@/content/services";
import { Reveal } from "@/components/Reveal";

export function WhatIDo() {
  return (
    <Reveal as="section" id="services" className="mt-12 scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-[1px] bg-accent" />
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Юу хийдэг вэ
        </h2>
        <span className="h-px flex-1 bg-line" />
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li
            key={service.title}
            className="group rounded-xl border border-line bg-ink/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_0_30px_-8px] hover:shadow-accent/25"
          >
            <span className="text-2xl">{service.icon}</span>
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wide">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
