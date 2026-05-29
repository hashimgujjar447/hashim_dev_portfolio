"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { StatusDot } from "@/components/ui/StatusDot";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [showDesign, setShowDesign] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={cn(
        "group rounded-lg border border-zinc-800 bg-zinc-900/50 transition-all duration-200",
        "hover:border-zinc-700 hover:bg-zinc-900",
        featured && "border-zinc-700/80 bg-zinc-900"
      )}
    >
      <div className="p-5">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-1.5 flex items-center gap-2">
              {featured && (
                <span className="rounded border border-blue-500/20 bg-blue-500/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-blue-400">
                  Featured
                </span>
              )}
              <StatusDot status={project.status} />
            </div>
            <h3 className="text-base font-semibold text-zinc-100">{project.title}</h3>
            <p className="text-xs text-zinc-500">{project.subtitle}</p>
          </div>

          {/* Links */}
          <div className="flex shrink-0 items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 text-zinc-600 transition hover:border-zinc-600 hover:text-zinc-300"
                title="GitHub"
              >
                <Github size={13} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 text-zinc-600 transition hover:border-zinc-600 hover:text-zinc-300"
                title="Live Demo"
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {/* Architecture tags */}
        {project.architectureTags?.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.architectureTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded border border-zinc-800 bg-zinc-950/60 px-1.5 py-0.5 font-mono text-[9px] text-zinc-500"
              >
                <ArrowRight size={8} />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Tech stack badges */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech.label} label={tech.label} color={tech.color} />
          ))}
        </div>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-4 grid grid-cols-3 gap-2">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-zinc-800 bg-zinc-950/40 p-2 text-center"
              >
                <p className="font-mono text-xs font-semibold text-zinc-200">{metric.value}</p>
                <p className="text-[10px] text-zinc-600">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* System Design toggle */}
        {project.systemDesign && (
          <button
            onClick={() => setShowDesign(!showDesign)}
            className={cn(
              "flex w-full items-center justify-between rounded-md border px-3 py-2 text-xs font-medium transition-colors",
              showDesign
                ? "border-blue-500/20 bg-blue-500/5 text-blue-400"
                : "border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300"
            )}
          >
            <span className="font-mono">{"// System Design"}</span>
            <motion.span animate={{ rotate: showDesign ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={13} />
            </motion.span>
          </button>
        )}
      </div>

      {/* System Design expandable */}
      <AnimatePresence>
        {showDesign && project.systemDesign && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800 bg-zinc-950/40 px-5 py-4">
              <p className="mb-3 font-mono text-[10px] text-zinc-600">{project.systemDesign.description}</p>
              <div className="flex flex-col items-start gap-0">
                {project.systemDesign.nodes.map((node, i) => (
                  <div key={node.id} className="flex flex-col items-start">
                    <div
                      className={cn(
                        "flex items-center gap-2 rounded border px-3 py-1.5 text-xs font-medium",
                        node.type === "input" && "border-blue-500/20 bg-blue-500/8 text-blue-400",
                        node.type === "service" && "border-purple-500/20 bg-purple-500/8 text-purple-400",
                        node.type === "database" && "border-orange-500/20 bg-orange-500/8 text-orange-400",
                        node.type === "event" && "border-yellow-500/20 bg-yellow-500/8 text-yellow-400",
                        node.type === "process" && "border-zinc-700 bg-zinc-900 text-zinc-300",
                        node.type === "output" && "border-emerald-500/20 bg-emerald-500/8 text-emerald-400"
                      )}
                    >
                      <span>{node.label}</span>
                      {node.sublabel && (
                        <span className="text-[10px] opacity-60">— {node.sublabel}</span>
                      )}
                    </div>
                    {i < project.systemDesign!.nodes.length - 1 && (
                      <div className="ml-4 flex items-center py-1 text-zinc-700">
                        <div className="h-4 w-0.5 bg-zinc-800" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
