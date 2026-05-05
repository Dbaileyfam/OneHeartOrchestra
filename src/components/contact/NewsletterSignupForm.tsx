import { useState, type FormEvent } from "react";
import { Loader2, Mail } from "lucide-react";
import {
  FORM_SUBJECT_NEWSLETTER,
  formSubmitAjaxUrl,
} from "@/config/formSubmit";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-oho-border bg-oho-surface px-4 py-3 text-sm text-oho-cream placeholder:text-oho-cream/35 outline-none ring-oho-gold/0 transition focus:border-oho-gold/50 focus:ring-2 focus:ring-oho-gold/25";

export function NewsletterSignupForm() {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const consent = fd.get("consent") === "on";

    if (!email) {
      setError("Enter your email address.");
      return;
    }
    if (!consent) {
      setError("Please agree to receive emails so we can add you to the list.");
      return;
    }

    setPending(true);
    try {
      const res = await fetch(formSubmitAjaxUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: FORM_SUBJECT_NEWSLETTER,
          _template: "table",
          email,
          signup_source: "contact_page_newsletter",
          consent:
            "yes — opted in to updates from Magi & The One Heart Orchestra",
          note: "Newsletter signup — add to your mailing list / blast tool.",
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed (${res.status})`);
      }
      setDone(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div
        className="rounded-2xl border border-oho-gold/35 bg-oho-forest-deep/40 px-5 py-4 text-sm text-oho-cream"
        role="status"
      >
        <p className="font-semibold text-oho-gold">You&apos;re on the list.</p>
        <p className="mt-1 text-oho-cream/75">
          Watch your inbox for shows, releases, and band news.
        </p>
        <button
          type="button"
          className="mt-3 text-sm font-medium text-oho-rose underline-offset-4 hover:underline"
          onClick={() => setDone(false)}
        >
          Sign up another email
        </button>
      </div>
    );
  }

  return (
    <form className="relative space-y-5" onSubmit={onSubmit} noValidate>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute left-0 max-h-0 max-w-0 overflow-hidden opacity-0"
        aria-label="Leave blank"
      />

      <div>
        <label className="block text-sm font-medium text-oho-cream/85" htmlFor="news-email">
          Email address
        </label>
        <input
          id="news-email"
          name="subscriber_email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm text-oho-cream/75">
        <input
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-oho-border bg-oho-surface text-oho-gold focus:ring-oho-gold/40"
        />
        <span>
          I want updates about shows, music, and news from Magi &amp; The One Heart
          Orchestra. We&apos;ll use this email to stay in touch — you can unsubscribe
          anytime when we send mail.
        </span>
      </label>

      {error ? (
        <p className="text-sm text-oho-rose" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-oho-border bg-oho-elevated px-6 py-3.5 text-sm font-semibold text-oho-cream transition enabled:hover:border-oho-gold/50 enabled:hover:text-oho-gold disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Mail className="h-4 w-4" aria-hidden />
        )}
        {pending ? "Joining…" : "Subscribe for updates"}
      </button>

      <p className="text-xs leading-relaxed text-oho-cream/45">
        Submissions arrive at the band&apos;s inbox; export addresses to Mailchimp,
        Buttondown, or your preferred tool when you&apos;re ready for blast sends.
      </p>
    </form>
  );
}
