import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight">
        Хуудас олдсонгүй
      </h1>
      <Link href="/" className="mt-6 inline-block text-accent hover:underline">
        ← Нүүр хуудас
      </Link>
    </div>
  );
}
