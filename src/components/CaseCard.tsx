import Link from "next/link";
import type { CaseStudy } from "@/content/cases";

export function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block border-t border-line py-8 first:border-t-0"
    >
      <div className="flex items-baseline gap-3 text-sm text-muted">
        <span className="font-mono">{String(index + 1).padStart(2, "0")}</span>
        <span>{study.client}</span>
      </div>
      <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight group-hover:text-accent sm:text-[1.7rem]">
        {study.title}
      </h3>
      <p className="mt-3 max-w-xl text-[0.975rem] leading-7 text-muted">
        {study.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {study.stack.slice(0, 5).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <span className="mt-4 inline-block text-sm text-accent">
        Кейсийг унших →
      </span>
    </Link>
  );
}
