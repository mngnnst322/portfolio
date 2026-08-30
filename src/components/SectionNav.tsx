"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavSection = { id: string; label: string; covers?: string[] };

/**
 * Доош гүйлгэхэд идэвхтэй хэсгийг тодруулна (scroll-spy). Зөвхөн нүүр
 * хуудсан дээр ажиллана — бусад хуудсанд энгийн линк хэвээр.
 */
export function SectionNav({ sections }: { sections: NavSection[] }) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!onHome) return;

    const navIdFor = (sectionId: string) =>
      sections.find(
        (s) => s.id === sectionId || s.covers?.includes(sectionId),
      )?.id ?? null;

    const watchIds = sections.flatMap((s) => [s.id, ...(s.covers ?? [])]);
    const targets = watchIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const navId = navIdFor(visible[0].target.id);
          if (navId) setActive(navId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [onHome, sections]);

  return (
    <nav className="hidden items-center gap-1 text-sm md:flex">
      {sections.map((s) => {
        const isActive = onHome && active === s.id;
        return (
          <Link
            key={s.id}
            href={`/#${s.id}`}
            aria-current={isActive ? "true" : undefined}
            className={
              "rounded-full px-3 py-1.5 transition-colors " +
              (isActive
                ? "gradient-bg font-medium"
                : "text-muted hover:text-ink")
            }
          >
            {s.label}
          </Link>
        );
      })}
    </nav>
  );
}
