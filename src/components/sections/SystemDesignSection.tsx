"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";

type NodeType = "input" | "process" | "database" | "output" | "service" | "event";

interface FlowStep {
  label: string;
  sublabel: string;
  type: NodeType;
}

interface ArchCard {
  title: string;
  description: string;
  flow: FlowStep[];
}

const NODE_STYLES: Record<NodeType, string> = {
  input: "border-blue-500/30 bg-blue-500/8 text-blue-300",
  service: "border-purple-500/30 bg-purple-500/8 text-purple-300",
  database: "border-orange-500/30 bg-orange-500/8 text-orange-300",
  event: "border-yellow-500/30 bg-yellow-500/8 text-yellow-300",
  process: "border-zinc-700 bg-zinc-900/80 text-zinc-300",
  output: "border-emerald-500/30 bg-emerald-500/8 text-emerald-300",
};

const ARCHITECTURES: ArchCard[] = [
  {
    title: "WorkflowHub Real-Time Flow",
    description: "Complete request lifecycle from user action to live UI update",
    flow: [
      { label: "User Action", sublabel: "UI interaction (drag, comment, update)", type: "input" },
      { label: "REST API Request", sublabel: "DRF ViewSet → Serializer → Validation", type: "service" },
      { label: "PostgreSQL Write", sublabel: "Transactional save with signals", type: "database" },
      { label: "Django Signal", sublabel: "post_save → channel layer dispatch", type: "event" },
      { label: "WebSocket Event", sublabel: "Django Channels → group_send", type: "service" },
      { label: "Redux State Update", sublabel: "RTK slice → optimistic update", type: "process" },
      { label: "UI Re-render", sublabel: "React component reflects live state", type: "output" },
    ],
  },
  {
    title: "RBAC Permission System",
    description: "5-tier role-based access control with resource-level permissions",
    flow: [
      { label: "Request + JWT", sublabel: "User identity + token claims", type: "input" },
      { label: "Permission Layer", sublabel: "DRF IsAuthenticated + custom", type: "service" },
      { label: "Role Resolver", sublabel: "Org → Workspace → Project scope", type: "process" },
      { label: "Resource Check", sublabel: "Object-level permission gate", type: "database" },
      { label: "Access Decision", sublabel: "Allow / Deny + audit log", type: "output" },
    ],
  },
  {
    title: "LMS Data Hierarchy",
    description: "Nested content model with progress and certification tracking",
    flow: [
      { label: "Organization", sublabel: "Top-level multi-tenant entity", type: "input" },
      { label: "Course", sublabel: "Content container + metadata", type: "process" },
      { label: "Module → Lesson", sublabel: "Nested content units", type: "process" },
      { label: "Enrollment Record", sublabel: "User × Course join table", type: "database" },
      { label: "Progress Tracking", sublabel: "Per-lesson completion state", type: "event" },
      { label: "Certification", sublabel: "Completion trigger → PDF gen", type: "output" },
    ],
  },
  {
    title: "WebSocket Architecture",
    description: "Django Channels + Redis layer for scalable real-time messaging",
    flow: [
      { label: "Client Connection", sublabel: "WS handshake + auth token", type: "input" },
      { label: "Channel Consumer", sublabel: "Django async WebSocket consumer", type: "service" },
      { label: "Redis Channel Layer", sublabel: "Pub/Sub message broker", type: "database" },
      { label: "Group Broadcast", sublabel: "Send to all room subscribers", type: "event" },
      { label: "Client Receives", sublabel: "Instant UI update < 50ms", type: "output" },
    ],
  },
];

function FlowCard({ arch, index }: { arch: ArchCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5"
    >
      <h3 className="mb-1 text-sm font-semibold text-zinc-200">{arch.title}</h3>
      <p className="mb-4 text-xs text-zinc-600">{arch.description}</p>

      <div className="flex flex-col gap-0">
        {arch.flow.map((step, i) => (
          <div key={i} className="flex flex-col">
            <div
              className={cn(
                "flex items-center justify-between rounded border px-3 py-2",
                NODE_STYLES[step.type]
              )}
            >
              <span className="text-xs font-medium">{step.label}</span>
              <span className="ml-3 text-right font-mono text-[9px] opacity-60">{step.sublabel}</span>
            </div>
            {i < arch.flow.length - 1 && (
              <div className="flex items-center py-0.5 pl-4">
                <div className="h-3 w-px bg-zinc-800" />
                <div className="ml-0.5 font-mono text-[9px] text-zinc-700">↓</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function SystemDesignSection() {
  return (
    <section id="system-design" className="py-12">
      <SectionHeader
        label="// architecture"
        title="System Design"
        description="Visual representation of backend architectures and engineering patterns."
      />

      {/* Legend */}
      <div className="mb-6 flex flex-wrap gap-3">
        {(Object.entries(NODE_STYLES) as [NodeType, string][]).map(([type, style]) => (
          <div
            key={type}
            className={cn(
              "rounded border px-2 py-0.5 font-mono text-[9px] capitalize",
              style
            )}
          >
            {type}
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {ARCHITECTURES.map((arch, i) => (
          <FlowCard key={arch.title} arch={arch} index={i} />
        ))}
      </div>
    </section>
  );
}
