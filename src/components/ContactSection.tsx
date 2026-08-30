import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

/**
 * "Хамтдаа бүтээцгээе" — том гарчигтай холбоо барих хэсэг. Нүүр болон
 * /about хоёуланд ашиглана.
 */
export function ContactSection() {
  const rows = [
    { icon: "✉", label: site.email, href: `mailto:${site.email}` },
    {
      icon: "⌥",
      label: `github.com/${site.github}`,
      href: site.githubUrl,
      external: true,
    },
    { icon: "☎", label: site.phone, href: site.phoneHref },
    { icon: "◎", label: "Улаанбаатар, Монгол", href: null },
  ];

  return (
    <Reveal as="section" id="contact" className="mt-16 scroll-mt-24 border-t border-line pt-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="gradient-text font-sans text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Хамтдаа
            <br />
            бүтээцгээе
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Migration, төлбөрийн интеграци, design engineering — эсвэл full-stack
            төслийн ажил байвал бичээрэй.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="gradient-bg mt-6 inline-block rounded-full px-6 py-3 text-sm font-medium"
          >
            Холбоо барих →
          </a>
        </div>

        <ul className="space-y-3">
          {rows.map((row) => {
            const content = (
              <>
                <span
                  aria-hidden
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-accent"
                >
                  {row.icon}
                </span>
                <span className="text-sm">{row.label}</span>
              </>
            );
            return (
              <li key={row.label}>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 transition-colors hover:border-accent/50"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Reveal>
  );
}
