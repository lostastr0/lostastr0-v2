import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white" id="top">
      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-4 pt-16">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Open for opportunities
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            I&apos;m Jaineel.
            <br />
            <span className="text-white/55">
              Studying cyber security, moving toward computer science.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60">
            I build clean, calm interfaces with strong structure — learning
            through real projects, tight typography, and subtle motion.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-black hover:bg-blue-400">
              View projects
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 hover:bg-white/10">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED — Carl-style single card (no box-in-box-in-box) */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-6 pt-10">
        <div className="mx-auto w-full max-w-[900px]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            {/* Media (fixed height like your target) */}
            <div className="relative h-[450px]">
              {/* Background “image” placeholder */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,100,40,0.35),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(60,160,255,0.32),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(40,80,255,0.18),transparent_55%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />

              {/* inner “window” overlay (intentional frame like Carl) */}
              <div className="absolute left-8 right-8 top-10 bottom-20 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-[0_25px_80px_rgba(0,0,0,0.65)]">
                {/* window top bar */}
                <div className="flex items-center justify-between px-4 py-3 text-xs text-white/60">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-white/30" />
                    <span className="inline-block h-2 w-2 rounded-full bg-white/20" />
                    <span className="inline-block h-2 w-2 rounded-full bg-white/10" />
                  </div>
                  <span>Close</span>
                </div>

                {/* window content */}
                <div className="relative h-[calc(100%-44px)] overflow-hidden px-6 pb-6">
                  {/* blurred orb */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,80,255,0.35),rgba(0,0,0,0)_65%)] blur-xl" />

                  <div className="mt-3 text-3xl font-semibold leading-tight">
                    Gallery
                    <br />
                    Discover
                    <br />
                    Projects
                    <br />
                    Updates
                    <br />
                    Remix
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/[0.04] px-6 py-5">
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white/85">
                  LostAstr0 Portfolio +
                </div>
                <div className="mt-0.5 text-xs text-white/50">
                  A product-style portfolio — curated projects, clean motion, and
                  strong typography.
                </div>
              </div>

              <button className="shrink-0 rounded-full bg-blue-500 px-5 py-2 text-xs font-semibold text-black hover:bg-blue-400">
                View projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 2 — 2 cards like “Framer Award” + “Resources” */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-6 pt-4">
        <div className="mx-auto grid w-full max-w-[900px] gap-4 md:grid-cols-2">
          {/* Award */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-white/85">
              Framer Award
            </div>
            <div className="mt-1 text-sm text-white/55">
              (Placeholder) Highlight a milestone / cert / project.
            </div>

            {/* angled “image” */}
            <div className="relative mt-5 h-44">
              <div className="absolute bottom-0 left-6 h-48 w-64 origin-bottom-left rotate-[-18deg] rounded-2xl bg-gradient-to-br from-blue-500/80 via-blue-700/60 to-indigo-900/60 shadow-[0_25px_70px_rgba(0,0,0,0.55)]" />
              <div className="absolute bottom-6 left-14 h-40 w-56 origin-bottom-left rotate-[-18deg] rounded-2xl bg-white/10 backdrop-blur border border-white/10" />
            </div>
          </div>

          {/* Resources (icon grid) */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="text-sm font-semibold text-white/85">Resources</div>
            <div className="mt-1 text-sm text-white/55">
              Browse the tools I&apos;m learning & using.
            </div>

            {/* icon grid (no dependencies, Carl-like ghost circles) */}
            <div className="mt-5 grid grid-cols-6 gap-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full border border-white/10 bg-white/5"
                />
              ))}
            </div>

            {/* If you want your LogoMarquee here instead, swap the grid above with this:
                <div className="mt-5">
                  <LogoMarquee />
                </div>
            */}
          </div>
        </div>
      </section>

      {/* ROW 3 — Wide “Templates” style card */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 pt-4">
        <div className="mx-auto w-full max-w-[900px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="text-sm font-semibold text-white/85">
            Project Gallery
          </div>
          <div className="mt-1 text-sm text-white/55">
            A simple place to show what I&apos;m building (swap in real project
            cards later).
          </div>

          {/* angled “collage” */}
          <div className="relative mt-6 h-52">
            <div className="absolute right-2 top-3 h-44 w-36 rotate-[14deg] rounded-2xl bg-white/10 border border-white/10" />
            <div className="absolute right-24 top-10 h-44 w-36 rotate-[-8deg] rounded-2xl bg-gradient-to-br from-rose-500/50 via-orange-500/30 to-zinc-900/40 border border-white/10" />
            <div className="absolute right-44 top-6 h-44 w-36 rotate-[6deg] rounded-2xl bg-gradient-to-br from-emerald-500/25 via-blue-500/25 to-zinc-900/45 border border-white/10" />
          </div>
        </div>
      </section>
    </main>
  );
}
