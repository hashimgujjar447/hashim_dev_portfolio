import { cn, getTechBadgeColor } from "@/lib/utils";

interface BadgeProps {
  label: string;
  color?: "default" | "blue" | "green" | "orange" | "purple" | "red" | "yellow";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({ label, color, size = "sm", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border font-mono font-medium",
        size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-1 text-xs",
        getTechBadgeColor(color),
        className
      )}
    >
      {label}
    </span>
  );
}
