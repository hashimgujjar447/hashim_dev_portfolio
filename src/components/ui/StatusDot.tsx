import { cn, getStatusColor } from "@/lib/utils";

interface StatusDotProps {
  status: "live" | "in-progress" | "archived";
  showLabel?: boolean;
  className?: string;
}

const STATUS_LABELS = {
  live: "Live",
  "in-progress": "In Progress",
  archived: "Archived",
};

export function StatusDot({ status, showLabel = true, className }: StatusDotProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
        getStatusColor(status),
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "live" && "animate-pulse bg-emerald-400",
          status === "in-progress" && "bg-amber-400",
          status === "archived" && "bg-zinc-400"
        )}
      />
      {showLabel && STATUS_LABELS[status]}
    </span>
  );
}
