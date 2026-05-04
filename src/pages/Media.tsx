import { motion } from "framer-motion";
import { media, site } from "@/content/site";

const section = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45 },
} as const;

export default function Media() {
  return (
    <div className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
          Listen
        </p>
        <h1 className="mt-2 font-display text-4xl text-oho-cream md:text-5xl">
          Media
        </h1>
        <p className="mt-3 text-lg text-oho-cream/75 md:text-xl">
          Stream {site.shortName} on Spotify — singles, album cuts, and more.
        </p>
      </div>

      <motion.div
        className="mx-auto mt-12 max-w-2xl"
        {...section}
      >
        <div className="overflow-hidden rounded-xl border border-oho-border bg-oho-surface/60 shadow-xl shadow-black/20 ring-1 ring-oho-gold/15">
          <iframe
            title={`Spotify — ${site.shortName}`}
            className="h-[352px] w-full rounded-xl"
            src={media.spotifyArtistEmbedSrc}
            width="100%"
            height={352}
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
}
