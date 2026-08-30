import type { Metadata } from "next";
import { site } from "@/content/site";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Намтар",
  description: site.positioning,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 py-12">
      <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        Намтар
      </h1>

      <AboutContent />

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="font-serif text-2xl font-semibold tracking-tight">
          Холбоо барих
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${site.email}`} className="text-accent hover:underline">
            {site.email}
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub / {site.github}
          </a>
          <a href={site.phoneHref} className="text-accent hover:underline">
            {site.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
