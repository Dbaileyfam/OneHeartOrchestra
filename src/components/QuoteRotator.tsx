import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quotes } from "@/content/site";

const intervalMs = 9000;

export function QuoteRotator() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((v) => (v + 1) % quotes.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-[8.5rem] max-w-3xl md:min-h-[7rem]">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45 }}
          className="text-pretty font-serif text-xl italic leading-relaxed text-oho-cream/90 md:text-2xl"
        >
          {quotes[i]}
        </motion.blockquote>
      </AnimatePresence>
      <div className="mt-6 flex justify-center gap-1.5" aria-hidden>
        {quotes.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              idx === i ? "bg-oho-gold" : "bg-oho-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
