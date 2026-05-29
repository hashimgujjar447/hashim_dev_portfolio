"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  Mail,
  Zap,
  Server,
  Layers,
  FolderKanban,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DASHBOARD_METRICS, CONTACT_LINKS } from "@/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  FolderKanban: <FolderKanban size={14} />,
  Zap: <Zap size={14} />,
  Layers: <Layers size={14} />,
  Server: <Server size={14} />,
  Code2: <Code2 size={14} />,
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function OverviewSection() {
  return (
    <section id="overview" className="min-h-screen py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {/* Status bar */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-mono text-[10px] text-emerald-400">
              Available for opportunities
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1">
            <span className="font-mono text-[10px] text-zinc-500">
              sys.status = operational
            </span>
          </div>
        </motion.div>

        {/* Hero text */}
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Muhammad Hashim
          </h1>
          <p className="mt-2 text-lg font-medium text-zinc-400">
            Full-Stack Engineer{" "}
            <span className="font-mono text-sm text-zinc-600">
              (MERN + Django)
            </span>
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            Building scalable backend systems and real-time web applications.
            Focused on architecture, performance, and engineering fundamentals.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
          <a
            href="/Muhammad_hashim_full_stack_dev.pdf"
            download
            className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            <Download size={14} />
            Resume
          </a>
          <a
            href="https://github.com/hashimgujjar447"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-hashim-45b54b326/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="mailto:hashimgujjar4447@gmail.com"
            className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-zinc-100"
          >
            <Mail size={14} />
            Contact
          </a>
        </motion.div>

        {/* Metric cards */}
        <motion.div variants={itemVariants}>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            // system.metrics
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {DASHBOARD_METRICS.map((metric) => (
              <div
                key={metric.label}
                className={cn(
                  "group rounded-lg border border-zinc-800 bg-zinc-900/60 p-4",
                  "transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900",
                )}
              >
                <div className="mb-2 text-zinc-600 group-hover:text-blue-400 transition-colors">
                  {ICON_MAP[metric.icon]}
                </div>
                <p className="font-mono text-sm font-semibold text-zinc-200">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-xs text-zinc-600">{metric.label}</p>
                {metric.description && (
                  <p className="mt-1 text-[10px] text-zinc-700">
                    {metric.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick info grid */}
        <motion.div variants={itemVariants}>
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Current stack */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                Primary Stack
              </p>
              <div className="space-y-2">
                {[
                  { layer: "Frontend", tech: "React, Next.js, Redux Toolkit" },
                  { layer: "Backend", tech: "Django DRF, Node.js, Express" },
                  { layer: "Real-Time", tech: "WebSockets, Django Channels" },
                  { layer: "Database", tech: "PostgreSQL, MongoDB, Redis" },
                ].map(({ layer, tech }) => (
                  <div key={layer} className="flex items-baseline gap-3">
                    <span className="w-20 shrink-0 font-mono text-[10px] text-zinc-700">
                      {layer}
                    </span>
                    <span className="text-xs text-zinc-400">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus areas */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                Engineering Focus
              </p>
              <div className="space-y-2">
                {[
                  "Scalable backend architectures",
                  "Real-time systems & WebSockets",
                  "Role-based access control",
                  "SaaS multi-tenant patterns",
                  "API design & optimization",
                ].map((focus) => (
                  <div key={focus} className="flex items-center gap-2">
                    <div className="h-0.5 w-3 rounded bg-blue-500/60" />
                    <span className="text-xs text-zinc-400">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
