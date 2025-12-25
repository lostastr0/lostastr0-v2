// src/app/page.tsx

import LogoMarquee from "@/components/LogoMarquee";

export default function Page() {
  return (
    <div id="top" className="w-full">
      {/* HERO */}
      <section className="pt-16 sm:pt-20">
        <div className="mx-auto w-full max-w-[900px] px-2 sm:px-0 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Open for opportunities
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            I&apos;m Jaineel.
          </h1>

          {/* Simple + honest, like Carl's structure */}
          <p className="mx-auto mt-4 max-w-[64ch] text-sm sm:text-base text-zinc-300">
            Cyber security student — learning by building projects and improving as I go.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-black hover:bg-sky-400 transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* GRID WRAPPER (keeps SAME layout/sizes on desktop) */}
      <section id="projects" className="pt-10 sm:pt-12 pb-16">
        <div className="mx-auto w-full max-w-[900px] px-2 sm:px-0 space-y-6">
          {/* FEATURED — EXACT on desktop: 900w x 450h. Mobile: keeps 2:1 aspect */}
          <article
            className="
              relative
              w-full
              aspect-[2/1]
              lg:aspect-auto
              lg:w-[900px]
              lg:h-[450px]
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-gradient-to-br from-amber-900/30 via-black to-blue-900/30
              shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.65)]
            "
          >
            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
              <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
            </div>

            {/* header row */}
            <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-7">
              <div className="text-sm font-semibold text-white/90">Featured</div>
              <a
                href="#projects"
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10 transition"
              >
                Browse work
              </a>
            </div>

            {/* main content (no inner card / no box-in-box) */}
            <div className="relative z-10 px-6 sm:px-8 pt-8 sm:pt-10">
              <div className="text-[11px] tracking-[0.22em] text-white/40">HIGHLIGHT</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Portfolio v2
              </h2>
              <p className="mt-3 max-w-[60ch] text-sm sm:text-base text-zinc-300">
                A product-style portfolio — curated projects, clean layout, and subtle motion.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* bottom bar (part of the card, not a nested box) */}
            <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur px-6 sm:px-8 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white/90 truncate">
                    LostAstr0 Portfolio <span className="text-white/60">+</span>
                  </div>
                  <div className="text-xs text-zinc-400 truncate">
                    Updating as I ship — new sections, cleaner layout, better motion.
                  </div>
                </div>

                <a
                  href="#projects"
                  className="shrink-0 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
                >
                  View projects
                </a>
              </div>
            </div>
          </article>

          {/* BELOW GRID — desktop 35/65, mobile stacks (same “cards”, no squish) */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Spotlight (35%) */}
            <article
              className="
                lg:col-span-4
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                overflow-hidden
              "
            >
              <div className="p-6">
                <div className="text-sm font-semibold text-white/90">Spotlight</div>
                <p className="mt-1 text-xs text-zinc-400">
                  One standout project, updated as I ship.
                </p>
              </div>

              <div className="px-6 pb-6">
                <div className="h-[170px] rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/15 via-black to-indigo-500/10" />
              </div>
            </article>

            {/* Toolbox (65%) */}
            <article
              className="
                lg:col-span-8
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                overflow-hidden
              "
            >
              <div className="p-6">
                <div className="text-sm font-semibold text-white/90">Toolbox</div>
                <p className="mt-1 text-xs text-zinc-400">
                  Quick links and tools — what I&apos;m learning &amp; using.
                </p>
              </div>

              {/* Logo marquee lives directly in the card background (no inner box).
                  If you want to push rows down/up, do it inside LogoMarquee via padding. */}
              <div className="px-4 pb-6">
                <LogoMarquee />
              </div>
            </article>
          </div>

          {/* Optional next section placeholder */}
          <section id="about" className="pt-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm font-semibold text-white/90">About</div>
              <p className="mt-2 text-sm text-zinc-300">
                I&apos;m building skills in cyber security through hands-on projects, and documenting what I learn.
              </p>
            </div>
          </section>

          <section id="contact" className="pt-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="text-sm font-semibold text-white/90">Contact</div>
              <p className="mt-2 text-sm text-zinc-300">
                Add your links / email here.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
