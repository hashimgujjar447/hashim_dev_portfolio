"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Network,
  Layers,
  Briefcase,
  Mail,
  Terminal,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data";
import type { NavItem } from "@/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={15} />,
  FolderKanban: <FolderKanban size={15} />,
  Network: <Network size={15} />,
  Layers: <Layers size={15} />,
  Briefcase: <Briefcase size={15} />,
  Mail: <Mail size={15} />,
};

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  mobileOpen: boolean;
  onMobileToggle: () => void;
}

function NavItemButton({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-150",
        isActive
          ? "bg-zinc-800 text-zinc-100"
          : "text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300",
      )}
    >
      {isActive && (
        <motion.div
          layoutId="active-nav"
          className="absolute left-0 top-0 h-full w-0.5 rounded-r bg-blue-500"
          transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
        />
      )}
      <span
        className={cn(
          "transition-colors",
          isActive
            ? "text-blue-400"
            : "text-zinc-600 group-hover:text-zinc-400",
        )}
      >
        {ICON_MAP[item.icon]}
      </span>
      <span className="font-medium">{item.label}</span>
    </button>
  );
}

export function Sidebar({
  activeSection,
  onNavigate,
  mobileOpen,
  onMobileToggle,
}: SidebarProps) {
  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={onMobileToggle}
        className="fixed left-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950 text-zinc-400 transition hover:text-zinc-200 lg:hidden"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Mobile overlay — plain div, click to close */}
      {mobileOpen && (
        <div
          onClick={onMobileToggle}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen w-56 flex-col border-r border-zinc-800/80 bg-zinc-950",
          "transition-transform duration-200 ease-in-out",
          "max-lg:-translate-x-full",
          mobileOpen && "max-lg:translate-x-0",
        )}
      >
        {/* Logo/Brand */}
        <div className="flex h-14 items-center gap-2.5 border-b border-zinc-800/80 px-4">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/20 ring-1 ring-blue-500/30">
            <Terminal size={13} className="text-blue-400" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-zinc-200">
              Muhammad Hashim
            </p>
            <p className="truncate font-mono text-[9px] text-zinc-600">
              backend.engineer
            </p>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="mb-2 px-3 font-mono text-[9px] uppercase tracking-widest text-zinc-700">
            Navigation
          </p>
          <div className="space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <NavItemButton
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={() => {
                  onNavigate(item.id);
                  if (mobileOpen) onMobileToggle();
                }}
              />
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-zinc-800/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-mono text-[10px] text-zinc-600">
              Available for work
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
