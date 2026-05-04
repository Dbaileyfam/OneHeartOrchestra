import { motion } from "framer-motion";

const logoSrc = `${import.meta.env.BASE_URL}one-heart-logo.png`;

export function VinylPreview() {
  return (
    <motion.div
      className="group relative mx-auto aspect-square w-44 md:w-52"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 * 2 }}
      transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-oho-forest-deep via-oho-bg to-oho-forest shadow-[0_24px_60px_-12px_rgba(5,9,7,0.9)] ring-[3px] ring-oho-gold/40"
        aria-hidden
      />
      <div
        className="absolute inset-[14%] rounded-full bg-gradient-to-br from-oho-rose/90 to-oho-forest/90 opacity-90"
        aria-hidden
      />
      <div
        className="absolute inset-[34%] rounded-full border border-oho-gold/30 bg-black/25 backdrop-blur-[2px]"
        aria-hidden
      />
      <img
        src={logoSrc}
        alt="One Heart Orchestra logo"
        className="absolute left-1/2 top-1/2 z-10 h-[56%] w-[56%] max-h-[150px] max-w-[150px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-105 group-hover:animate-pulse"
        draggable={false}
      />
    </motion.div>
  );
}
