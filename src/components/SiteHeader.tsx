import Link from "next/link";
import { site } from "@/content/site";
import { SectionNav, type NavSection } from "@/components/SectionNav";

const sections: NavSection[] = [
  { id: "services", label: "Үйлчилгээ" },
  { id: "work", label: "Ажил" },
  {
    id: "about",
    label: "Намтар",
    covers: ["tech", "education", "skills", "github"],
  },
  { id: "gallery", label: "Галерей" },
  { id: "contact", label: "Холбоо барих" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="gradient-text font-sans text-lg font-bold tracking-tight"
        >
          {site.name}
        </Link>
        <SectionNav sections={sections} />
        <a
          href={`mailto:${site.email}`}
          className="text-sm text-muted hover:text-ink md:hidden"
        >
          Холбоо барих
        </a>
      </div>
    </header>
  );
}
