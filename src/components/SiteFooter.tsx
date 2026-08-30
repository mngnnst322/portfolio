import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            {site.email}
          </a>
          <a
            href={site.githubUrl}
            className="hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub / {site.github}
          </a>
          <a href={site.phoneHref} className="hover:text-ink">
            {site.phone}
          </a>
        </div>
        <p>
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
