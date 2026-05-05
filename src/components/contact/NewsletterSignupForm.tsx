import { useForm, ValidationError } from "@formspree/react";
import { Loader2, Mail } from "lucide-react";
import {
  FORM_SPREE_FORM_ID,
  FORM_SUBJECT_NEWSLETTER,
} from "@/config/formspree";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-oho-border bg-oho-surface px-4 py-3 text-sm text-oho-cream placeholder:text-oho-cream/35 outline-none ring-oho-gold/0 transition focus:border-oho-gold/50 focus:ring-2 focus:ring-oho-gold/25";

type NewsletterFields = {
  email: string;
  consent: string;
};

export function NewsletterSignupForm() {
  const [state, handleSubmit, reset] =
    useForm<NewsletterFields>(FORM_SPREE_FORM_ID);

  if (state.succeeded) {
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
          onClick={() => reset()}
        >
          Sign up another email
        </button>
      </div>
    );
  }

  return (
    <form className="relative space-y-5" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value={FORM_SUBJECT_NEWSLETTER} />
      <input type="hidden" name="form_type" value="newsletter_signup" />

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
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@example.com"
        />
        <ValidationError
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-oho-rose"
        />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-oho-cream/75">
          <input
            name="consent"
            type="checkbox"
            required
            value="yes"
            className="mt-1 h-4 w-4 shrink-0 rounded border-oho-border bg-oho-surface text-oho-gold focus:ring-oho-gold/40"
          />
          <span>
            I want updates about shows, music, and news from Magi &amp; The One Heart
            Orchestra. We&apos;ll use this email to stay in touch — you can unsubscribe
            anytime when we send mail.
          </span>
        </label>
        <ValidationError
          field="consent"
          errors={state.errors}
          className="mt-1 text-sm text-oho-rose"
        />
      </div>

      <ValidationError
        errors={state.errors}
        className="text-sm text-oho-rose"
      />

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-oho-border bg-oho-elevated px-6 py-3.5 text-sm font-semibold text-oho-cream transition enabled:hover:border-oho-gold/50 enabled:hover:text-oho-gold disabled:opacity-60 sm:w-auto"
      >
        {state.submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Mail className="h-4 w-4" aria-hidden />
        )}
        {state.submitting ? "Joining…" : "Subscribe for updates"}
      </button>

      <p className="text-xs leading-relaxed text-oho-cream/45">
        Delivered through Formspree — export addresses to Mailchimp, Buttondown, or
        your preferred tool for blast sends.
      </p>
    </form>
  );
}
