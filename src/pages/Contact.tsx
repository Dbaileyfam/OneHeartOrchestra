import { motion } from "framer-motion";
import { Mail, Share2, Users, PlayCircle, Music2 } from "lucide-react";
import { BookingInquiryForm } from "@/components/contact/BookingInquiryForm";
import { NewsletterSignupForm } from "@/components/contact/NewsletterSignupForm";
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
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-oho-gold-muted">
          Let&apos;s connect
        </p>
        <h1 className="mt-2 text-center font-display text-4xl text-oho-cream md:text-5xl">
          Bookings &amp; hello
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-oho-cream/70">
          Send a booking request below, join the email list for news, or reach the
          crew directly at{" "}
          <a
            href={`mailto:${booking.email}`}
            className="font-medium text-oho-gold underline-offset-4 hover:underline"
          >
            {booking.email}
          </a>
          .
        </p>

        <motion.section
          className="mt-14 rounded-3xl border border-oho-border bg-oho-surface/50 p-6 shadow-xl backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="font-display text-2xl text-oho-gold md:text-3xl">
            Book a show
          </h2>
          <p className="mt-2 text-sm text-oho-cream/65">
            Tell us about your date, venue, and crowd. We&apos;ll route this to the
            booking inbox for routing, hospitality, and tech details.
          </p>
          <div className="mt-8">
            <BookingInquiryForm />
          </div>
        </motion.section>

        <motion.section
          className="mt-10 rounded-3xl border border-oho-border bg-oho-elevated/40 p-6 shadow-lg backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <h2 className="font-display text-2xl text-oho-gold md:text-3xl">
            Email list &amp; updates
          </h2>
          <p className="mt-2 text-sm text-oho-cream/65">
            Get show announcements, releases, and band news. Each signup sends a note
            to the band so they can add you to their mailing tool or reply directly.
          </p>
          <div className="mt-8">
            <NewsletterSignupForm />
          </div>
        </motion.section>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <a
            href={`mailto:${booking.email}?subject=${encodeURIComponent("One Heart Orchestra — booking / inquiry")}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-oho-gold px-8 py-3.5 text-sm font-semibold text-oho-bg transition hover:bg-oho-cream"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Email {booking.email}
          </a>
          <a
            href={booking.legacyContact}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-oho-border bg-oho-surface px-8 py-3.5 text-sm font-semibold text-oho-cream transition hover:border-oho-gold/50"
          >
            Legacy Bandzoogle contact
          </a>
        </motion.div>

        {links.length > 0 ? (
          <div className="mt-12 text-center">
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
          <p className="mt-10 text-center text-sm text-oho-cream/50">
            Add Instagram, Facebook, YouTube, or Spotify URLs in{" "}
            <code className="text-oho-gold-muted">site.ts</code> and the icons will
            appear here automatically.
          </p>
        )}
      </div>
    </div>
  );
}
