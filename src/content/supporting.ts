// Дэмжих ажлууд — кейс биш, богино блок (§3). Бүх зүйлээ жагсаахгүй (§7).

export type SupportingItem = {
  title: string;
  description: string;
  repo?: string;
  url?: string;
};

export const supporting: SupportingItem[] = [
  {
    title: "Нүүдэлчин",
    description:
      "2D survival тоглоом, Next.js + HTML Canvas. Pinecone Studio-гийн дадлагын багийн төсөл. Survival mechanics систем.",
    repo: "pinecone-studio/intern-4a",
    url: "https://malchin-zeta.vercel.app",
  },
  {
    title: "Хоол захиалгын вэб",
    description:
      "Хоол хүргэлтийн онлайн захиалгын сайт — меню, сагс, захиалгын урсгал.",
    url: "https://food-delivery22.vercel.app",
  },
  {
    title: "Кино вэб",
    description:
      "Кино хайх, үзэх сайт — жагсаалт, дэлгэрэнгүй хуудас, хайлт.",
    url: "https://movie-web-taupe-mu.vercel.app",
  },
  {
    title: "Luxury cashmere e-commerce concept",
    description: "Editorial дизайн, PDF/Excel export, Resend.",
  },
];
