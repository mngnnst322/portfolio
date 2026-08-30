import Image from "next/image";
import { supporting } from "@/content/supporting";

export function ProjectGrid() {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {supporting.map((item) => (
        <li
          key={item.title}
          className="group flex flex-col overflow-hidden rounded-xl border border-line bg-ink/[0.03] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_0_36px_-10px] hover:shadow-accent/25"
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ background: "var(--gradient)" }}
              >
                <span className="font-serif text-5xl font-bold text-accent-ink/90">
                  {item.title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="font-serif text-lg font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted">
              {item.description}
            </p>

            {item.tech && (
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
                {item.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            )}

            <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4 font-mono text-xs">
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {item.url.replace("https://", "")} ↗
                </a>
              )}
              {item.repo && <span className="text-muted">{item.repo}</span>}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
