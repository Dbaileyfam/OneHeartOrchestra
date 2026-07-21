import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { shows } from "@/content/site";
import { formatShowDate, upcomingShows } from "@/utils/showFormat";

const base = import.meta.env.BASE_URL;

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
                  ) : null}

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
