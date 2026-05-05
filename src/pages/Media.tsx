import { motion } from "framer-motion";
import { media, site } from "@/content/site";

const base = import.meta.env.BASE_URL;

const section = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.45 },
} as const;

function youtubeEmbedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0`;
}

export default function Media() {
  return (
    <div className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
          Watch · Listen · Photos
        </p>
        <h1 className="mt-2 font-display text-4xl text-oho-cream md:text-5xl">
          Media
        </h1>
        <p className="mt-3 text-lg text-oho-cream/75 md:text-xl">
          Videos, streaming, and press photos for {site.shortName}.
        </p>
      </div>

      <motion.section className="mx-auto mt-14 max-w-5xl" {...section}>
        <h2 className="font-display text-2xl text-oho-gold md:text-3xl">Videos</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {media.youtubeVideoIds.map((id) => (
            <div
              key={id}
              className="overflow-hidden rounded-xl border border-oho-border bg-oho-surface/60 shadow-lg ring-1 ring-oho-gold/10"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  title={`YouTube video ${id}`}
                  className="absolute inset-0 h-full w-full"
                  src={youtubeEmbedSrc(id)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className="mx-auto mt-16 max-w-2xl" {...section}>
        <h2 className="font-display text-2xl text-oho-gold md:text-3xl">Spotify</h2>
        <p className="mt-2 text-oho-cream/65">
          Stream {site.shortName} on Spotify — singles, album cuts, and more.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-oho-border bg-oho-surface/60 shadow-xl shadow-black/20 ring-1 ring-oho-gold/15">
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
      </motion.section>

      <motion.section className="mx-auto mt-16 max-w-5xl" {...section}>
        <h2 className="font-display text-2xl text-oho-gold md:text-3xl">Photos</h2>
        <p className="mt-2 max-w-2xl text-oho-cream/65">
          Press and promo shots — save images via right-click if you need files for posters or listings.
        </p>
        <div className="mt-8 grid items-start gap-6 sm:grid-cols-2">
          {media.promoPhotos.map((photo) => {
            const soloPortrait = photo.file === "promo-magi.png";
            return (
              <figure
                key={photo.file}
                className={
                  soloPortrait
                    ? "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-oho-border bg-oho-surface/30 ring-1 ring-oho-gold/10"
                    : "w-full overflow-hidden rounded-2xl border border-oho-border bg-oho-surface/30 ring-1 ring-oho-gold/10"
                }
              >
                <img
                  src={`${base}media/${photo.file}`}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className={
                    soloPortrait
                      ? "absolute inset-0 h-full w-full object-cover object-[50%_22%]"
                      : "block h-auto w-full max-w-full align-middle"
                  }
                />
              </figure>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}
