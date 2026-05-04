import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function MouseGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  /* Gold center, soft rose falloff — matches site palette */
  const background = useMotionTemplate`radial-gradient(620px circle at ${x}px ${y}px, rgba(228, 184, 46, 0.11) 0%, rgba(199, 93, 111, 0.06) 42%, transparent 58%)`;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background }}
    />
  );
}
