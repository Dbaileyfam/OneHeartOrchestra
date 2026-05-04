import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-oho-gold-muted">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-oho-cream">Wrong riddim</h1>
      <p className="mt-3 max-w-md text-oho-cream/65">
        This path doesn&apos;t exist. Head home and catch the groove from the
        top.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-2xl bg-oho-gold px-8 py-3 text-sm font-semibold text-oho-bg transition hover:bg-oho-cream"
      >
        Back home
      </Link>
    </div>
  );
}
