import { motion } from "framer-motion";

const logoSrc = `${import.meta.env.BASE_URL}one-heart-logo.png`;

export function VinylPreview() {
  return (
    <motion.div
      className="group relative mx-auto aspect-square w-44 md:w-52 rounded-full"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 * 2 }}
      transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Vinyl body — warm charcoal with a single soft highlight */}
      <div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_50%_115%,rgba(0,0,0,0.35),transparent_55%),radial-gradient(circle_at_50%_50%,#35383a_0%,#1a1c1b_45%,#0b0d0c_100%)] shadow-[0_20px_48px_-14px_rgba(0,0,0,0.92),inset_0_0_0_1px_rgba(255,255,255,0.05)] ring-[2.5px] ring-oho-gold/35"
        aria-hidden
      />

      {/* Very fine grooves only outside the label (masked ring) */}
      <div
        className="pointer-events-none absolute inset-[6%] rounded-full opacity-[0.28]"
        style={{
          background:
            "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0 1.5px, transparent 1.5px 3.5px)",
          WebkitMaskImage:
            "radial-gradient(farthest-side, transparent 0, transparent 40%, #000 41%, #000 94%, transparent 95%)",
          maskImage:
            "radial-gradient(farthest-side, transparent 0, transparent 40%, #000 41%, #000 94%, transparent 95%)",
        }}
        aria-hidden
      />

      {/* Outer rim definition */}
      <div
        className="pointer-events-none absolute inset-[5%] rounded-full ring-1 ring-black/50"
        aria-hidden
      />

      {/* Center label: flex keeps the logo truly centered in the label circle */}
      <div className="absolute inset-[29%] z-10 flex items-center justify-center rounded-full bg-gradient-to-b from-oho-elevated via-oho-surface to-oho-bg p-[9%] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-10px_22px_rgba(0,0,0,0.5)] ring-1 ring-oho-gold/25 ring-inset">
        <img
          src={logoSrc}
          alt="One Heart Orchestra logo"
          className="h-full w-full object-contain object-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-[1.04] group-hover:animate-pulse"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
