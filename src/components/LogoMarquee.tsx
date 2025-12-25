"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";

import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaChrome,
  FaFirefoxBrowser,
  FaWindows,
  FaLinux,
  FaNpm,
  FaCompass, // Arc Browser substitute
} from "react-icons/fa6";

import {
  SiTypescript,
  SiFramer,
  SiArchlinux, // REAL Arch Linux icon
} from "react-icons/si";

type Logo = {
  label: string;
  Icon: ComponentType<{ className?: string }>;
  className: string;
};

const row1: Logo[] = [
  { label: "Python", Icon: FaPython, className: "text-blue-300" },
  { label: "Node.js", Icon: FaNodeJs, className: "text-emerald-400" },
  { label: "GitHub", Icon: FaGithub, className: "text-white/85" },
  { label: "Framer", Icon: SiFramer, className: "text-white/85" },
  { label: "React", Icon: FaReact, className: "text-sky-400" },
  { label: "TypeScript", Icon: SiTypescript, className: "text-sky-500" },
];

const row2: Logo[] = [
  { label: "npm", Icon: FaNpm, className: "text-red-400" },
  { label: "Chrome", Icon: FaChrome, className: "text-emerald-300" },
  { label: "Firefox", Icon: FaFirefoxBrowser, className: "text-orange-300" },
  { label: "Windows", Icon: FaWindows, className: "text-sky-400" },
  { label: "Linux", Icon: FaLinux, className: "text-yellow-200" },
  { label: "Arch Linux", Icon: SiArchlinux, className: "text-sky-300" },
];

function Track({
  items,
  duration,
  reverse,
}: {
  items: Logo[];
  duration: number;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex w-max items-center gap-10 pr-10"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
      >
        {doubled.map((it, idx) => (
          <div
            key={`${it.label}-${idx}`}
            className="flex items-center justify-center"
            title={it.label}
            aria-label={it.label}
          >
            <it.Icon className={`h-11 w-11 ${it.className}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="relative">
      {/* balanced vertical spacing inside Toolbox */}
      <div className="w-full py-4 pt-6">
        <div className="w-full translate-y-[8px] space-y-4">
          <Track items={row1} duration={22} />
          <Track items={row2} duration={22} reverse />
        </div>
      </div>
    </div>
  );
}
