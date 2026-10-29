import { BookOpen, Boxes, Code2, Map as MapIcon, Shield, Swords, Users, Zap, type LucideIcon } from "lucide-react";

interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "progression", path: "/progression", icon: Zap, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "controls", path: "/controls", icon: Shield, isContentType: true },
  { key: "items", path: "/items", icon: Boxes, isContentType: true },
  { key: "maps", path: "/maps", icon: MapIcon, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
