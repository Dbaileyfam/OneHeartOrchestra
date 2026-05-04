import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { VinylPreview } from "@/components/VinylPreview";
import { album, site } from "@/content/site";

const row = {
  initial: { opacity: 0, x: -12 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-30px" },
} as const;

export default function Music() {
  return (
    <div className="px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-oho-border bg-oho-surface/70 p-10 backdrop-blur-sm"
          >
            <VinylPreview />
          </motion.div>
          <p className="mt-6 max-w-xs text-center text-sm text-oho-cream/55 lg:text-left">
            Interactive preview — pair this section with your album art when
            you have assets ready.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
            Debut album
          </p>
          <h1 className="mt-2 font-display text-4xl text-oho-cream md:text-5xl">
            {album.title}
          </h1>
          <p className="mt-2 text-oho-cream/60">{album.year}</p>
          <p className="mt-6 max-w-prose text-pretty leading-relaxed text-oho-cream/75">
            Nine tracks of roots storytelling, lover&apos;s rock warmth, and
            dub versions that stretch the groove into new spaces.
          </p>
          <a
            href={album.legacyListen}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-oho-gold px-6 py-3 text-sm font-semibold text-oho-bg transition hover:bg-oho-cream"
          >
            Listen &amp; purchase
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <p className="mt-3 text-xs text-oho-cream/45">
            Opens your current Bandzoogle store — swap for Spotify or Bandcamp
            in <code className="text-oho-gold-muted">site.ts</code>.
          </p>

          <ol className="mt-12 space-y-2">
            {album.tracks.map((t, idx) => (
              <motion.li
                key={t.n}
                {...row}
                transition={{ delay: idx * 0.03, duration: 0.35 }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-transparent bg-oho-elevated/50 px-4 py-3 transition hover:border-oho-gold/25 hover:bg-oho-elevated"
              >
                <div className="flex items-center gap-4">
                  <span className="w-6 text-right font-mono text-xs text-oho-cream/40">
                    {t.n}
                  </span>
                  <span className="font-medium text-oho-cream group-hover:text-oho-gold">
                    {t.title}
                  </span>
                </div>
                <span className="font-mono text-xs text-oho-cream/45">
                  {t.length}
                </span>
              </motion.li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-oho-cream/50">
            Official site:{" "}
            <a
              href={site.legacySite}
              className="text-oho-rose underline-offset-4 hover:text-oho-gold hover:underline"
            >
              oneheartorchestra.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
