import { motion } from "framer-motion";

const logoSrc = `${import.meta.env.BASE_URL}one-heart-logo.png`;

export function VinylPreview() {
  return (
    <motion.div
      className="group relative mx-auto aspect-square w-52 md:w-60 rounded-full"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 * 2 }}
      transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Vinyl base — inner area is just the disc; no separate colored ring */}
      <div
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_24%,rgba(255,255,255,0.09),transparent_34%),radial-gradient(circle_at_50%_118%,rgba(228,184,46,0.07),transparent_46%),radial-gradient(circle_at_50%_50%,#2f3230_0%,#151716_32%,#060807_68%,#020302_100%)] shadow-[0_28px_60px_-12px_rgba(0,0,0,0.96),0_0_0_1px_rgba(228,184,46,0.24),inset_0_0_0_1px_rgba(255,255,255,0.04)] ring-[3px] ring-oho-gold/45"
        aria-hidden
      />

      {/* Grooves: outer run-out only — center stays clean for the heart art */}
      <div
        className="pointer-events-none absolute inset-[4%] rounded-full opacity-[0.34]"
        style={{
          background:
            "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.055) 0 1.5px, transparent 1.5px 3.5px)",
          WebkitMaskImage:
            "radial-gradient(farthest-side, transparent 0, transparent 44%, #000 45%, #000 92%, transparent 93%)",
          maskImage:
            "radial-gradient(farthest-side, transparent 0, transparent 44%, #000 45%, #000 92%, transparent 93%)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-[3%] rounded-full ring-1 ring-black/75"
        aria-hidden
      />

      {/* Heart fills the former “label” zone — larger, dead center on the disc */}
      <img
        src={logoSrc}
        alt="One Heart Orchestra logo"
        className="absolute left-1/2 top-1/2 z-10 h-[72%] w-[72%] max-h-[220px] max-w-[220px] -translate-x-1/2 -translate-y-1/2 object-contain object-center drop-shadow-[0_12px_32px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:scale-[1.03] group-hover:animate-pulse md:max-h-[248px] md:max-w-[248px]"
        draggable={false}
      />
    </motion.div>
  );
}
