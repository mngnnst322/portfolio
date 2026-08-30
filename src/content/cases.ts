// Кейс судалгаанууд. Формат: Нөхцөл → Асуудал → Хийсэн зүйл → Үр дүн.
// value: null → сайт дээр харагдах TODO placeholder болно. Зохиомол тоо бүü бич (§6).

export type Metric = {
  label: string;
  value: string | null;
};

export type CaseStudy = {
  slug: string;
  order: number;
  client: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  liveUrl?: string;
  permissionConfirmed: boolean; // §0.3 — клиентээс бичгээр зөвшөөрөл авсан эсэх
  context: string;
  problem?: string;
  work: string[];
  results: Metric[];
  hasConfigurator?: boolean;
};

export const cases: CaseStudy[] = [
  {
    slug: "todsocks",
    order: 1,
    client: "ТОД ОЙМС ХХК",
    title: "Legacy WooCommerce-оос edge-native дэлгүүр рүү",
    summary:
      "16 улс руу экспортолдог ноос, сүлжмэлийн үйлдвэрийн вэбийг cPanel хостингоос Cloudflare edge рүү шилжүүлж, дотоодын төлбөрийн систем холбож, Google-ийн индексжүүлэлтийг сэргээсэн.",
    role: "Full-stack хөгжүүлэлт, migration, төлбөрийн интеграци",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "Cloudflare Workers",
      "D1",
      "R2",
      "OpenNext",
      "Better Auth",
      "QPay V2",
      "Tailwind CSS",
    ],
    liveUrl: "https://todsocks.mn",
    permissionConfirmed: true,
    context:
      "ТОД ОЙМС ХХК бол Монголын ноосон оймс, сүлжмэл бүтээгдэхүүнээ 16 улсад экспортолдог үйлдвэр. Тэдний онлайн дэлгүүр cPanel хостинг дээрх хуучин WordPress/WooCommerce стек дээр байсан.",
    problem:
      "Хуучин стек удаан, дотоодын төлбөрийн холболтгүй, бас сайт Google-ийн хайлтаас бүрмөсөн алга болсон байв — өмнөх хостингоос үлдсэн `noindex` header индексжүүлэлтийг бүхэлд нь хааж байсан.",
    work: [
      "WooCommerce-ийн өгөгдлийг татах, D1-д тохирсон SQL үүсгэх, бүтээгдэхүүний зургийг R2 руу байршуулах гурван скриптийн migration toolkit (Node.js/Bun) бичсэн.",
      "Хуучин өгөгдөлд огт хүрэлгүйгээр `wc_products` / `wc_images` / `wc_categories` гэсэн тусдаа хүснэгтээр схемийг Cloudflare D1 руу шилжүүлсэн.",
      "Дэлгүүрийг Next.js App Router + OpenNext + Cloudflare Workers дээр, Better Auth-тэйгээр дахин бүтээсэн.",
      "DNS-ийг Datacom-оос Cloudflare руу шилжүүлж, custom domain-ийг холбосон.",
      "Индексжүүлэлтийн доголдлыг оношилж засварласан: middleware redirect, үүсгэсэн sitemap, `robots.ts`.",
      "QPay V2-ийг эхнээс нь дуустал холбосон — client library, API route, React checkout компонент, мөн клиентийн багт зориулсан монгол хэлний баримтжуулалт.",
      "Үйлчилгээний нөхцөлийн төслийг боловсруулж, клиентэд эрх зүйн эрсдэлтэй хэсгүүдийг тэмдэглэж өгсөн.",
    ],
    results: [
      { label: "Migration хугацаа", value: "2 өдөр" },
      {
        label: "Индексжсэн хуудас (өмнө → дараа)",
        value: "1 хуудас → бүх бараа тус бүрээрээ, 7 хоногт сэргэсэн",
      },
      { label: "QPay гүйлгээ / онлайн төлбөрийн эзлэх хувь", value: null },
    ],
  },
  {
    slug: "indert",
    order: 2,
    client: "Индэрт Шүтээн",
    title: "17 хуудас хэвлэмэл каталогоос интерактив цонхны конфигуратор руу",
    summary:
      "PVC цонх, хаалганы үйлдвэрийн статик брошурыг анимэйшнтэй SVG конфигуратор ба scroll-driven барилгын визуалчлал болгож шинэ вэб дээр гаргасан.",
    role: "Design engineering, frontend, brand asset",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SVG", "Vercel"],
    liveUrl: "https://indert.vercel.app",
    permissionConfirmed: false,
    context:
      "Индэрт Шүтээн бол PVC цонх, хаалганы үйлдвэр. 17 хуудас хэвлэмэл брошураас өөр дижитал орчин байгаагүй.",
    problem:
      "Тэдний каталог мөн чанараараа тохируулагддаг — далавчны тоо, нээх хэлбэр, тагтны хувилбарууд — гэвч зөвхөн статик хэвлэл хэлбэрээр байсан. Худалдан авагч юу захиалж байгаагаа харж чаддаггүй байв.",
    work: [
      "Брошурын бүх агуулгыг задалж, дахин бүтэцжүүлсэн.",
      "Нэг, хоёр, гурван далавчит болон тагтны хаалганы хувилбаруудыг хамарсан анимэйшнтэй SVG цонхны конфигураторын компонентын сан бүтээсэн — нээх, хазайлгах анимаци.",
      "ИШ лого-г цэвэр production вектор болон растер асет болгож дахин зурсан.",
      "Scroll-driven барилгын визуалчлал бүтээсэн.",
      "Next.js дээр гаргаж, клиентийн хянах шатанд зориулж Vercel дээр deploy хийсэн.",
    ],
    results: [
      { label: "Каталогийн хамрах хүрээ (SKU / хувилбар)", value: null },
      { label: "Клиентийн хянах мөчлөгийн хугацаа", value: null },
    ],
    hasConfigurator: true,
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export const orderedCases = [...cases].sort((a, b) => a.order - b.order);
