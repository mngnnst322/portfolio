import Image from "next/image";
import { site } from "@/content/site";

/**
 * Нүүр хуудасны hero. Баруун талд хөрөг зураг — desktop дээр `sticky` тул
 * доош гүйлгэхэд байрандаа зогсож, зүүн талын контент дээгүүр нь өнгөрнө.
 * `site.portrait` null бол монограм харагдана.
 */
export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 sm:px-10 lg:px-16">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-4 top-8 select-none font-sans text-[28vw] font-bold leading-none text-ink/[0.03] lg:text-[16rem]"
      >
        {site.name.slice(0, 3).toUpperCase()}
      </span>

      <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_340px] lg:gap-16">
        <div className="order-2 lg:order-1 lg:py-6">
          <p className="font-mono text-sm uppercase tracking-widest text-muted">
            Сайн уу — намайг
          </p>
          <h1 className="gradient-text mt-3 font-sans text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg text-muted">{site.role}</p>
          <p className="mt-8 max-w-xl text-lg leading-8">{site.positioning}</p>
          <p className="mt-4 font-mono text-sm text-muted">{site.stackLine}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="gradient-bg rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Холбоо барих →
            </a>
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
              >
                CV татах
              </a>
            )}
            <span className="rounded-full border border-line px-5 py-2.5 text-sm text-muted">
              ◎ {site.location}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub / {site.github}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
            <a href={site.phoneHref} className="hover:text-ink">
              {site.phone}
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto max-w-[240px] lg:sticky lg:top-24 lg:max-w-none">
            <HeroPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPortrait() {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line">
      {/* арын туяа */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 opacity-70 blur-2xl"
        style={{ background: "var(--gradient)" }}
      />

      {site.portrait ? (
        <Image
          src={site.portrait}
          alt={site.name}
          fill
          priority
          sizes="(max-width: 1024px) 240px, 340px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-paper">
          <span className="gradient-text font-serif text-8xl font-bold">
            {site.name.charAt(0)}
          </span>
        </div>
      )}

      {/* доод / зүүн ирмэгийг дэвсгэр рүү уусгах */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-paper via-paper/10 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-paper/60 to-transparent lg:from-transparent"
      />
    </div>
  );
}
