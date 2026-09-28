/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Adobe Fonts embed kit id from `https://use.typekit.net/<id>.css` */
  readonly VITE_ADOBE_FONTS_KIT?: string;
  /**
   * Comma-separated CSS names from your kit’s “Using fonts in CSS” (only if
   * they differ from the default `acid-green` / segmented `-1` / `-2` names).
   */
  readonly VITE_ADOBE_DISPLAY_FAMILY?: string;
  /**
   * MailerLite embedded-form action URL:
   * https://assets.mailerlite.com/jsonp/{accountId}/forms/{formId}/subscribe
   */
  readonly VITE_MAILERLITE_FORM_ACTION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
