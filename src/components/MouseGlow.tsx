import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

type Spark = {
  id: number;
  x: number;
  y: number;
  size: number;
  delayMs: number;
};

export function MouseGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const idRef = useRef(0);
  const lastRef = useRef({ x: 0, y: 0, t: 0 });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const shouldAnimate = () => !reducedMotion.matches && finePointer.matches;

    if (!shouldAnimate()) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const now = performance.now();
      const dx = e.clientX - lastRef.current.x;
      const dy = e.clientY - lastRef.current.y;
      const distance = Math.hypot(dx, dy);
      const elapsed = now - lastRef.current.t;

      // Emit glitter only when cursor has moved enough, keeping perf stable.
      if (distance < 16 || elapsed < 18) return;

      lastRef.current = { x: e.clientX, y: e.clientY, t: now };

      const burst = Array.from({ length: 3 }).map((_, i) => ({
        id: idRef.current++,
        x: e.clientX + (Math.random() * 14 - 7),
        y: e.clientY + (Math.random() * 14 - 7),
        size: 5 + Math.random() * 5,
        delayMs: i * 35,
      }));

      setSparks((prev) => [...prev.slice(-30), ...burst]);
    };

    const cleanup = window.setInterval(() => {
      setSparks((prev) => prev.slice(-30));
    }, 700);

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.clearInterval(cleanup);
    };
  }, [x, y]);

  /* Gold center, soft rose falloff — matches site palette */
  const background = useMotionTemplate`radial-gradient(620px circle at ${x}px ${y}px, rgba(228, 184, 46, 0.11) 0%, rgba(199, 93, 111, 0.06) 42%, transparent 58%)`;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background }}
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
        {sparks.map((spark) => (
          <span
            key={spark.id}
            className="oho-cursor-glitter"
            style={{
              left: spark.x,
              top: spark.y,
              width: spark.size,
              height: spark.size,
              animationDelay: `${spark.delayMs}ms`,
            }}
          />
        ))}
      </div>
    </>
  );
}
