import { motion } from "framer-motion";
import { album, bio, lineup, site } from "@/content/site";

const section = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.45 },
} as const;

export default function Epk() {
  return (
    <div className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
          Electronic press kit
        </p>
        <h1 className="mt-2 font-display text-4xl text-oho-cream md:text-5xl">
          {site.title}
        </h1>
        <p className="mt-3 text-lg text-oho-rose md:text-xl">{site.tagline}</p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl space-y-16">
        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Bio</h2>
          <div className="prose prose-invert prose-p:leading-relaxed mt-4 max-w-none prose-p:text-oho-cream/80">
            <p>{bio.lead}</p>
            {bio.extended.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.section>

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Lineup</h2>
          <ul className="mt-4 space-y-3">
            {lineup.map((m) => (
              <li
                key={m.name}
                className="flex flex-col rounded-2xl border border-oho-border bg-oho-elevated/60 px-4 py-3 sm:flex-row sm:justify-between sm:gap-4"
              >
                <span className="font-medium text-oho-cream">{m.name}</span>
                <span className="text-sm text-oho-cream/55">{m.role}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Music</h2>
          <p className="mt-4 text-oho-cream/75">
            Featured release: <strong className="text-oho-cream">{album.title}</strong>{" "}
            ({album.year}) — {album.tracks.length} tracks including dub mixes.
          </p>
        </motion.section>

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Booking &amp; press</h2>
          <p className="mt-4 text-oho-cream/75">
            For routing, hospitality, and interview requests, reach out through
            the contact page. High-resolution photos and a one-sheet can live
            in <code className="text-oho-gold-muted">public/press/</code> when
            you add them to this repo.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
