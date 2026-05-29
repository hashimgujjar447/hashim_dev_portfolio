"use client";

import { motion } from "framer-motion";
import { cn, getFocusStatusColor } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EXPERIENCE_ITEMS, CURRENT_FOCUS } from "@/data";

const TYPE_STYLES = {
  work: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  milestone: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  project: "border-purple-500/20 bg-purple-500/10 text-purple-400",
  education: "border-amber-500/20 bg-amber-500/10 text-amber-400",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <SectionHeader
        label="// experience"
        title="Engineering Journey"
        description="Milestones, skills built, and systems shipped."
      />

      <div className="grid gap-8 ">
        {/* Timeline */}
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            Timeline
          </p>
          <div className="relative space-y-0 pl-5">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 h-full w-px bg-zinc-800" />

            {EXPERIENCE_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="relative pb-8 last:pb-0"
              >
                {/* Dot */}
                <div
                  className={cn(
                    "absolute -left-[17px] top-2 h-2.5 w-2.5 rounded-full border-2 border-zinc-950",
                    item.type === "milestone" && "bg-emerald-400",
                    item.type === "work" && "bg-blue-400",
                    item.type === "project" && "bg-purple-400",
                    item.type === "education" && "bg-amber-400",
                  )}
                />

                {/* Content */}
                <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200">
                        {item.title}
                      </h4>
                      {item.company && (
                        <p className="text-xs text-zinc-500">{item.company}</p>
                      )}
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <span className="font-mono text-[10px] text-zinc-600">
                        {item.period}
                      </span>
                      <span
                        className={cn(
                          "rounded border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider",
                          TYPE_STYLES[item.type],
                        )}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <p className="mb-3 text-xs leading-relaxed text-zinc-500">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <ul className="mb-3 space-y-1">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-baseline gap-2 text-xs text-zinc-400"
                        >
                          <span className="shrink-0 text-zinc-700">›</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.technologies && (
                    <div className="flex flex-wrap gap-1">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-zinc-800 bg-zinc-950/60 px-1.5 py-0.5 font-mono text-[9px] text-zinc-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-zinc-700">
            Currently Building
          </p>
          <div className="space-y-3">
            {CURRENT_FOCUS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 transition-colors hover:border-zinc-700"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-sm font-medium text-zinc-200">{item.title}</h4>
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider",
                      getFocusStatusColor(item.status)
                    )}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="mb-3 text-xs text-zinc-500">{item.description}</p>

           
                {item.progress !== undefined && (
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-mono text-[9px] text-zinc-700">progress</span>
                      <span className="font-mono text-[9px] text-zinc-600">{item.progress}%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                        className={cn(
                          "h-full rounded-full",
                          item.status === "active" && "bg-emerald-500",
                          item.status === "learning" && "bg-blue-500",
                          item.status === "planning" && "bg-amber-500"
                        )}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
