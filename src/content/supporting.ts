// Дэмжих ажлууд / төслүүд — кейс биш, богино картууд (§3). Бүх зүйлээ жагсаахгүй (§7).

export type SupportingItem = {
  title: string;
  description: string;
  repo?: string;
  url?: string;
  tech?: string[];
  // Зураг: public/projects/ дотор хийгээд "/projects/xxx.jpg". null бол градиент placeholder.
  image?: string | null;
};

export const supporting: SupportingItem[] = [
  {
    title: "Нүүдэлчин",
    description:
      "2D survival тоглоом, Next.js + HTML Canvas. Pinecone Studio-гийн дадлагын багийн төсөл. Survival mechanics систем.",
    repo: "pinecone-studio/intern-4a",
    url: "https://malchin-zeta.vercel.app",
    tech: ["Next.js", "HTML Canvas", "TypeScript"],
    image: null,
  },
  {
    title: "Хоол захиалгын вэб",
    description:
      "Хоол хүргэлтийн онлайн захиалгын сайт — меню, сагс, захиалгын урсгал.",
    url: "https://food-delivery22.vercel.app",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: null,
  },
  {
    title: "Кино вэб",
    description: "Кино хайх, үзэх сайт — жагсаалт, дэлгэрэнгүй хуудас, хайлт.",
    url: "https://movie-web-taupe-mu.vercel.app",
    tech: ["React", "REST API", "Tailwind CSS"],
    image: null,
  },
  {
    title: "Luxury cashmere e-commerce concept",
    description: "Editorial дизайн, PDF/Excel export, Resend имэйл.",
    tech: ["Next.js", "Resend"],
    image: null,
  },
];
