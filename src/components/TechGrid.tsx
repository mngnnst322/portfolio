import {
  siNextdotjs,
  siTypescript,
  siReact,
  siTailwindcss,
  siCloudflare,
  siNodedotjs,
  siBun,
  siPostgresql,
  siMongodb,
  siSupabase,
  siSqlite,
  siVercel,
  siGit,
  siGithub,
  siFigma,
  siJavascript,
  type SimpleIcon,
} from "simple-icons";

type Tech = { icon: SimpleIcon; label: string };

const stack: Tech[] = [
  { icon: siNextdotjs, label: "Next.js" },
  { icon: siTypescript, label: "TypeScript" },
  { icon: siReact, label: "React" },
  { icon: siJavascript, label: "JavaScript" },
  { icon: siTailwindcss, label: "Tailwind CSS" },
  { icon: siCloudflare, label: "Cloudflare" },
  { icon: siSqlite, label: "D1 / SQLite" },
  { icon: siNodedotjs, label: "Node.js" },
  { icon: siBun, label: "Bun" },
  { icon: siPostgresql, label: "PostgreSQL" },
  { icon: siMongodb, label: "MongoDB" },
  { icon: siSupabase, label: "Supabase" },
  { icon: siVercel, label: "Vercel" },
  { icon: siGit, label: "Git" },
  { icon: siGithub, label: "GitHub" },
  { icon: siFigma, label: "Figma" },
];

export function TechGrid() {
  return (
    <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
      {stack.map(({ icon, label }) => (
        <li
          key={label}
          className="group flex flex-col items-center gap-2 rounded-lg border border-line bg-ink/[0.02] px-2 py-4 text-center transition-colors hover:border-accent/50"
        >
          <svg
            role="img"
            aria-hidden
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-muted transition-colors group-hover:fill-[var(--brand)]"
            style={{ "--brand": `#${icon.hex}` } as React.CSSProperties}
          >
            <path d={icon.path} />
          </svg>
          <span className="font-mono text-[0.7rem] uppercase tracking-wide text-muted">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
