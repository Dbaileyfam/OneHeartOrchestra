import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { shows } from "@/content/site";
import { formatShowDate, upcomingShows } from "@/utils/showFormat";

const base = import.meta.env.BASE_URL;

function ShowPosterPlaceholder({
  title,
  venue,
  city,
  date,
  time,
}: {
  title: string;
  venue: string;
  city: string;
  date: string;
  time: string;
}) {
  return (
    <div
      className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden border-b border-oho-border px-5 py-6 text-center"
      aria-hidden
    >
      {/* Rasta / wood-plank energy to match neighboring flyers */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(5,9,7,0.25), rgba(5,9,7,0.55)),
            repeating-linear-gradient(
              90deg,
              #1a5c3e 0px,
              #1a5c3e 28%,
              #e4b82e 28%,
              #e4b82e 52%,
              #c75d6f 52%,
              #c75d6f 100%
            )
          `,
          backgroundSize: "100% 100%, 42px 100%",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(242,234,219,0.45), transparent 55%), radial-gradient(circle at 80% 75%, rgba(228,184,46,0.35), transparent 50%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-3">
        <img
          src={`${base}one-heart-logo.png`}
          alt=""
          className="h-16 w-16 drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]"
        />
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-oho-cream/90">
          Live music
        </p>
      </div>

      <div className="relative z-10 space-y-3">
        <p className="font-display text-3xl leading-none text-oho-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-4xl">
          {formatShowDate(date).replace(/,\s*\d{4}$/, "")}
        </p>
        <p className="text-sm font-semibold uppercase tracking-wide text-oho-cream">
          {time}
        </p>
        <div className="mx-auto h-px w-16 bg-oho-gold/70" />
        <p className="font-display text-xl leading-snug text-oho-cream drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          {title}
        </p>
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-oho-cream/90">
          {venue}
        </p>
        <p className="text-xs text-oho-cream/75">{city}</p>
      </div>

      <p className="relative z-10 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-oho-gold">
        One Heart Orchestra
      </p>
    </div>
  );
}

export default function Shows() {
  const upcoming = upcomingShows(shows);

  return (
    <div className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
          On the calendar
        </p>
        <h1 className="mt-2 font-display text-4xl text-oho-cream md:text-5xl">
          Upcoming shows
        </h1>

        {upcoming.length === 0 ? (
          <p className="mt-10 rounded-2xl border border-oho-border bg-oho-elevated/40 px-4 py-6 text-oho-cream/70">
            No upcoming dates listed right now — check back soon or reach out via{" "}
            <Link to="/contact" className="text-oho-gold hover:underline">
              Contact
            </Link>
            .
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((s, idx) => {
              const flyer = "flyer" in s ? s.flyer : undefined;
              return (
                <motion.li
                  key={`${s.date}-${s.title}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-oho-border bg-gradient-to-b from-oho-elevated to-oho-surface shadow-xl"
                >
                  {flyer ? (
                    <div className="border-b border-oho-border bg-black/40">
                      <img
                        src={`${base}${flyer}`}
                        alt={`Flyer: ${s.title} at ${s.venue} on ${formatShowDate(s.date)}`}
                        className="h-auto w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <ShowPosterPlaceholder
                      title={s.title}
                      venue={s.venue}
                      city={s.city}
                      date={s.date}
                      time={s.time}
                    />
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-display text-2xl text-oho-gold">
                      {formatShowDate(s.date)}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-oho-cream/55">
                      <Clock className="h-4 w-4 shrink-0" aria-hidden />
                      {s.time}
                    </p>
                    <h2 className="mt-4 font-semibold leading-snug text-oho-cream">
                      {s.title}
                    </h2>
                    <p className="mt-2 flex flex-1 items-start gap-2 text-sm text-oho-cream/60">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-oho-gold" aria-hidden />
                      <span>
                        {s.venue}
                        <br />
                        {s.city}
                      </span>
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
