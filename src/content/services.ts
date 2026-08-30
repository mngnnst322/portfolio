// "Юу хийдэг вэ" — үйлчилгээний чиглэлүүд (brief §1–2).

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "☁️",
    title: "Migration ба дэд бүтэц",
    description:
      "Legacy WordPress / cPanel сайтыг Cloudflare Workers, D1, R2 рүү шилжүүлэх. DNS, custom domain, тасарсан индексжүүлэлт сэргээх.",
  },
  {
    icon: "💳",
    title: "Дотоодын төлбөрийн интеграци",
    description:
      "QPay V2-ийг эхнээс нь дуустал — client library, API route, React checkout компонент, монгол хэлний баримтжуулалт.",
  },
  {
    icon: "🧩",
    title: "Full-stack бүтээн байгуулалт",
    description:
      "Next.js App Router + TypeScript + Tailwind. Better Auth, Supabase OAuth. Edge дээр production түвшний хурд.",
  },
  {
    icon: "🎨",
    title: "Design engineering",
    description:
      "Анимэйшнтэй SVG конфигуратор, өгөгдлийн визуалчлал, scroll-driven UI, лого векторжуулалт, brand asset.",
  },
];
