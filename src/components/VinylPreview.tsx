import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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
      <div className="absolute inset-[38%] rounded-full border border-oho-gold/35 bg-oho-surface/95 backdrop-blur-sm" />
      <div className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-oho-gold/45 bg-oho-forest-deep/90 p-2 shadow-[0_0_20px_rgba(228,184,46,0.24)] transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(199,93,111,0.55)]">
        <Heart
          className="h-6 w-6 fill-oho-rose text-oho-rose transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"
          aria-label="One Heart logo mark"
        />
      </div>
    </motion.div>
  );
}
