import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clapperboard, Sparkles } from "lucide-react";
import { QuoteRotator } from "@/components/QuoteRotator";
import { album, bio, media, site } from "@/content/site";

const base = import.meta.env.BASE_URL;
/** Band photo with wordmark — home hero only; navbar still uses one-heart-logo.png */
/** Cache-bust when the hero band image is replaced or re-exported. */
const heroBandSrc = `${base}band-hero-home.png?v=4`;

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
} as const;

const tiles = [
  {
    to: "/media",
    title: "Media",
    body: "Videos, Spotify, and press photos — watch, listen, browse.",
    icon: Clapperboard,
  },
  {
    to: "/shows",
    title: "Shows",
    body: "Colorado dates and festival stages worth the drive.",
    icon: CalendarDays,
  },
  {
    to: "/epk",
    title: "EPK",
    body: "Condensed kit: lineup, booking, and press notes.",
    icon: Sparkles,
  },
] as const;

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const q = new URLSearchParams(location.search);
    const scroll = q.get("scroll");
    if (scroll !== "bio" && scroll !== "about") return;
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div>
      <section className="relative overflow-hidden px-4 pb-20 pt-12 md:pb-28 md:pt-16">
        <div
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-oho-forest-glow/35 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-oho-rose/25 blur-[110px]"
          aria-hidden
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <motion.div
              className="mb-0 flex justify-center sm:justify-start"
              {...fade}
              transition={{ ...fade.transition, delay: 0.05 }}
            >
              <img
                src={heroBandSrc}
                alt={`${site.title} — band`}
                width={1200}
                height={800}
                decoding="async"
                className="h-auto max-h-[min(52vh,420px)] w-full max-w-3xl object-contain object-center drop-shadow-[0_10px_28px_rgba(0,0,0,0.45)] md:max-h-[min(56vh,480px)] md:max-w-5xl"
              />
            </motion.div>
            <motion.p
              className="oho-logo-font -mt-2 max-w-xl text-pretty text-lg text-oho-cream/92 md:-mt-3 md:text-xl"
              {...fade}
              transition={{ ...fade.transition, delay: 0.1 }}
            >
              {site.tagline}. Tight grooves, warm stage energy, and lyrics that
              aim straight for the soul.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              {...fade}
              transition={{ ...fade.transition, delay: 0.14 }}
            >
              <Link
                to="/shows"
                className="inline-flex items-center gap-2 rounded-2xl bg-oho-gold px-6 py-3 text-sm font-semibold text-oho-bg shadow-lg shadow-oho-gold/20 transition hover:bg-oho-cream"
              >
                See shows
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-oho-border bg-oho-surface px-6 py-3 text-sm font-semibold text-oho-cream transition hover:border-oho-gold/50"
              >
                Book the band
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-md rounded-[2rem] border border-oho-border/80 bg-oho-surface/60 p-8 shadow-2xl backdrop-blur-md md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
                Debut album
              </p>
              <h2 className="mt-2 font-display text-2xl text-oho-cream md:text-3xl">
                {album.title}
              </h2>
              <p className="mt-1 text-sm text-oho-cream/50">{album.year}</p>
              <p className="mt-4 text-sm leading-relaxed text-oho-cream/70">
                Play a track below, then head to Media for videos and photos.
              </p>
              {media.spotifyHeroTrackEmbedSrc.trim() ? (
                <div className="mt-6 overflow-hidden rounded-xl border border-oho-border/80 bg-black/25 shadow-inner ring-1 ring-oho-gold/15">
                  <iframe
                    title={`Spotify — ${album.title}`}
                    className="h-[152px] w-full border-0"
                    src={media.spotifyHeroTrackEmbedSrc}
                    width="100%"
                    height={152}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              ) : null}
              <p className="mt-4 text-center text-xs text-oho-cream/45 lg:text-left">
                <Link
                  to="/media"
                  className="font-medium text-oho-gold underline-offset-4 hover:text-oho-cream hover:underline"
                >
                  More on Media
                  <ArrowRight
                    className="ml-0.5 inline-block h-3 w-3 align-middle"
                    aria-hidden
                  />
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-oho-border/60 bg-oho-surface/35 px-4 py-16 md:py-20"
      >
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="oho-logo-font text-3xl text-oho-cream md:text-4xl"
            {...fade}
          >
            About Us
          </motion.h2>
          <motion.div
            className="oho-logo-font mt-6 max-w-none space-y-5 text-base leading-relaxed text-oho-cream/85 md:text-lg md:leading-relaxed"
            {...fade}
            transition={{ ...fade.transition, delay: 0.06 }}
          >
            <p>{bio.lead}</p>
            {bio.extended.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-oho-border/60 bg-oho-bg/50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            className="font-display text-3xl text-oho-cream md:text-4xl"
            {...fade}
          >
            Words that move with the riddim
          </motion.h2>
          <motion.div className="mx-auto mt-8 max-w-3xl" {...fade}>
            <QuoteRotator />
          </motion.div>
        </div>
      </section>

      <section className="bg-oho-surface/35 px-4 pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {tiles.map((tile, idx) => (
              <motion.div
                key={tile.to}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
              >
                <Link
                  to={tile.to}
                  className="group block h-full rounded-3xl border border-oho-border bg-oho-elevated/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-oho-gold/40 hover:shadow-oho-gold/5"
                >
                  <tile.icon className="h-8 w-8 text-oho-gold" aria-hidden />
                  <h3 className="mt-4 font-display text-2xl text-oho-cream group-hover:text-oho-gold">
                    {tile.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-oho-cream/65">
                    {tile.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-oho-rose">
                    Explore
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
