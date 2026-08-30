"use client";

import { useEffect, useRef } from "react";

/**
 * Хулгана дагадаг зөөлөн туяа + жижиг цэг. Туяа арай хоцорч (lerp) дагана.
 * Touch төхөөрөмж болон prefers-reduced-motion үед CSS-ээр бүрэн унтарна.
 */
export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (coarse.matches || reduced.matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const slow = { ...target };
    let visible = false;
    let raf = 0;

    const place = (el: HTMLElement | null, x: number, y: number) => {
      if (el) el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const tick = () => {
      slow.x += (target.x - slow.x) * 0.15;
      slow.y += (target.y - slow.y) * 0.15;
      place(glow.current, slow.x, slow.y);
      place(dot.current, target.x, target.y);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        glow.current?.style.setProperty("opacity", "1");
        dot.current?.style.setProperty("opacity", "1");
      }
    };

    const onLeave = () => {
      visible = false;
      glow.current?.style.setProperty("opacity", "0");
      dot.current?.style.setProperty("opacity", "0");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={glow} className="cursor-glow" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
