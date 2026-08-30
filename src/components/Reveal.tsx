"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Хэсэг дэлгэц рүү орж ирэхэд зөөлөн уусаж гарч ирнэ (fade + translate up).
 * reduced-motion үед шууд харагдана.
 */
export function Reveal({
  children,
  className,
  id,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // reduced-motion үед globals.css transition-ийг тэглэдэг тул шууд харагдана.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={
        "transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] " +
        (shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4") +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </Tag>
  );
}
