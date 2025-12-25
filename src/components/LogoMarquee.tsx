"use client";

import { motion } from "framer-motion";

// Stable icons only
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiFramer,
  SiFigma,
  SiVercel,
  SiGithub,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiNpm,
  SiGooglechrome,
  SiFirefoxbrowser,
} from "react-icons/si";

import {
  FaWindows,
  FaLinux,
  FaEdge,
  FaCode,
} from "react-icons/fa";

/* =========================
   Inline SVG Icons (SAFE)
   ========================= */

function ArcIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
    >
      <path
        d="M128 20C72.8 20 28 64.8 28 120c0 36.4 19.8 68.1 49.1 85.2l24.3-42.1c-10.9-7.2-18-19.5-18-33.6 0-22.1 17.9-40 40-40h9.3l-23.6 40.9h47.9l47.8-82.9C186.7 31.5 158.5 20 128 20Z"
        fill="#ffffff"
      />
    </svg>
  );
}

function ArchLinuxIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
    >
      <path
        d="M128 12c-9.8 24-18.7 41.9-30.6 59.9 7.3 8.1 16.3 16.6 26.9 25.2-14.6-5.9-26.1-11.7-36.1-17.6-15.4 21.8-36.7 42.5-76.2 70.5 30.7-11.2 54.6-18.6 75.4-22.7 10.1 12.5 18.6 25.6 26.7 39.6-2.4-15.8-4.6-28.9-5.2-40.5 15.4-2.2 29.4-2.2 42.8 0-.6 11.6-2.8 24.7-5.2 40.5 8.1-14 16.6-27.1 26.7-39.6 20.8 4.1 44.7 11.5 75.4 22.7-39.5-28-60.8-48.7-76.2-70.5-10 5.9-21.5 11.7-36.1 17.6 10.6-8.6 19.6-17.1 26.9-25.2C146.7 53.9 137.8 36 128 12Z"
        fill="#1793D1"
      />
    </svg>
  );
}

/* ========================= */

type Logo = {
  Icon: React.ComponentType<{ size?: number; color?: string }> | ((p: { size?: number }) => JSX.Element);
  color?: string;
  label: string;
};

const row1: Logo[] = [
  { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiPython, color: "#3776AB", label: "Python" },
  { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind CSS" },
  { Icon: SiFramer, color: "#ffffff", label: "Framer Motion" },
  { Icon: SiVercel, color: "#ffffff", label: "Vercel" },
  { Icon: SiGithub, color: "#ffffff", label: "GitHub" },
  { Icon: SiGit, color: "#F05032", label: "Git" },
  { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
  { Icon: SiNpm, color: "#CB3837", label: "npm" },
];

const row2: Logo[] = [
  { Icon: FaWindows, color: "#0078D4", label: "Windows" },
  { Icon: ArchLinuxIcon, label: "Arch Linux" },
  { Icon: ArcIcon, label: "Arc Browser" },
  { Icon: SiGooglechrome, color: "#4285F4", label: "Chrome" },
  { Icon: SiFirefoxbrowser, color: "#FF7139", label: "Firefox" },
  { Icon: FaEdge, color: "#0EA5E9", label: "Microsoft Edge" },
  { Icon: FaCode, color: "#22A7F2", label: "Code Editor" },
];

function IconTrack({
  items,
  direction,
  duration,
  iconSize,
  baseOpacity,
  hoverOpacity,
}: {
  items: Logo[];
  direction: "left" | "right";
  duration: number;
  iconSize: number;
  baseOpacity: number;
  hoverOpacity: number;
}) {
  return (
    <motion.div
      className="flex w-max items-center gap-8"
      animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration }}
    >
      {[...items, ...items].map(({ Icon, color, label }, i) => (
        <div
          key={`${label}-${direction}-${i}`}
          title={label}
          className="flex h-10 w-10 items-center justify-center transition"
          style={{ opacity: baseOpacity }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = String(hoverOpacity))}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = String(baseOpacity))}
        >
          {"color" in (Icon as any) ? (
            <Icon size={iconSize} />
          ) : (
            <Icon size={iconSize} color={color} />
          )}
        </div>
      ))}
    </motion.div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5 px-4 py-6">
      <IconTrack
        items={row1}
        direction="left"
        duration={28}
        iconSize={24}
        baseOpacity={0.55}
        hoverOpacity={1}
      />

      <div className="mt-6">
        <IconTrack
          items={row2}
          direction="right"
          duration={36}
          iconSize={22}
          baseOpacity={0.45}
          hoverOpacity={0.95}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
    </div>
  );
}
