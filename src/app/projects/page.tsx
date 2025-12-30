// src/app/projects/page.tsx

import Link from "next/link";
import { PROJECTS } from "@/data/projects";

function StatusPill({ status }: { status: string }) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium";

  const style =
    status === "In progress"
      ? "border-sky-500/20 bg-sky-500/10 text-sky-200"
      : status === "Ongoing"
      ? "border-amber-500/20 bg-amber-500/10 text-amber-200"
      : "border-white/10 bg-white/5 text-zinc-200";

  return <span className={`${base} ${style}`}>{status}</span>;
}

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <section className="pt-10 sm:pt-12 pb-16">
        <div className="mx-auto w-full max-w-[980px] px-2 sm:px-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Projects
              </h1>
              <p className="mt-2 max-w-[70ch] text-sm sm:text-base text-zinc-300">
                Stuff I’m building while studying cyber security — small projects, notes,
                and experiments.
              </p>
            </div>

            <a
              href="/#contact"
              className="shrink-0 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </div>

          {/* Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="
                  group
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  overflow-hidden
                  shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                  hover:bg-white/[0.05]
                  transition
                "
              >
                {/* Top gradient area (no “box-in-box”, just a visual header) */}
                <div className="relative h-[130px] bg-gradient-to-br from-amber-900/25 via-black to-blue-900/25">
                  <div className="absolute left-4 top-4">
                    <StatusPill status={p.status} />
                  </div>

                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
                    <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-sm font-semibold text-white/90">{p.title}</h2>
                    <span className="text-zinc-500 group-hover:text-zinc-300 transition">
                      ↗
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-zinc-400 line-clamp-2">
                    {p.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-200">
                        +{p.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to home */}
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
