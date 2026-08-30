import { site } from "@/content/site";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ApiResponse = {
  total: { lastYear: number };
  contributions: Day[];
};

const LEVEL_BG: Record<number, string> = {
  0: "var(--color-line)",
  1: "color-mix(in oklab, var(--accent) 28%, transparent)",
  2: "color-mix(in oklab, var(--accent) 52%, transparent)",
  3: "color-mix(in oklab, var(--accent) 76%, transparent)",
  4: "var(--accent)",
};

async function getContributions(): Promise<ApiResponse | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.github}?y=last`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return null;
    return (await res.json()) as ApiResponse;
  } catch {
    return null;
  }
}

export async function GithubActivity() {
  const data = await getContributions();

  return (
    <section id="github" className="mt-12 scroll-mt-24">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        GitHub идэвх
      </h2>

      {!data ? (
        <p className="mt-4 text-sm text-muted">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            github.com/{site.github} ↗
          </a>
        </p>
      ) : (
        <>
          <p className="mt-3 text-sm text-muted">
            Сүүлийн жилд {data.total.lastYear} contribution ·{" "}
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @{site.github} ↗
            </a>
          </p>

          <div className="mt-4 overflow-x-auto pb-1">
            <div
              className="grid grid-flow-col gap-[3px]"
              style={{ gridTemplateRows: "repeat(7, 1fr)" }}
            >
              {(() => {
                const days = data.contributions;
                const pad = new Date(days[0].date).getUTCDay();
                const cells = [
                  ...Array.from({ length: pad }).map((_, i) => (
                    <span key={`pad-${i}`} className="h-[11px] w-[11px]" />
                  )),
                  ...days.map((d) => (
                    <span
                      key={d.date}
                      title={`${d.date}: ${d.count}`}
                      className="h-[11px] w-[11px] rounded-[2px]"
                      style={{ backgroundColor: LEVEL_BG[d.level] }}
                    />
                  )),
                ];
                return cells;
              })()}
            </div>
          </div>

          <div className="mt-2 flex items-center gap-1.5 text-[0.7rem] text-muted">
            <span>Бага</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <span
                key={l}
                className="h-[11px] w-[11px] rounded-[2px]"
                style={{ backgroundColor: LEVEL_BG[l] }}
              />
            ))}
            <span>Их</span>
          </div>
        </>
      )}
    </section>
  );
}
