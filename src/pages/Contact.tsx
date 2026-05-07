import { motion } from "framer-motion";
import { BookingInquiryForm } from "@/components/contact/BookingInquiryForm";
import { NewsletterSignupForm } from "@/components/contact/NewsletterSignupForm";
import { SocialIconLinks } from "@/components/SocialIconLinks";

export default function Contact() {
  return (
    <div className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mt-2 text-center font-display text-4xl text-oho-cream md:text-5xl">
          Bookings &amp; hello
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-oho-cream/70">
          Send a booking request below or join the email list for news and
          announcements.
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

        <SocialIconLinks />
      </div>
    </div>
  );
}
