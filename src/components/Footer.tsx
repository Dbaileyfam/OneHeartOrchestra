import { Heart } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-oho-border/60 bg-oho-surface/80 py-10 text-center text-sm text-oho-cream/55">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4">
        <p className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-oho-rose" aria-hidden />
          <span>{site.title}</span>
        </p>
        <p className="max-w-md text-pretty">
          Built for the road — swap copy and links in{" "}
          <code className="rounded bg-oho-elevated px-1.5 py-0.5 text-xs text-oho-gold-muted">
            src/content/site.ts
          </code>
          .{" "}
          <a
            href={site.legacySite}
            target="_blank"
            rel="noreferrer"
            className="text-oho-rose underline-offset-4 hover:text-oho-gold hover:underline"
          >
            Current Bandzoogle site
          </a>
        </p>
        <p className="text-xs">© {new Date().getFullYear()} {site.shortName}</p>
      </div>
    </footer>
  );
}
