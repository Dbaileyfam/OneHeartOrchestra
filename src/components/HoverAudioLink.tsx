import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

function resolveHoverAudioSrc(config: string): string {
  const t = config.trim();
  if (!t) return "";
  if (/^https?:\/\//i.test(t)) return t;
  return `${import.meta.env.BASE_URL}${t.replace(/^\//, "")}`;
}

type Props = Omit<LinkProps, "children"> & {
  /** Relative `public/` path (e.g. `media/preview.mp3`) or full `https` URL to MP3/AAC. */
  hoverAudio: string;
  children: ReactNode;
};

/**
 * Same as `Link`, but plays a short clip on hover for fine pointers (desktop).
 * Browsers may still block `play()` until the user has interacted with the page once.
 */
export function HoverAudioLink({ hoverAudio, children, ...linkProps }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hoverSoundOk, setHoverSoundOk] = useState(false);

  const src = resolveHoverAudioSrc(hoverAudio);

  useEffect(() => {
    if (!src) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => {
      setHoverSoundOk(!reduced.matches && fineHover.matches);
    };
    sync();
    reduced.addEventListener("change", sync);
    fineHover.addEventListener("change", sync);
    return () => {
      reduced.removeEventListener("change", sync);
      fineHover.removeEventListener("change", sync);
    };
  }, [src]);

  /** Prime autoplay policy: after any tap/click, hover `play()` is more likely to succeed. */
  useEffect(() => {
    if (!src) return;
    const el = audioRef.current;
    if (!el) return;
    const unlock = () => {
      void el
        .play()
        .then(() => {
          el.pause();
          el.currentTime = 0;
        })
        .catch(() => {});
    };
    document.addEventListener("pointerdown", unlock, { once: true });
    return () => document.removeEventListener("pointerdown", unlock);
  }, [src]);

  const play = () => {
    const el = audioRef.current;
    if (!el || !hoverSoundOk) return;
    el.volume = 0.85;
    el.currentTime = 0;
    void el.play().catch(() => {});
  };

  const stop = () => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  if (!src) {
    return <Link {...linkProps}>{children}</Link>;
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        aria-hidden
        className="hidden"
      />
      <Link
        {...linkProps}
        onMouseEnter={(e) => {
          play();
          linkProps.onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          stop();
          linkProps.onMouseLeave?.(e);
        }}
      >
        {children}
      </Link>
    </>
  );
}
