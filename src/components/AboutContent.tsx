import { skillGroups } from "@/content/skills";
import { education } from "@/content/education";
import { RichText } from "@/components/InlineCode";
import { TechGrid } from "@/components/TechGrid";
import { TodoNote } from "@/components/TodoNote";
import { GithubActivity } from "@/components/GithubActivity";
import { Reveal } from "@/components/Reveal";

/**
 * Намтрын агуулга — /about болон нүүр хуудсанд хамт ашиглана.
 * Гадна container-гүй; дуудаж буй хуудас нь өргөнөө өөрөө тохируулна.
 */
export function AboutContent({ heading = false }: { heading?: boolean }) {
  return (
    <>
      <Reveal as="section" id="about" className="mt-4 scroll-mt-24">
        {heading && (
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Намтар
          </h2>
        )}
        <div className="mt-4 max-w-xl space-y-4 leading-8">
          <p>
            Би одоо ТОД ОЙМС ХХК-д software engineer-ээр ажиллаж байна. Монголын
            үйлдвэрлэгчдийн вэбийг хуучин хостингоос Cloudflare-ийн edge дэд бүтэц
            рүү шилжүүлж, QPay зэрэг дотоодын төлбөрийн систем холбож өгдөг.
          </p>
          <p>
            Next.js App Router, TypeScript, Cloudflare Workers / D1 / R2 дээр
            production түвшний ажил хийдэг. Migration, SEO/индексжүүлэлт,
            интерактив SVG визуалчлалд онцгой анхаардаг. Мобайл апп мөн бүтээдэг.
          </p>
          <p>
            Байнга суралцаж, зүйлийг гүнзгий ойлгохыг эрмэлздэг. Бие даан шинэ
            технологи эзэмших чадвартай — шинэ асуудал бүр сурах боломж.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" id="tech" className="mt-12 scroll-mt-24">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Технологи
        </h2>
        <div className="mt-6">
          <TechGrid />
        </div>
      </Reveal>

      <Reveal as="section" id="education" className="mt-12 scroll-mt-24">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Боловсрол
        </h2>
        <ul className="mt-6 max-w-2xl space-y-5">
          {education.map((item) => (
            <li key={item.school} className="border-t border-line pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-serif text-lg font-semibold tracking-tight">
                  {item.school}
                </h3>
                <span className="font-mono text-xs text-muted">
                  {item.period ?? <TodoNote>ХУГАЦАА</TodoNote>}
                </span>
              </div>
              <p className="mt-1 text-sm text-accent">{item.program}</p>
              {item.note && <p className="mt-2 text-muted">{item.note}</p>}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" id="skills" className="mt-12 scroll-mt-24">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Ур чадвар
        </h2>
        <div className="mt-6 max-w-2xl space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-xl font-semibold tracking-tight">
                {group.title}
              </h3>
              {group.note && (
                <p className="mt-1 text-sm text-muted">{group.note}</p>
              )}
              <ul className="mt-3 space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex gap-3 leading-7">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>
                      <RichText>{item}</RichText>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <GithubActivity />
    </>
  );
}
