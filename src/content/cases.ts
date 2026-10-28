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
  // Зураг: public/ доторх зам эсвэл null → градиент placeholder (нэрний эхний үсэг).
  image?: string | null;
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
    image: "/projects/todsocks.jpg",
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
    image: "/projects/indert.jpg",
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
  {
    slug: "todcashmere",
    order: 3,
    client: "ТОД кашмер ХХК",
    title: "Монгол ноолуурын premium брэндийн олон хэлтэй онлайн дэлгүүр",
    summary:
      "Эмэгтэй, эрэгтэй, хүүхэд, аксессуар, гэр ахуйн ангилалтай ноолуурын дэлгүүрийг Cloudflare edge дээр, Clerk нэвтрэлттэй, дөрвөн хэлээр бүтээсэн.",
    role: "Full-stack хөгжүүлэлт",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "OpenNext",
      "Cloudflare Workers",
      "Clerk",
      "Tailwind CSS",
    ],
    liveUrl: "https://todcashmere.com",
    image: "/projects/todcashmere.jpg",
    permissionConfirmed: false,
    context:
      "ТОД кашмер бол Улаанбаатарт төвтэй Монгол ноолуурын брэнд. Эмэгтэй, эрэгтэй, хүүхдийн хувцаснаас гадна аксессуар, гэр ахуйн бүтээгдэхүүн, бэлгийн карт зардаг.",
    work: [
      "Эмэгтэй / эрэгтэй / хүүхэд / аксессуар / гэр ахуй / хямдрал гэсэн олон түвшний цэстэй каталог, үнийн шүүлтүүр, хайлт бүтээсэн.",
      "Сагс, хүслийн жагсаалт, захиалгын түүх, профайл зэрэг хэрэглэгчийн урсгалыг Clerk нэвтрэлттэй холбосон.",
      "МН, EN, РУ, ЗХ — дөрвөн хэлний дэмжлэг нэмсэн.",
      "Lookbook, улирлын коллекц (SS26, AW), дэлгүүрийн байршил, ноолуур арчлах заавар, мэдээ, FAQ хуудсууд хийсэн.",
      "Mobile-д зориулсан доод навигаци (Нүүр, Хайлт, Хүслийн жагсаалт, Сагс, Профайл) нэмсэн.",
      "Next.js-ийг OpenNext-ээр Cloudflare Workers дээр deploy хийсэн.",
    ],
    results: [
      { label: "Хэлний дэмжлэг", value: "4 хэл — МН, EN, РУ, ЗХ" },
      { label: "Онлайн захиалга / хөрвүүлэлт", value: null },
    ],
  },
  {
    slug: "bortsog",
    order: 4,
    client: "Bortsog",
    title: "Монгол бичигт streetwear брэндийн limited-drop дэлгүүр",
    summary:
      "Монгол бичгийн хээтэй hoodie, футболкийн хязгаарлагдмал цувралыг зарах, брэндийн дүр төрхийг илэрхийлсэн харанхуй өнгөний дэлгүүр.",
    role: "Full-stack хөгжүүлэлт",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "OpenNext",
      "Cloudflare Workers",
      "Clerk",
      "Tailwind CSS",
    ],
    liveUrl: "https://bortsog.com",
    image: "/projects/bortsog.jpg",
    permissionConfirmed: false,
    context:
      "Bortsog бол \"NEVER DIE\" уриатай Монгол streetwear брэнд. Бүтээгдэхүүн нь дахин гарахгүй хязгаарлагдмал цувралаар гардаг.",
    work: [
      "Монгол бичгийн босоо гарчиг, слайдтай hero, \"Хязгаарлагдмал цуврал // Дахин гарахгүй\" гүйдэг мөр бүхий брэндийн нүүр хуудас бүтээсэн.",
      "Hoodie / T-Shirt ангиллын шүүлтүүртэй дэлгүүр, дууссан барааны төлөв харуулдаг бүтээгдэхүүний хуудас хийсэн.",
      "Хүслийн жагсаалт, сагс, Clerk нэвтрэлт холбосон.",
      "Хүргэлт, хэмжээний заавар, төлбөр, захиалгын тусламжийн мэдээлэлтэй \"Бидний тухай\" хуудас нэмсэн.",
      "Next.js-ийг OpenNext-ээр Cloudflare Workers дээр deploy хийсэн.",
    ],
    results: [
      { label: "Drop бүрийн борлуулалт", value: null },
      { label: "Онлайн захиалгын тоо", value: null },
    ],
  },
  {
    slug: "nuudelchin",
    order: 5,
    client: "Pinecone Studio — дадлагын баг",
    title: "Нүүдэлчин — малчин амьдралын 2D survival тоглоом",
    summary:
      "Малчин айлын өдөр тутмын амьдралыг survival механиктай хослуулсан, браузерт ажилладаг 2D тоглоом. Next.js ба HTML Canvas дээр багаар хийсэн.",
    role: "Багийн гишүүн — тоглоомын хөгжүүлэлт",
    stack: ["Next.js", "TypeScript", "HTML Canvas", "Vercel"],
    liveUrl: "https://nuudelchin-zeta.vercel.app",
    image: "/projects/nuudelchin.jpg",
    permissionConfirmed: true,
    context:
      "Pinecone Studio-гийн дадлагын хүрээнд багаар хийсэн төсөл. Тоглогч гэр, хашаа, морины уяа бүхий нүүдэлчин айлын хүрээнд амьдарна.",
    work: [
      "Амь, эрч хүч, өлсгөлөн, хүйтэн гэсэн дөрвөн үзүүлэлттэй survival системд оролцсон.",
      "Өдөр, шөнийн мөчлөгийг харуулдаг дугуй цаг, өдрийн тоолуур, малын тоо (адуу, үхэр, хонь, тэмээ) бүхий HUD хийсэн.",
      "\"Галаа асаа\" — түлээ цуглуулж, зууханд гал асаах гэх мэт алхамтай зорилгын (quest) систем бүтээсэн.",
      "Ойр байгаа объекттой харилцах (\"E — Өвс хадах\"), багаж сонгох hotbar, EXP түвшин, мини газрын зураг нэмсэн.",
    ],
    results: [
      { label: "Багийн хэмжээ / миний хариуцсан хэсэг", value: null },
    ],
  },
  {
    slug: "movie-z",
    order: 6,
    client: "Хувийн төсөл",
    title: "Movie Z — кино хайх, трейлер үзэх вэб",
    summary:
      "Одоо гарч буй, удахгүй гарах, алдартай, өндөр үнэлгээтэй кинонуудыг төрлөөр нь ангилж, хайж, трейлерийг нь үзэх боломжтой вэб.",
    role: "Frontend хөгжүүлэлт",
    stack: ["Next.js", "TypeScript", "REST API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://movie-web-taupe-mu.vercel.app",
    image: "/projects/movie.jpg",
    permissionConfirmed: true,
    context:
      "Гадны кино API-аас өгөгдөл татаж, хэрэглэгчид ойлгомжтой харуулах frontend дадлага.",
    work: [
      "\"Now Playing\" кинонуудыг үнэлгээ, тайлбар, \"Watch Trailer\" товчтой харуулдаг слайдтай hero бүтээсэн.",
      "Upcoming, Popular, Top rated жагсаалт, \"See more\" хуудаслалт хийсэн.",
      "Төрлөөр шүүх цэс, хайлт, dark mode нэмсэн.",
      "Өгөгдөл ачаалж байх үеийн loading төлөвүүдийг шийдсэн.",
    ],
    results: [{ label: "Lighthouse оноо", value: null }],
  },
  {
    slug: "nomnom",
    order: 7,
    client: "Хувийн төсөл",
    title: "NomNom — хоол хүргэлтийн захиалгын вэб",
    summary:
      "10 ангилалтай цэс, өдрийн онцгой саналын баннер, бүртгэл, нэвтрэлт бүхий хоол хүргэлтийн сайт.",
    role: "Full-stack хөгжүүлэлт",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://food-delivery22.vercel.app",
    image: "/projects/food-delivery.jpg",
    permissionConfirmed: true,
    context:
      "Хоол хүргэлтийн үйлчилгээний хэрэглэгчийн талын урсгалыг эхнээс нь бүтээх дадлагын төсөл.",
    work: [
      "Appetizers, Salads, Pizzas, Main dishes, Desserts, Beverages гэх мэт 10 ангилал бүхий цэс, ангилал руу шууд үсрэх footer холбоос хийсэн.",
      "Зураг, нэр, үнэ, тайлбартай хоолны картууд бүтээсэн.",
      "\"Today's offer\" онцгой саналын hero баннер зохиосон.",
      "Бүртгүүлэх, нэвтрэх урсгал нэмсэн.",
    ],
    results: [{ label: "Цэсний хамрах хүрээ", value: "10 ангилал, 39 хоол" }],
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export const orderedCases = [...cases].sort((a, b) => a.order - b.order);
