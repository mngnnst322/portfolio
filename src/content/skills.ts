// Ур чадвар — үнэн эрэмбээр, progress bar-гүй (§2).

export type SkillGroup = {
  title: string;
  note?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Production-д хүргэсэн",
    note: "Олон клиентийн production дээр ажиллаж байгаа",
    items: [
      "Next.js (App Router) + TypeScript",
      "Cloudflare Workers / D1 / R2 / KV + OpenNext",
      "Tailwind CSS — design system-ээс production хүртэл",
      "Better Auth, Supabase Google OAuth",
      "QPay V2 — client library, API route, React checkout, баримтжуулалт",
      "Bun — package manager / runtime",
    ],
  },
  {
    title: "Migration ба дэд бүтэц",
    items: [
      "WooCommerce → Cloudflare D1 бүтэн migration (data fetch, SQL generation, R2 зураг upload)",
      "cPanel/WordPress → Cloudflare Workers, custom domain binding",
      "DNS migration (Datacom → Cloudflare)",
      "Legacy `noindex` header оношилж, middleware redirect, sitemap, `robots.ts`-ээр Google Search Console индексжүүлэлт сэргээсэн",
    ],
  },
  {
    title: "Frontend / design engineering",
    items: [
      "Анимэйшнтэй SVG компонентын сан (цонхны конфигуратор — single/double/triple sash, тагтны хаалга, нээх/хазайх анимаци)",
      "SVG өгөгдлийн визуалчлал (Монголын дотоод газрын зураг, олон улсын зах зээлийн зураг, түүхэн timeline)",
      "Анимацийн компонентын сан (Reveal, CountUp, StickyHeader)",
      "Scroll-driven визуалчлал",
      "Лого векторжуулалт, brand asset үйлдвэрлэл",
    ],
  },
  {
    title: "Бусад",
    items: [
      "HTML Canvas 2D тоглоом хөгжүүлэлт (survival mechanics)",
      "Resend имэйл интеграци, PDF/Excel export",
    ],
  },
];
