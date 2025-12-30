// src/app/projects/[slug]/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full">
      <section className="pt-16 pb-20">
        <div className="mx-auto w-full max-w-[980px] px-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h1 className="text-2xl font-semibold text-white">Project not found</h1>
            <p className="mt-2 text-sm text-zinc-300">
              That project slug doesn’t exist (yet).
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-black hover:bg-sky-400 transition"
              >
                Back to projects
              </Link>
              <Link
                href="/"
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
