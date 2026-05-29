import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function getStatusColor(status: string): string {
  switch (status) {
    case "live":
      return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    case "in-progress":
      return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    case "archived":
      return "text-zinc-400 bg-zinc-400/10 border-zinc-400/20";
    default:
      return "text-zinc-400 bg-zinc-400/10 border-zinc-400/20";
  }
}

export function getTechBadgeColor(color?: string): string {
  switch (color) {
    case "blue":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "green":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "orange":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20";
    case "purple":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    case "red":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    case "yellow":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    default:
      return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
  }
}

export function getLevelColor(level?: string): string {
  switch (level) {
    case "expert":
      return "bg-emerald-400";
    case "proficient":
      return "bg-blue-400";
    case "learning":
      return "bg-amber-400";
    default:
      return "bg-zinc-400";
  }
}

export function getLevelLabel(level?: string): string {
  switch (level) {
    case "expert":
      return "Expert";
    case "proficient":
      return "Proficient";
    case "learning":
      return "Learning";
    default:
      return "";
  }
}

export function getFocusStatusColor(status: string): string {
  switch (status) {
    case "active":
      return "text-emerald-400 bg-emerald-400/10";
    case "learning":
      return "text-blue-400 bg-blue-400/10";
    case "planning":
      return "text-amber-400 bg-amber-400/10";
    default:
      return "text-zinc-400 bg-zinc-400/10";
  }
}
