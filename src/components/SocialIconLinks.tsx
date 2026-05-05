import { Music2, PlayCircle, Share2, Users } from "lucide-react";
import { site } from "@/content/site";

const iconClass =
  "flex h-12 w-12 items-center justify-center rounded-2xl border border-oho-border bg-oho-elevated text-oho-cream transition hover:border-oho-gold/50 hover:text-oho-gold";

type Props = {
  /** Wrapper classes (default matches Contact page spacing). */
  className?: string;
  /** Set false when a parent section already provides a “Social” heading. */
  showTitle?: boolean;
};

export function SocialIconLinks({
  className = "mt-12 text-center",
  showTitle = true,
}: Props) {
  const { social } = site;
  const links = [
    { href: social.instagram, label: "Instagram", Icon: Share2 },
    { href: social.facebook, label: "Facebook", Icon: Users },
    { href: social.youtube, label: "YouTube", Icon: PlayCircle },
    { href: social.spotify, label: "Spotify", Icon: Music2 },
  ].filter((l) => l.href.length > 0);

  if (links.length === 0) return null;

  return (
    <div className={className}>
      {showTitle ? (
        <p className="text-sm font-medium text-oho-cream/55">Social</p>
      ) : null}
      <div
        className={
          showTitle ? "mt-4 flex flex-wrap justify-center gap-3" : "flex flex-wrap justify-center gap-3"
        }
      >
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={iconClass}
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
