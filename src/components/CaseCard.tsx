import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/cases";

export function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group grid gap-5 border-t border-line py-8 first:border-t-0 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line sm:aspect-[4/3]">
        {study.image ? (
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="(max-width: 640px) 100vw, 240px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: "var(--gradient)" }}
          >
            <span className="font-serif text-5xl font-bold text-accent-ink/90">
              {study.client.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div>
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
      </div>
    </Link>
  );
}
