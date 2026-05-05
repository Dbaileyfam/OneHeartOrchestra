import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import {
  FORM_SUBJECT_BOOKING,
  formSubmitAjaxUrl,
} from "@/config/formSubmit";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-oho-border bg-oho-surface px-4 py-3 text-sm text-oho-cream placeholder:text-oho-cream/35 outline-none ring-oho-gold/0 transition focus:border-oho-gold/50 focus:ring-2 focus:ring-oho-gold/25";

const labelClass = "block text-sm font-medium text-oho-cream/85";

export function BookingInquiryForm() {
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const event_date = String(fd.get("event_date") ?? "").trim();
    const venue = String(fd.get("venue") ?? "").trim();
    const city = String(fd.get("city") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
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
          _subject: FORM_SUBJECT_BOOKING,
          _template: "table",
          name,
          email,
          phone: phone || "—",
          event_date: event_date || "—",
          venue: venue || "—",
          city: city || "—",
          message,
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
        <p className="font-semibold text-oho-gold">Thanks — request sent.</p>
        <p className="mt-1 text-oho-cream/75">
          We&apos;ll get back to you about routing, timing, and stage details.
        </p>
        <button
          type="button"
          className="mt-3 text-sm font-medium text-oho-rose underline-offset-4 hover:underline"
          onClick={() => setDone(false)}
        >
          Send another message
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
        <label className={labelClass} htmlFor="booking-name">
          Name <span className="text-oho-rose">*</span>
        </label>
        <input
          id="booking-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="booking-email">
          Email <span className="text-oho-rose">*</span>
        </label>
        <input
          id="booking-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="booking-phone">
          Phone <span className="text-oho-cream/45">(optional)</span>
        </label>
        <input
          id="booking-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="Best number to reach you"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="booking-date">
            Event date
          </label>
          <input
            id="booking-date"
            name="event_date"
            type="text"
            className={inputClass}
            placeholder="e.g. June 14, 2026 or TBD"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="booking-city">
            City / region
          </label>
          <input
            id="booking-city"
            name="city"
            type="text"
            className={inputClass}
            placeholder="Where is the gig?"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="booking-venue">
          Venue or event name
        </label>
        <input
          id="booking-venue"
          name="venue"
          type="text"
          className={inputClass}
          placeholder="Festival, club, private event…"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="booking-message">
          Tell us about the show <span className="text-oho-rose">*</span>
        </label>
        <textarea
          id="booking-message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y min-h-[120px]`}
          placeholder="Audience size, stage needs, timeline, links…"
        />
      </div>

      {error ? (
        <p className="text-sm text-oho-rose" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-oho-gold px-6 py-3.5 text-sm font-semibold text-oho-bg shadow-lg shadow-oho-gold/15 transition enabled:hover:bg-oho-cream disabled:opacity-60 sm:w-auto"
      >
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        {pending ? "Sending…" : "Send booking request"}
      </button>
    </form>
  );
}
