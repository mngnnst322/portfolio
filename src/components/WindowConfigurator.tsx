"use client";

import { useId, useState } from "react";

/**
 * Индэрт Шүтээний цонхны конфигураторын багасгасан хувилбар — кейс дээр шууд
 * ажиллуулж үзүүлэх демо. Далавчны тоо, цонх/тагтны хаалга, нээх/хазайх төлөв.
 * Зөвхөн 2D + perspective transform ашигласан тул мобайл дээр хөнгөн.
 */

type SashCount = 1 | 2 | 3;
type Variant = "window" | "door";
type Action = "closed" | "open" | "tilt";

const FRAME = 12;
const MULLION = 8;
const SASH_FRAME = 9;
const WIDTH = 300;

const SASH_OPTIONS: SashCount[] = [1, 2, 3];

export function WindowConfigurator() {
  const [sashCount, setSashCount] = useState<SashCount>(2);
  const [variant, setVariant] = useState<Variant>("window");
  const [action, setAction] = useState<Action>("open");
  const [activeSash, setActiveSash] = useState(0);

  const active = Math.min(activeSash, sashCount - 1);
  const height = variant === "door" ? 430 : 320;
  const gid = useId().replace(/:/g, "");

  const x0 = FRAME;
  const y0 = FRAME;
  const x1 = WIDTH - FRAME;
  const y1 = height - FRAME;
  const innerW = x1 - x0;
  const colW = (innerW - MULLION * (sashCount - 1)) / sashCount;
  const sashH = y1 - y0;

  const hingeSide = (i: number): "left" | "right" =>
    i === sashCount - 1 && sashCount > 1 ? "right" : "left";

  return (
    <div className="not-prose rounded-lg border border-line bg-paper p-4 sm:p-6">
      <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
        <div className="flex justify-center">
          <svg
            viewBox={`0 0 ${WIDTH} ${height + 26}`}
            className="w-full max-w-[260px]"
            role="img"
            aria-label={`${sashCount} далавчит ${
              variant === "door" ? "тагтны хаалга" : "цонх"
            }, ${
              action === "closed"
                ? "хаалттай"
                : action === "open"
                  ? "нээлттэй"
                  : "хазайсан"
            } төлөв`}
          >
            <defs>
              <linearGradient id={`glass-${gid}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.06" />
                <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0.14" />
              </linearGradient>
            </defs>

            {/* шал / сүүдэр */}
            <ellipse
              cx={WIDTH / 2}
              cy={height + 14}
              rx={innerW / 2.4}
              ry={7}
              fill="var(--color-ink)"
              opacity={action === "closed" ? 0.06 : 0.12}
            />

            {/* гадна хүрээ */}
            <rect
              x={2}
              y={2}
              width={WIDTH - 4}
              height={height - 4}
              rx={3}
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth={4}
            />

            {Array.from({ length: sashCount }).map((_, i) => {
              const sx = x0 + i * (colW + MULLION);
              const isActive = i === active && action !== "closed";
              const hinge = hingeSide(i);

              const transform = !isActive
                ? undefined
                : action === "tilt"
                  ? "perspective(720px) rotateX(22deg)"
                  : hinge === "left"
                    ? "perspective(720px) rotateY(-34deg)"
                    : "perspective(720px) rotateY(34deg)";

              const transformOrigin =
                action === "tilt"
                  ? "center bottom"
                  : hinge === "left"
                    ? "left center"
                    : "right center";

              return (
                <g key={i}>
                  {/* нээх чиглэлийн уламжлалт тэмдэглэгээ */}
                  {i === active && action !== "closed" && (
                    <OpeningSymbol
                      x={sx}
                      y={y0}
                      w={colW}
                      h={sashH}
                      action={action}
                      hinge={hinge}
                    />
                  )}

                  <g
                    style={{
                      transform,
                      transformOrigin,
                      transformBox: "fill-box",
                      transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    {/* далавчны хүрээ */}
                    <rect
                      x={sx}
                      y={y0}
                      width={colW}
                      height={sashH}
                      fill="var(--color-paper)"
                      stroke="var(--color-ink)"
                      strokeWidth={2.5}
                    />
                    {/* шил */}
                    <rect
                      x={sx + SASH_FRAME}
                      y={y0 + SASH_FRAME}
                      width={colW - SASH_FRAME * 2}
                      height={sashH - SASH_FRAME * 2}
                      fill={`url(#glass-${gid})`}
                      stroke="var(--color-line)"
                      strokeWidth={1}
                    />
                    {/* бариул */}
                    <rect
                      x={
                        hinge === "left"
                          ? sx + colW - SASH_FRAME - 2
                          : sx + SASH_FRAME - 3
                      }
                      y={y0 + sashH / 2 - 12}
                      width={5}
                      height={24}
                      rx={2.5}
                      fill="var(--color-ink)"
                    />
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <Field label="Далавчны тоо">
            <Segmented
              options={SASH_OPTIONS.map((n) => ({ value: String(n), label: String(n) }))}
              value={String(sashCount)}
              onChange={(v) => {
                const n = Number(v) as SashCount;
                setSashCount(n);
                if (activeSash > n - 1) setActiveSash(n - 1);
              }}
            />
          </Field>

          <Field label="Төрөл">
            <Segmented
              options={[
                { value: "window", label: "Цонх" },
                { value: "door", label: "Тагтны хаалга" },
              ]}
              value={variant}
              onChange={(v) => setVariant(v as Variant)}
            />
          </Field>

          <Field label="Нээлт">
            <Segmented
              options={[
                { value: "closed", label: "Хаалттай" },
                { value: "open", label: "Нээх" },
                { value: "tilt", label: "Хазайлгах" },
              ]}
              value={action}
              onChange={(v) => setAction(v as Action)}
            />
          </Field>

          {sashCount > 1 && (
            <Field label="Идэвхтэй далавч">
              <Segmented
                options={Array.from({ length: sashCount }).map((_, i) => ({
                  value: String(i),
                  label: String(i + 1),
                }))}
                value={String(active)}
                onChange={(v) => setActiveSash(Number(v))}
              />
            </Field>
          )}
        </div>
      </div>

      <p className="mt-4 text-xs text-muted">
        Багасгасан демо. Бүрэн санд рамын профиль, шилний багц, өнгө, хэмжээ
        оруулах боломжтой.
      </p>
    </div>
  );
}

function OpeningSymbol({
  x,
  y,
  w,
  h,
  action,
  hinge,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  action: Action;
  hinge: "left" | "right";
}) {
  const p = SASH_FRAME + 4;
  let points: string;

  if (action === "tilt") {
    // орой доод ирмэгийн төвд
    points = `${x + p},${y + p} ${x + w / 2},${y + h - p} ${x + w - p},${y + p}`;
  } else if (hinge === "left") {
    points = `${x + w - p},${y + p} ${x + p},${y + h / 2} ${x + w - p},${y + h - p}`;
  } else {
    points = `${x + p},${y + p} ${x + w - p},${y + h / 2} ${x + p},${y + h - p}`;
  }

  return (
    <polyline
      points={points}
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth={1.5}
      strokeDasharray="4 3"
      strokeLinejoin="round"
    />
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-xs uppercase tracking-wide text-muted">
        {label}
      </span>
      {children}
    </div>
  );
}

function Segmented({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-md border border-line p-1">
      {options.map((opt) => {
        const selected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(opt.value)}
            className={
              "rounded px-2.5 py-1 text-sm transition-colors " +
              (selected
                ? "bg-accent text-accent-ink"
                : "text-muted hover:text-ink")
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
