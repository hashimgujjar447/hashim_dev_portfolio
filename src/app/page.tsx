"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { CommandPalette } from "@/components/layout/CommandPalette";
import {
  OverviewSection,
  ProjectsSection,
  SystemDesignSection,
  TechStackSection,
  ExperienceSection,
  ContactSection,
} from "@/components/sections";
import { useActiveSection, useCommandPalette, useMobileMenu } from "@/hooks";
import { NAV_ITEMS } from "@/data";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function HomePage() {
  const { activeSection, scrollToSection } = useActiveSection(SECTION_IDS);
  const { isOpen: cmdOpen, close: closeCmd, toggle: toggleCmd } = useCommandPalette();
  const { isOpen: mobileOpen, toggle: toggleMobile } = useMobileMenu();

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        mobileOpen={mobileOpen}
        onMobileToggle={toggleMobile}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={cmdOpen}
        onClose={closeCmd}
        onNavigate={scrollToSection}
      />

      {/* Main content area */}
      <main className="lg:ml-56">
        {/* Top bar */}
        <div className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-zinc-800/80 bg-zinc-950/90 px-6 backdrop-blur-sm">
          <div className="flex items-center gap-2 pl-8 lg:pl-0">
            <span className="font-mono text-xs text-zinc-600">
              /{activeSection}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleCmd}
              className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 transition hover:border-zinc-700"
            >
              <span className="font-mono text-[10px] text-zinc-600">⌘K</span>
              <span className="hidden text-xs text-zinc-600 sm:inline">Quick nav</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-0">
          <OverviewSection />
          <div className="border-t border-zinc-800/50" />
          <ProjectsSection />
          <div className="border-t border-zinc-800/50" />
          <SystemDesignSection />
          <div className="border-t border-zinc-800/50" />
          <TechStackSection />
          <div className="border-t border-zinc-800/50" />
          <ExperienceSection />
          <div className="border-t border-zinc-800/50" />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
