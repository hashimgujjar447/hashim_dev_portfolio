"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CONTACT_LINKS } from "@/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Mail: <Mail size={16} />,
  Github: <Github size={16} />,
  Linkedin: <Linkedin size={16} />,
  FileText: <FileText size={16} />,
};

const LINK_STYLES: Record<string, string> = {
  email: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40 hover:bg-blue-500/10",
  github: "border-zinc-700 bg-zinc-900/50 hover:border-zinc-600 hover:bg-zinc-900",
  linkedin: "border-blue-600/20 bg-blue-600/5 hover:border-blue-600/40 hover:bg-blue-600/10",
  resume: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40 hover:bg-emerald-500/10",
};

export function ContactSection() {
  return (
    <section id="contact" className="py-12">
      <SectionHeader
        label="// contact"
        title="Get In Touch"
        description="Open to backend engineering roles, full-stack projects, and collaborative opportunities."
      />

      <div className="max-w-lg space-y-3">
        {CONTACT_LINKS.map((link, i) => (
          <motion.a
            key={link.type}
            href={link.href}
            target={link.type !== "email" ? "_blank" : undefined}
            rel={link.type !== "email" ? "noopener noreferrer" : undefined}
            download={link.type === "resume"}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            className={cn(
              "flex items-center gap-4 rounded-lg border p-4 transition-all duration-200",
              LINK_STYLES[link.type]
            )}
          >
            <div className="text-zinc-500">{ICON_MAP[link.icon]}</div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-zinc-200">{link.label}</p>
              <p className="font-mono text-xs text-zinc-500">{link.value}</p>
            </div>
            <ExternalLink size={13} className="shrink-0 text-zinc-700" />
          </motion.a>
        ))}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 border-t border-zinc-800 pt-6"
      >
        <p className="font-mono text-xs text-zinc-700">
          {`// Built with Next.js, Tailwind CSS, Framer Motion — Muhammad Hashim © ${new Date().getFullYear()}`}
        </p>
      </motion.div>
    </section>
  );
}
