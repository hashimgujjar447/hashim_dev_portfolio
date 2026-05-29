"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutDashboard, FolderKanban, Network, Layers, Briefcase, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={14} />,
  FolderKanban: <FolderKanban size={14} />,
  Network: <Network size={14} />,
  Layers: <Layers size={14} />,
  Briefcase: <Briefcase size={14} />,
  Mail: <Mail size={14} />,
};

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export function CommandPalette({ isOpen, onClose, onNavigate }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  const filtered = NAV_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-md overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-900 shadow-2xl"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3">
                <Search size={15} className="shrink-0 text-zinc-500" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Navigate to..."
                  className="flex-1 bg-transparent text-sm text-zinc-200 placeholder-zinc-600 outline-none"
                />
                <button onClick={onClose} className="text-zinc-600 hover:text-zinc-400">
                  <X size={14} />
                </button>
              </div>

              {/* Results */}
              <div className="py-2">
                <p className="px-4 py-1 font-mono text-[9px] uppercase tracking-widest text-zinc-700">
                  Sections
                </p>
                {filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-2.5 text-sm text-zinc-400",
                      "transition-colors hover:bg-zinc-800 hover:text-zinc-200"
                    )}
                  >
                    <span className="text-zinc-600">{ICON_MAP[item.icon]}</span>
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Footer hint */}
              <div className="border-t border-zinc-800 px-4 py-2.5">
                <div className="flex items-center gap-4 font-mono text-[10px] text-zinc-700">
                  <span><kbd className="mr-1 rounded bg-zinc-800 px-1 py-0.5 text-zinc-500">↵</kbd> select</span>
                  <span><kbd className="mr-1 rounded bg-zinc-800 px-1 py-0.5 text-zinc-500">esc</kbd> close</span>
                  <span className="ml-auto">⌘K to open</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
