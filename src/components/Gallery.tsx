import Image from "next/image";
import { gallery } from "@/content/gallery";
import { TodoNote } from "@/components/TodoNote";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  return (
    <Reveal as="section" id="gallery" className="mt-12 scroll-mt-24">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        Галерей
      </h2>

      {gallery.length === 0 ? (
        <p className="mt-4 text-sm text-muted">
          <TodoNote>
            Зураг нэмэх — public/gallery/ дотор хийгээд content/gallery.ts-д бүртгэнэ
          </TodoNote>
        </p>
      ) : (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {gallery.map((item) => (
            <li
              key={item.src}
              className="overflow-hidden rounded-lg border border-line"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, 400px"
                className="h-auto w-full"
              />
              {item.caption && (
                <p className="border-t border-line px-3 py-2 font-mono text-xs text-muted">
                  {item.caption}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}
