import { motion } from "framer-motion";

const logoSrc = `${import.meta.env.BASE_URL}one-heart-logo.png`;

/** Concentric groove lines in the “run-out” area (SVG viewBox 0–100). */
function VinylGrooves() {
  const lines: number[] = [];
  for (let r = 38.2; r <= 49.2; r += 0.78) {
    lines.push(r);
  }
  return (
    <svg
      className="pointer-events-none absolute inset-[5%] z-[1] opacity-[0.55]"
      viewBox="0 0 100 100"
      aria-hidden
    >
      <defs>
        <radialGradient id="vinyl-groove-fade" cx="50%" cy="50%" r="50%">
          <stop offset="56%" stopColor="white" stopOpacity="0" />
          <stop offset="57%" stopColor="white" stopOpacity="0.5" />
          <stop offset="78%" stopColor="white" stopOpacity="0.45" />
          <stop offset="79%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="49.6"
        fill="none"
        stroke="url(#vinyl-groove-fade)"
        strokeWidth="0.35"
      />
      {lines.map((r) => (
        <circle
          key={r}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.22"
        />
      ))}
    </svg>
  );
}

export function VinylPreview() {
  return (
    <motion.div
      className="group relative mx-auto aspect-square w-48 md:w-56"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 * 2 }}
      transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Vinyl base + edge sheen */}
      <div
        className="absolute inset-0 z-0 rounded-full shadow-[0_22px_50px_-14px_rgba(0,0,0,0.95),inset_0_0_0_1px_rgba(255,255,255,0.06)] ring-[3px] ring-oho-gold/35"
        style={{
          background: `
            radial-gradient(circle at 32% 22%, rgba(255,255,255,0.14) 0%, transparent 38%),
            radial-gradient(circle at 72% 78%, rgba(0,0,0,0.55) 0%, transparent 42%),
            radial-gradient(circle at 50% 50%, #2a2a2e 0%, #0c0c0e 48%, #050506 100%)
          `,
        }}
        aria-hidden
      />

      {/* Grooves */}
      <VinylGrooves />

      {/* Run-out matte ring */}
      <div
        className="pointer-events-none absolute inset-[10%] z-[1] rounded-full bg-gradient-to-b from-white/[0.04] to-transparent"
        aria-hidden
      />

      {/* Center label (matte “paper”) */}
      <div
        className="absolute inset-[26%] z-[2] rounded-full bg-gradient-to-br from-[#2e2e32] via-[#1c1c1f] to-[#121214] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-8px_18px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
        aria-hidden
      />

      {/* Label rim */}
      <div
        className="pointer-events-none absolute inset-[24.5%] z-[2] rounded-full ring-1 ring-oho-gold/25"
        aria-hidden
      />

      {/* Gloss pass (under logo so type stays crisp) */}
      <div
        className="pointer-events-none absolute inset-[4%] z-[3] rounded-full opacity-30 mix-blend-screen"
        style={{
          background:
            "linear-gradient(125deg, rgba(255,255,255,0.22) 0%, transparent 42%, transparent 58%, rgba(255,255,255,0.06) 100%)",
        }}
        aria-hidden
      />

      {/* Spindle (behind logo; shows through any transparent center in the art) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-[3] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a0a0c] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] ring-1 ring-black/80"
        aria-hidden
      />

      {/* Logo: nudged up slightly so the heart reads centered on the disc */}
      <img
        src={logoSrc}
        alt="One Heart Orchestra logo"
        className="absolute left-1/2 top-[46.5%] z-[4] h-[48%] w-[48%] max-h-[148px] max-w-[148px] -translate-x-1/2 -translate-y-1/2 object-contain object-center drop-shadow-[0_8px_22px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-[1.04] group-hover:animate-pulse"
        draggable={false}
      />
    </motion.div>
  );
}
