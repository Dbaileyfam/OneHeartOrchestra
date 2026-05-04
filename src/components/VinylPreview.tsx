import { motion } from "framer-motion";

export function VinylPreview() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-44 md:w-52"
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
      <div className="absolute inset-[42%] rounded-full border border-white/10 bg-oho-surface/90 backdrop-blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-oho-bg ring-1 ring-oho-gold/50" />
    </motion.div>
  );
}
