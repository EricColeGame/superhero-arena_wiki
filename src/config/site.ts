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
  description: "Superhero Arena Wiki provides hero guides, codes, abilities, combat tips, and gameplay strategies to help players master every arena battle.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://superhero-arena.wiki",
  supportEmail: "support@superhero-arena.wiki",
  gameUrl: "https://www.roblox.com/games/78710221869926/Superhero-Arena",
  heroVideoId: "57JHZd2IMfE", // Superhero Arena all abilities gameplay showcase
  locales: ["en", "pt", "es", "de"],
  defaultLocale: "en",
};
