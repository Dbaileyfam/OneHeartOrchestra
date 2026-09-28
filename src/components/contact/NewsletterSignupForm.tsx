import { useState, type FormEvent } from "react";
import { Loader2, Mail } from "lucide-react";
import {
  MAILERLITE_FORM_ACTION,
  subscribeToMailerLite,
} from "@/config/mailerlite";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-oho-border bg-oho-surface px-4 py-3 text-sm text-oho-cream placeholder:text-oho-cream/35 outline-none ring-oho-gold/0 transition focus:border-oho-gold/50 focus:ring-2 focus:ring-oho-gold/25";

export function NewsletterSignupForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState("");

  if (succeeded) {
    return (
      <div
        className="rounded-2xl border border-oho-gold/35 bg-oho-forest-deep/40 px-5 py-4 text-sm text-oho-cream"
        role="status"
      >
        <p className="font-semibold text-oho-gold">You&apos;re on the list.</p>
        <p className="mt-1 text-oho-cream/75">
          Watch your inbox for shows, releases, and band news. If a confirmation
          email arrives, open it so we can write to you.
        </p>
        <button
          type="button"
          className="mt-3 text-sm font-medium text-oho-rose underline-offset-4 hover:underline"
          onClick={() => {
            setSucceeded(false);
            setEmail("");
            setConsent(false);
            setError("");
          }}
        >
          Sign up another email
        </button>
      </div>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent || submitting) return;

    setSubmitting(true);
    setError("");
    const result = await subscribeToMailerLite(email);
    setSubmitting(false);

    if (result.ok) {
      setSucceeded(true);
      return;
    }

    setError(result.message);
  }

  return (
    <form className="relative space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-oho-cream/85" htmlFor="news-email">
          Email address
        </label>
        <input
          id="news-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-oho-cream/75">
          <input
            name="consent"
            type="checkbox"
            required
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-oho-border bg-oho-surface text-oho-gold focus:ring-oho-gold/40"
          />
          <span>
            I want updates about shows, music, and news from Magi &amp; The One Heart
            Orchestra. We&apos;ll use this email to stay in touch — you can unsubscribe
            anytime from those emails.
          </span>
        </label>
      </div>

      {error ? (
        <p className="text-sm text-oho-rose" role="alert">
          {error}
        </p>
      ) : null}

      {!MAILERLITE_FORM_ACTION ? (
        <p className="text-sm text-oho-rose" role="status">
          The mailing list isn&apos;t connected yet.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting || !MAILERLITE_FORM_ACTION}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-oho-border bg-oho-elevated px-6 py-3.5 text-sm font-semibold text-oho-cream transition enabled:hover:border-oho-gold/50 enabled:hover:text-oho-gold disabled:opacity-60 sm:w-auto"
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Mail className="h-4 w-4" aria-hidden />
        )}
        {submitting ? "Joining…" : "Subscribe for updates"}
      </button>

      <p className="text-xs leading-relaxed text-oho-cream/45">
        Joins the band&apos;s MailerLite list. Unsubscribe anytime from any email we
        send.
      </p>
    </form>
  );
}
