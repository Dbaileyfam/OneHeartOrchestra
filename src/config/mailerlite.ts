/**
 * Public form action from MailerLite (not an API key).
 *
 * Forms → Embedded forms → the form → Embed form → HTML tab.
 * Copy the form `action` value. It looks like:
 * https://assets.mailerlite.com/jsonp/{accountId}/forms/{formId}/subscribe
 *
 * Put it here, or set `VITE_MAILERLITE_FORM_ACTION` before `npm run build`
 * (GitHub Actions reads the `VITE_MAILERLITE_FORM_ACTION` secret).
 * In the form settings, choose the subscriber group. Double opt-in and
 * the confirmation email are controlled in that MailerLite account.
 */
const MAILERLITE_FORM_ACTION_IN_SOURCE =
  "https://assets.mailerlite.com/jsonp/2667931/forms/199887785392342633/subscribe";

const MAILERLITE_SUBSCRIBE_URL =
  /^https:\/\/assets\.mailerlite\.com\/jsonp\/\d+\/forms\/\d+\/subscribe$/;

function readFormAction(): string {
  const fromEnv = import.meta.env.VITE_MAILERLITE_FORM_ACTION?.trim() ?? "";
  const action = fromEnv || MAILERLITE_FORM_ACTION_IN_SOURCE.trim();
  if (!action) return "";
  return MAILERLITE_SUBSCRIBE_URL.test(action) ? action : "";
}

export const MAILERLITE_FORM_ACTION = readFormAction();

export type MailerLiteSubscribeResult =
  | { ok: true }
  | { ok: false; message: string };

type MailerLiteSubscribeBody = {
  success?: boolean;
  message?: string;
  errors?: {
    fields?: string[] | Record<string, string>;
  };
};

export async function subscribeToMailerLite(
  email: string,
): Promise<MailerLiteSubscribeResult> {
  if (!MAILERLITE_FORM_ACTION) {
    return {
      ok: false,
      message: "The mailing list is not connected yet.",
    };
  }

  const body = new URLSearchParams();
  body.set("fields[email]", email.trim());
  body.set("ml-submit", "1");
  body.set("anticsrf", "true");
  body.set("ajax", "1");

  let response: Response;
  try {
    response = await fetch(MAILERLITE_FORM_ACTION, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
  } catch {
    return {
      ok: false,
      message: "Could not reach the mailing list. Try again in a moment.",
    };
  }

  let payload: MailerLiteSubscribeBody | null = null;
  try {
    payload = (await response.json()) as MailerLiteSubscribeBody;
  } catch {
    // Non-JSON responses fall through to the generic error below.
  }

  if (response.ok && payload?.success) {
    return { ok: true };
  }

  const fieldErrors = payload?.errors?.fields;
  const fieldMessage = Array.isArray(fieldErrors)
    ? fieldErrors.join(" ")
    : fieldErrors
      ? Object.values(fieldErrors).join(" ")
      : "";

  return {
    ok: false,
    message:
      fieldMessage ||
      payload?.message ||
      "That email did not go through. Check it and try again.",
  };
}
