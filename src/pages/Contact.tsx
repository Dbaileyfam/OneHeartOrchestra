import { motion } from "framer-motion";
import { Share2, Users, PlayCircle, Music2, Mail } from "lucide-react";
import { site } from "@/content/site";

const iconClass =
  "flex h-12 w-12 items-center justify-center rounded-2xl border border-oho-border bg-oho-elevated text-oho-cream transition hover:border-oho-gold/50 hover:text-oho-gold";

export default function Contact() {
  const { social, booking } = site;
  const links = [
    { href: social.instagram, label: "Instagram", Icon: Share2 },
    { href: social.facebook, label: "Facebook", Icon: Users },
    { href: social.youtube, label: "YouTube", Icon: PlayCircle },
    { href: social.spotify, label: "Spotify", Icon: Music2 },
  ].filter((l) => l.href.length > 0);

  return (
    <div className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
          Let&apos;s connect
        </p>
        <h1 className="mt-2 font-display text-4xl text-oho-cream md:text-5xl">
          Bookings &amp; hello
        </h1>
        <p className="mt-4 text-pretty text-oho-cream/70">
          Tell us about your stage, festival slot, or private event. We&apos;ll
          route you to the right person on the crew.
        </p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {booking.email ? (
            <a
              href={`mailto:${booking.email}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-oho-gold px-8 py-3.5 text-sm font-semibold text-oho-bg transition hover:bg-oho-cream"
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email the band
            </a>
          ) : null}
          <a
            href={booking.legacyContact}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-oho-border bg-oho-surface px-8 py-3.5 text-sm font-semibold text-oho-cream transition hover:border-oho-gold/50"
          >
            Contact via current site
          </a>
        </motion.div>

        {links.length > 0 ? (
          <div className="mt-12">
            <p className="text-sm font-medium text-oho-cream/55">Social</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {links.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={iconClass}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-10 text-sm text-oho-cream/50">
            Add Instagram, Facebook, YouTube, or Spotify URLs in{" "}
            <code className="text-oho-gold-muted">site.ts</code> and the icons
            will appear here automatically.
          </p>
        )}
      </div>
    </div>
  );
}
