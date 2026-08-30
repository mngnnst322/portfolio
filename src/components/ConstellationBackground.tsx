"use client";

import { useEffect, useRef } from "react";

/**
 * Хар суурин дээрх анимэйшнтэй зангилааны тор. Хулгана ойртоход зангилаанууд
 * түлхэгдэж, курсортой шугамаар холбогдоно. Мобайл / reduced-motion үед
 * зөвхөн нэг статик фрэйм зурна.
 */

const ACCENT = "212, 47, 184"; // magenta
const ACCENT_2 = "124, 58, 237"; // violet
const LINE = "150, 130, 205";

type Node = { x: number; y: number; vx: number; vy: number };

export function ConstellationBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK_DIST = 132;
    const MOUSE_DIST = 190;

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = coarse ? 17000 : 11000;
      const count = Math.min(Math.round((w * h) / density), coarse ? 45 : 110);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;

          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_DIST) {
            const force = (MOUSE_DIST - dist) / MOUSE_DIST;
            n.x += (dx / dist) * force * 1.4;
            n.y += (dy / dist) * force * 1.4;
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(${LINE}, ${0.16 * (1 - d / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (d < MOUSE_DIST) {
          ctx.strokeStyle = `rgba(${ACCENT}, ${0.5 * (1 - d / MOUSE_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle =
          d < MOUSE_DIST
            ? `rgba(${ACCENT}, 0.9)`
            : `rgba(${ACCENT_2}, 0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, d < MOUSE_DIST ? 2 : 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => build();
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        raf = requestAnimationFrame(loop);
      }
    };

    build();
    if (reduced) {
      draw();
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      document.addEventListener("visibilitychange", onVisibility);
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
