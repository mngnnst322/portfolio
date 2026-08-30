import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCase } from "@/content/cases";
import { RichText } from "@/components/InlineCode";
import { TodoNote } from "@/components/TodoNote";
import { WindowConfigurator } from "@/components/WindowConfigurator";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) return {};
  return {
    title: `${study.client} — ${study.title}`,
    description: study.summary,
  };
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 sm:px-10 lg:px-16">
      <Link href="/" className="text-sm text-muted hover:text-ink">
        ← Бүх ажил
      </Link>

      <header className="mt-6 border-b border-line pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {study.client}
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {study.title}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
          {study.summary}
        </p>

        <dl className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wide text-muted">
              Үүрэг
            </dt>
            <dd className="mt-1">{study.role}</dd>
          </div>
          {study.liveUrl && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                Хаяг
              </dt>
              <dd className="mt-1">
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {study.liveUrl.replace("https://", "")} ↗
                </a>
              </dd>
            </div>
          )}
          <div className="sm:col-span-2">
            <dt className="font-mono text-xs uppercase tracking-wide text-muted">
              Технологи
            </dt>
            <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
              {study.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </dd>
          </div>
        </dl>

        {!study.permissionConfirmed && (
          <p className="mt-6 text-xs text-muted">
            <TodoNote>Клиентээс ил тавих зөвшөөрөл авах (§0.3)</TodoNote>
          </p>
        )}
      </header>

      <Section title="Нөхцөл">
        <p>
          <RichText>{study.context}</RichText>
        </p>
      </Section>

      {study.problem && (
        <Section title="Асуудал">
          <p>
            <RichText>{study.problem}</RichText>
          </p>
        </Section>
      )}

      <Section title="Хийсэн зүйл">
        <ul className="space-y-3">
          {study.work.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>
                <RichText>{item}</RichText>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {study.hasConfigurator && (
        <Section title="Интерактив демо — цонхны конфигуратор">
          <WindowConfigurator />
        </Section>
      )}

      <Section title="Үр дүн">
        <ul className="grid gap-4 sm:grid-cols-2">
          {study.results.map((metric, i) => (
            <li key={i} className="border border-line p-4">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">
                {metric.label}
              </p>
              <p className="mt-2 text-lg">
                {metric.value ?? <TodoNote>ТОО ХЭРЭГТЭЙ</TodoNote>}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">
          Тоо олдохгүй бол хоосон орхино — зохиомол тоо бичихгүй (§6).
        </p>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        {title}
      </h2>
      <div className="mt-4 leading-8 [&_p]:max-w-xl">{children}</div>
    </section>
  );
}
