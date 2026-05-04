import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { shows } from "@/content/site";
import { formatShowDate } from "@/utils/showFormat";

export default function Shows() {
  return (
    <div className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
          On the calendar
        </p>
        <h1 className="mt-2 font-display text-4xl text-oho-cream md:text-5xl">
          Upcoming shows
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-oho-cream/70">
          Dates mirror your public listings — update them in{" "}
          <code className="rounded bg-oho-surface px-1.5 py-0.5 text-sm text-oho-gold-muted">
            src/content/site.ts
          </code>{" "}
          whenever new gigs land.
        </p>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shows.map((s, idx) => (
            <motion.li
              key={`${s.date}-${s.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.07, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="flex h-full flex-col rounded-3xl border border-oho-border bg-gradient-to-b from-oho-elevated to-oho-surface p-6 shadow-xl"
            >
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
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-oho-border py-2.5 text-sm font-semibold text-oho-cream transition hover:border-oho-gold/50 hover:text-oho-gold"
              >
                Details
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
