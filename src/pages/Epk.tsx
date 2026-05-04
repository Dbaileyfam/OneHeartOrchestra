import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ExternalLink, MapPin } from "lucide-react";
import { album, bio, lineup, media, site, shows } from "@/content/site";
import { formatShowDate, upcomingShows } from "@/utils/showFormat";

const base = import.meta.env.BASE_URL;

const section = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.45 },
} as const;

function youtubeEmbedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0`;
}

export default function Epk() {
  const upcoming = upcomingShows(shows);

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

      <div className="mx-auto mt-14 max-w-5xl space-y-16">
        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Bio</h2>
          <div className="prose prose-invert prose-p:leading-relaxed mt-4 max-w-3xl prose-p:text-oho-cream/80">
            <p>{bio.condensed}</p>
          </div>
          <p className="mt-4 text-sm text-oho-cream/60">
            <Link
              to={{ pathname: "/", search: "?scroll=bio" }}
              className="font-medium text-oho-gold underline-offset-4 transition hover:text-oho-cream hover:underline"
            >
              Read the full biography on the home page
            </Link>
            .
          </p>
        </motion.section>

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Video</h2>
          <p className="mt-2 max-w-2xl text-oho-cream/65">
            Featured performances — full playlist also on the{" "}
            <Link
              to="/media"
              className="font-medium text-oho-gold underline-offset-4 hover:underline"
            >
              Media
            </Link>{" "}
            page.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {media.epkYoutubeVideoIds.map((id) => (
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

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Photos</h2>
          <p className="mt-2 max-w-2xl text-oho-cream/65">
            Press and promo — right-click to save for posters and listings.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {media.epkPhotos.map((photo) => (
              <figure
                key={photo.file}
                className="flex overflow-hidden rounded-2xl border border-oho-border bg-oho-bg/90 ring-1 ring-oho-gold/10"
              >
                <img
                  src={`${base}epk/${photo.file}`}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto block h-auto w-full object-contain object-center"
                />
              </figure>
            ))}
          </div>
        </motion.section>

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Upcoming shows</h2>
          <p className="mt-2 max-w-2xl text-oho-cream/65">
            Same calendar as the{" "}
            <Link to="/shows" className="font-medium text-oho-gold hover:underline">
              Shows
            </Link>{" "}
            page — dates from{" "}
            <code className="rounded bg-oho-surface px-1.5 py-0.5 text-sm text-oho-gold-muted">
              site.ts
            </code>
            .
          </p>
          {upcoming.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-oho-border bg-oho-elevated/40 px-4 py-6 text-oho-cream/70">
              No upcoming dates listed right now — check back soon or reach out via{" "}
              <Link to="/contact" className="text-oho-gold hover:underline">
                Contact
              </Link>
              .
            </p>
          ) : (
            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((s) => (
                <li
                  key={`${s.date}-${s.title}`}
                  className="flex h-full flex-col rounded-3xl border border-oho-border bg-gradient-to-b from-oho-elevated to-oho-surface p-6 shadow-xl"
                >
                  <p className="font-display text-2xl text-oho-gold">
                    {formatShowDate(s.date)}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-oho-cream/55">
                    <Clock className="h-4 w-4 shrink-0" aria-hidden />
                    {s.time}
                  </p>
                  <h3 className="mt-4 font-semibold leading-snug text-oho-cream">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex flex-1 items-start gap-2 text-sm text-oho-cream/60">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-oho-gold" aria-hidden />
                    <span>
                      {s.venue}
                      <br />
                      {s.city}
                    </span>
                  </p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-oho-border py-2.5 text-sm font-semibold text-oho-cream transition hover:border-oho-gold/50 hover:text-oho-gold"
                  >
                    Details
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-6 text-sm text-oho-cream/55">
            <Link to="/shows" className="font-medium text-oho-gold hover:underline">
              View full schedule →
            </Link>
          </p>
        </motion.section>

        <motion.section {...section} className="mx-auto max-w-3xl space-y-16">
          <div>
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
          </div>

          <div>
            <h2 className="font-display text-2xl text-oho-gold">Music</h2>
            <p className="mt-4 text-oho-cream/75">
              Featured release: <strong className="text-oho-cream">{album.title}</strong>{" "}
              ({album.year}) — {album.tracks.length} tracks including dub mixes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-oho-gold">Booking &amp; press</h2>
            <p className="mt-4 text-oho-cream/75">
              For routing, hospitality, and interview requests, reach out through the{" "}
              <Link to="/contact" className="text-oho-gold underline-offset-4 hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
