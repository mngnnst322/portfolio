// Сайтын үндсэн тохиргоо. [ХАШИЛТ доторх утгуудыг] бодит мэдээллээр солино уу.

export const site = {
  name: "Myangannast",
  role: "Full-stack хөгжүүлэгч — Улаанбаатар",
  // Hero-ийн байрлалын өгүүлбэр (§1)
  positioning:
    "Монголын үйлдвэрлэгчдийн вэбийг хуучин хостингоос edge дэд бүтэц рүү шилжүүлж, дотоодын төлбөрийн систем холбож өгдөг.",
  stackLine: "Next.js · Cloudflare Workers · D1 · R2 · QPay",

  // Холбоо барих
  email: "myngannast.b@gmail.com",
  phone: "+976 9917 9996",
  phoneHref: "tel:+97699179996",
  location: "Улаанбаатар, Монгол",
  github: "mngnnst322",
  githubUrl: "https://github.com/mngnnst322",

  // Домэйн — deploy хийхээс өмнө солино уу
  siteUrl: "https://myangannast-portfolio.vercel.app",

  // Хөрөг зураг: арын дэвсгэргүй (background-removed) PNG-г `public/portrait.png`
  // дотор хийгээд энэ замыг "/portrait.png" болго. null бол монограм харагдана.
  portrait: "/bi.jpeg" as string | null,

  // CV / resume файл: `public/` дотор хийгээд замыг бич. null бол товч харагдахгүй.
  resumeUrl: null as string | null,
} as const;

export const nav = [
  { href: "/", label: "Нүүр" },
  { href: "/about", label: "Намтар" },
] as const;
