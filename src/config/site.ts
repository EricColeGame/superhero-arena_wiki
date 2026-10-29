export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Superhero Arena Wiki",
  shortName: "Superhero Arena",
  logoText: "S",
  tagline: "Hero Guides, Abilities, Codes & Arena Strategies",
  description: "Your ultimate guide to Superhero Arena on Roblox! Explore hero abilities, combat tips, active codes, tier lists, and arena strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://superhero-arena.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://superhero-arena.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/78710221869926/Superhero-Arena",
  heroVideoId: "57JHZd2IMfE", // Superhero Arena all abilities gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
