"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import CursorDot from "@/components/CursorDot";
import CursorQuote from "@/components/CursorQuote";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Only widen layout on the Projects page
  const isProjects = pathname?.startsWith("/projects");

  return (
    <div className="min-h-dvh bg-black text-white overflow-x-hidden">
      {/* Cursor effects (desktop only internally handled) */}
      <CursorDot />
      <CursorQuote />

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden xl:block fixed left-6 top-6 bottom-6 w-[300px] z-40">
        <Sidebar />
      </aside>

      {/* MOBILE NAV */}
      <MobileNav open={open} setOpen={setOpen} />

      {/* MAIN CONTENT */}
      <main className="min-h-dvh px-4 sm:px-6 pt-[96px] xl:pt-0 xl:pl-[360px] xl:pr-6">
        <div
          className={[
            "mx-auto w-full",
            isProjects ? "max-w-[1120px]" : "max-w-[980px]",
          ].join(" ")}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
