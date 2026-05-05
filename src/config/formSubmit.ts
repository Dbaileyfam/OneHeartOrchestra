import { site } from "@/content/site";

/** FormSubmit AJAX endpoint for static sites (GitHub Pages). First submission triggers a one-time inbox confirmation from FormSubmit. */
export function formSubmitAjaxUrl(): string {
  const email = site.booking.email;
  if (!email) {
    throw new Error("site.booking.email is empty");
  }
  return `https://formsubmit.co/ajax/${encodeURIComponent(email)}`;
}

export const FORM_SUBJECT_BOOKING =
  "Booking inquiry — Magi & The One Heart Orchestra";

export const FORM_SUBJECT_NEWSLETTER =
  "[Newsletter signup] One Heart Orchestra mailing list";
