// Текст доторх `backtick` хэсгийг <code> болгож рендэрлэнэ.

import { Fragment } from "react";

export function RichText({ children }: { children: string }) {
  const parts = children.split("`");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code
            key={i}
            className="rounded bg-ink/[0.06] px-1 py-0.5 font-mono text-[0.85em]"
          >
            {part}
          </code>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
