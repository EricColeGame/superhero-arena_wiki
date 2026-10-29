import { LegalPage } from "@/components/legal-page";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Superhero Arena, Roblox, The Duelists, game logos, artwork, and related media belong to their respective owners.</p>
      <p>Superhero Arena Wiki is an independent, non-official fan wiki created for informational and guide presentation purposes.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-semibold text-foreground hover:underline" href="mailto:support@superhero-arena.wiki">support@superhero-arena.wiki</a> for review.</p>
    </LegalPage>
  );
}
