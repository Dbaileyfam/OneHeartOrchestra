import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/music", label: "Music" },
  { to: "/shows", label: "Shows" },
  { to: "/epk", label: "EPK" },
  { to: "/contact", label: "Contact" },
] as const;

const navLogoSrc = `${import.meta.env.BASE_URL}one-heart-logo.png`;

function linkClass(isActive: boolean) {
  return [
    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-oho-gold/15 text-oho-gold"
      : "text-oho-cream/75 hover:bg-oho-gold-soft hover:text-oho-cream",
  ].join(" ");
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-oho-border/60 bg-oho-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link
          to="/"
          aria-label={`${site.shortName} home`}
          className="group flex items-center gap-2 text-left"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-oho-forest to-oho-bg p-1 ring-1 ring-oho-gold/30 transition-transform group-hover:scale-105">
            <img
              src={navLogoSrc}
              alt=""
              width={40}
              height={40}
              decoding="async"
              className="h-full w-full object-contain"
              aria-hidden
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg font-normal tracking-tight text-oho-cream">
              One Heart
            </span>
            <span className="font-display text-xs font-normal uppercase tracking-[0.2em] text-oho-gold-muted">
              Orchestra
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => linkClass(isActive)} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-oho-border bg-oho-surface text-oho-cream md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-oho-border/60 bg-oho-surface md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `${linkClass(isActive)} w-full text-center`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={site.legacySite}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full border border-oho-border py-2 text-center text-sm text-oho-cream/80"
              >
                Legacy Bandzoogle site
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
