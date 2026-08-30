// Дутуу мэдээллийг ил харуулах placeholder. Бодит утга орох хүртэл сайт дээр
// "[ТОО ХЭРЭГТЭЙ]" гэж харагдана — зохиомол тоо бичихээс сэргийлнэ (§6).

export function TodoNote({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-dashed border-accent/60 px-1.5 py-0.5 font-mono text-[0.72em] uppercase tracking-wide text-accent">
      <span aria-hidden>↳</span>
      {children}
    </span>
  );
}
