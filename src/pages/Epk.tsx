import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ExternalLink, MapPin } from "lucide-react";
import { SocialIconLinks } from "@/components/SocialIconLinks";
import { bio, lineup, media, quotes, site, shows } from "@/content/site";
import { formatShowDate, upcomingShows } from "@/utils/showFormat";

const base = import.meta.env.BASE_URL;
const heroLogoSrc = `${base}one-heart-logo.png`;

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
        <img
          src={heroLogoSrc}
          alt={site.title}
          width={1024}
          height={682}
          decoding="async"
          className="h-auto w-full max-w-3xl object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.5)]"
        />
        <p className="mt-0 text-lg text-oho-cream/90 md:text-xl">{site.tagline}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
          Electronic press kit
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-5xl space-y-16">
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
          <h2 className="font-display text-2xl text-oho-gold">About Us</h2>
          <div className="oho-logo-font mt-4 max-w-3xl text-base leading-relaxed text-oho-cream/80">
            <p>{bio.condensed}</p>
          </div>
          <p className="mt-4 text-sm text-oho-cream/60">
            <Link
              to={{ pathname: "/", search: "?scroll=about" }}
              className="font-medium text-oho-gold underline-offset-4 transition hover:text-oho-cream hover:underline"
            >
              Read the full story on the home page
            </Link>
            .
          </p>
        </motion.section>

        <motion.section {...section} className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl text-oho-gold">Spotify</h2>
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
          <div className="mt-8 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {media.epkPhotos.map((photo) => {
              const soloPortrait = photo.file === "epk-magi.png";
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
                    src={`${base}epk/${photo.file}`}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className={
                      soloPortrait
                        ? "absolute inset-0 h-full w-full object-cover object-[50%_50%]"
                        : "block h-auto w-full max-w-full align-middle"
                    }
                  />
                </figure>
              );
            })}
          </div>
        </motion.section>

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Downloadable assets</h2>
          <p className="mt-2 max-w-2xl text-oho-cream/65">
            High-res files for posters, listings, and promo materials.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {media.epkDownloadAssets.map((asset) => {
              const href = `${base}epk/${asset.file}`;
              return (
                <figure
                  key={asset.file}
                  className="overflow-hidden rounded-2xl border border-oho-border bg-oho-surface/30 ring-1 ring-oho-gold/10"
                >
                  <img
                    src={href}
                    alt={asset.label}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full max-w-full align-middle"
                  />
                  <figcaption className="flex items-center justify-between gap-3 border-t border-oho-border/70 bg-oho-elevated/70 px-4 py-3">
                    <span className="text-sm text-oho-cream">{asset.label}</span>
                    <a
                      href={href}
                      download={asset.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-lg border border-oho-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-oho-cream transition hover:border-oho-gold/50 hover:text-oho-gold"
                    >
                      Download
                    </a>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </motion.section>

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Press quotes</h2>
          <p className="mt-2 max-w-2xl text-oho-cream/65">
            Copy-ready lines for posters, press releases, and listings.
          </p>
          <div className="mt-5 space-y-3">
            {quotes.map((quote, idx) => (
              <div
                key={`${idx}-${quote.slice(0, 24)}`}
                className="rounded-xl border border-oho-border bg-oho-elevated/50 px-3 py-2.5"
              >
                <p className="text-sm leading-relaxed text-oho-cream/88">{quote}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...section}>
          <h2 className="font-display text-2xl text-oho-gold">Upcoming shows</h2>
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

        <motion.section {...section} className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl text-oho-gold">Booking</h2>
          <p className="mt-4 text-oho-cream/75">
            For routing, hospitality, and interview requests, reach out through the{" "}
            <Link to="/contact" className="text-oho-gold underline-offset-4 hover:underline">
              contact page
            </Link>{" "}
            or email{" "}
            <a
              href={`mailto:${site.booking.email}?subject=${encodeURIComponent("One Heart Orchestra — booking / press")}`}
              className="font-medium text-oho-gold underline-offset-4 transition hover:text-oho-cream hover:underline"
            >
              {site.booking.email}
            </a>
            .
          </p>
          <div className="mt-10">
            <h3 className="oho-logo-font text-xl text-oho-gold">Social</h3>
            <p className="mt-2 text-oho-cream/65">
              Follow for clips, photos, and tour drops.
            </p>
            <SocialIconLinks className="mt-6 text-center" showTitle={false} />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
