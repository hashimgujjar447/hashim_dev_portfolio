"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Zap, Database, Settings } from "lucide-react";
import { cn, getLevelColor, getLevelLabel } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TECH_CATEGORIES } from "@/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={15} />,
  Server: <Server size={15} />,
  Zap: <Zap size={15} />,
  Database: <Database size={15} />,
  Settings: <Settings size={15} />,
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-12">
      <SectionHeader
        label="// tech-stack"
        title="Technologies"
        description="Tools and frameworks used to build scalable systems."
      />

      {/* Legend */}
      <div className="mb-5 flex items-center gap-4">
        {[
          { level: "expert", label: "Expert" },
          { level: "proficient", label: "Proficient" },
          { level: "learning", label: "Learning" },
        ].map(({ level, label }) => (
          <div key={level} className="flex items-center gap-1.5">
            <div className={cn("h-2 w-2 rounded-full", getLevelColor(level))} />
            <span className="font-mono text-[10px] text-zinc-600">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {TECH_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: catIdx * 0.06 }}
            className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5"
          >
            {/* Category header */}
            <div className="mb-4 flex items-center gap-2">
              <div className="text-zinc-600">{ICON_MAP[category.icon]}</div>
              <h3 className="text-sm font-semibold text-zinc-200">{category.label}</h3>
            </div>

            {/* Tech list */}
            <div className="space-y-2.5">
              {category.technologies.map((tech, techIdx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: catIdx * 0.04 + techIdx * 0.04 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={cn("h-1.5 w-1.5 shrink-0 rounded-full", getLevelColor(tech.level))}
                    />
                    <span className="text-xs text-zinc-400">{tech.name}</span>
                  </div>
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-wider",
                      tech.level === "expert" && "text-emerald-600",
                      tech.level === "proficient" && "text-blue-600",
                      tech.level === "learning" && "text-amber-600"
                    )}
                  >
                    {getLevelLabel(tech.level)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
