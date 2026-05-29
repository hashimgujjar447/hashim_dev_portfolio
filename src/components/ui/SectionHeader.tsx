import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ label, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      <div className="mb-1.5 flex items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          {label}
        </span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-100">{title}</h2>
      {description && (
        <p className="mt-1 text-sm text-zinc-500">{description}</p>
      )}
    </div>
  );
}
