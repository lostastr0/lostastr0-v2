// src/components/Shell.tsx
"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import CursorDot from "@/components/CursorDot";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-black text-white overflow-x-hidden">
      <CursorDot />

      {/* Desktop sidebar only on XL+ */}
      <aside className="hidden xl:block fixed left-6 top-6 bottom-6 w-[260px] z-40">
        <Sidebar />
      </aside>

      {/* Mobile/Half-screen nav (< xl) */}
      <MobileNav open={open} setOpen={setOpen} />

      {/* Main */}
      <main className="min-h-dvh px-4 sm:px-6">
        {/* 
          Changes:
          - Keep content centered on <xl (mobile + half screen)
          - On xl+, shift content right for sidebar using padding on MAIN, not on inner container
          - Use a wider max width for the "Carl" feel, but clamp so it never gets silly wide
        */}
        <div className="mx-auto w-full pt-[96px] xl:pt-0 xl:pl-[320px]">
          <div className="mx-auto w-full max-w-[1200px]">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
