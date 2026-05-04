import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Disc3, Sparkles } from "lucide-react";
import { QuoteRotator } from "@/components/QuoteRotator";
import { VinylPreview } from "@/components/VinylPreview";
import { bio, site } from "@/content/site";

const heroLogoSrc = `${import.meta.env.BASE_URL}one-heart-logo.png`;

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
} as const;

const tiles = [
  {
    to: "/music",
    title: "Music",
    body: "Debut album Words Not Written — roots, dubs, and heart.",
    icon: Disc3,
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
    body: "Bio, lineup, and press-ready story — book with confidence.",
    icon: Sparkles,
  },
] as const;

export default function Home() {
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

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              className="mb-2 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left"
              {...fade}
              transition={{ ...fade.transition, delay: 0.05 }}
            >
              <img
                src={heroLogoSrc}
                alt=""
                width={160}
                height={160}
                decoding="async"
                className="h-28 w-28 shrink-0 object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.5)] sm:h-36 sm:w-36 md:h-40 md:w-40"
                aria-hidden
              />
              <h1 className="min-w-0 text-4xl leading-[1.06] tracking-[0.02em] md:text-5xl md:leading-[1.05] lg:text-6xl xl:text-7xl">
                <span className="font-display oho-text-gradient">{site.title}</span>
              </h1>
            </motion.div>
            <motion.p
              className="mt-5 max-w-xl text-pretty text-lg text-oho-cream/75 md:text-xl"
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
            className="relative flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-[2rem] border border-oho-border/80 bg-oho-surface/60 p-10 shadow-2xl backdrop-blur-md md:p-12">
              <div className="oho-ring-pulse relative flex items-center justify-center">
                <VinylPreview />
              </div>
              <p className="mt-8 text-center text-xs uppercase tracking-[0.35em] text-oho-cream/50">
                Hover the record
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-oho-border/60 bg-oho-surface/40 px-4 py-16 md:py-20">
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

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="font-display text-3xl text-oho-cream md:text-4xl"
            {...fade}
          >
            At a glance
          </motion.h2>
          <motion.p
            className="mt-3 max-w-2xl text-oho-cream/65"
            {...fade}
            transition={{ ...fade.transition, delay: 0.05 }}
          >
            {bio.lead}
          </motion.p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
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
