// src/data/projects.ts

export type ProjectStatus = "In progress" | "Ongoing" | "Planned";

export type Project = {
  slug: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  tags: string[];
  links?: {
    label: string;
    href: string;
  }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "portfolio-v2",
    title: "Portfolio v2",
    status: "In progress",
    summary: "The site you’re looking at — layout, motion, and structure.",
    description:
      "This is my personal portfolio build. I’m focusing on a clean product-style layout, responsive behavior, and subtle motion. I’m iterating as I learn.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: [
      { label: "Home", href: "/" },
      // Add GitHub later when ready:
      // { label: "GitHub", href: "https://github.com/..." },
    ],
  },
  {
    slug: "cyber-notes",
    title: "Cyber Notes",
    status: "Planned",
    summary: "Writeups, labs, and things I don’t want to forget.",
    description:
      "A place to keep short writeups and notes from what I’m learning — tools, concepts, and lab outcomes. The goal is clarity and consistency.",
    tags: ["Notes", "Learning"],
  },
  {
    slug: "network-lab",
    title: "Network Lab",
    status: "Planned",
    summary: "Small lab exercises + documentation as I build fundamentals.",
    description:
      "Hands-on networking labs: subnetting, basic routing, packet captures, and documenting what I’m learning as I go.",
    tags: ["Networking", "Security"],
  },
  {
    slug: "linux-setup",
    title: "Linux Setup",
    status: "Ongoing",
    summary: "Dotfiles + workflow improvements (tools, configs, etc).",
    description:
      "My Linux workflow: terminal setup, configs, small tweaks, and anything that helps me study and build faster.",
    tags: ["Linux", "Workflow"],
  },
  {
    slug: "ctf-practice",
    title: "CTF Practice",
    status: "Ongoing",
    summary: "Tracking progress through small challenges + lessons learned.",
    description:
      "CTF practice notes: what I tried, what worked, what didn’t, and small lessons learned. The aim is improvement over time.",
    tags: ["CTF", "Security"],
  },
  {
    slug: "toolbox-stack",
    title: "Toolbox / Stack",
    status: "Ongoing",
    summary: "Tools I use while learning — languages, platforms, utilities.",
    description:
      "A quick reference to the tools and platforms I’m learning and using — plus links to docs/resources I keep returning to.",
    tags: ["Stack", "Tools"],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}
