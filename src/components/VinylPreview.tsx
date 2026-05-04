import { motion } from "framer-motion";

const logoSrc = `${import.meta.env.BASE_URL}one-heart-logo.png`;

export function VinylPreview() {
  return (
    <motion.div
      className="group relative mx-auto aspect-square w-48 md:w-56 rounded-full"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 * 2 }}
      transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Vinyl base — deep, high-contrast black */}
      <div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,0.09),transparent_34%),radial-gradient(circle_at_50%_120%,rgba(228,184,46,0.06),transparent_48%),radial-gradient(circle_at_50%_50%,#2b2e2c_0%,#121413_38%,#050605_72%,#020302_100%)] shadow-[0_26px_56px_-12px_rgba(0,0,0,0.95),0_0_0_1px_rgba(228,184,46,0.22),inset_0_0_0_1px_rgba(255,255,255,0.04)] ring-[3px] ring-oho-gold/45"
        aria-hidden
      />

      {/* Grooves: only in outer “run-out” band, not over the center art */}
      <div
        className="pointer-events-none absolute inset-[5%] rounded-full opacity-[0.32]"
        style={{
          background:
            "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.055) 0 1.5px, transparent 1.5px 3.5px)",
          WebkitMaskImage:
            "radial-gradient(farthest-side, transparent 0, transparent 36%, #000 37%, #000 93%, transparent 94%)",
          maskImage:
            "radial-gradient(farthest-side, transparent 0, transparent 36%, #000 37%, #000 93%, transparent 94%)",
        }}
        aria-hidden
      />

      {/* Outer rim */}
      <div
        className="pointer-events-none absolute inset-[4%] rounded-full ring-1 ring-black/70"
        aria-hidden
      />

      {/* Colored play area (rose → forest) — same role as before, not a “label hole” */}
      <div
        className="absolute inset-[14%] rounded-full bg-gradient-to-br from-oho-rose/85 to-oho-forest/90 opacity-95 shadow-[inset_0_0_24px_rgba(0,0,0,0.35)] ring-1 ring-black/30"
        aria-hidden
      />

      {/* Subtle read on the play area */}
      <div
        className="pointer-events-none absolute inset-[14%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.08),transparent_55%)] mix-blend-soft-light opacity-70"
        aria-hidden
      />

      {/* Logo: same large scale as earlier; centered on the whole record, above the green/pink ring */}
      <img
        src={logoSrc}
        alt="One Heart Orchestra logo"
        className="absolute left-1/2 top-1/2 z-20 h-[58%] w-[58%] max-h-[168px] max-w-[168px] -translate-x-1/2 -translate-y-1/2 object-contain object-center drop-shadow-[0_10px_28px_rgba(0,0,0,0.65)] transition-transform duration-300 group-hover:scale-[1.04] group-hover:animate-pulse md:max-h-[182px] md:max-w-[182px]"
        draggable={false}
      />
    </motion.div>
  );
}
