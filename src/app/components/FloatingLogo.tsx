import { type RefObject } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

type FloatingLogoProps = {
  scrollTargetRef: RefObject<HTMLElement | null>;
};

export function FloatingLogo({ scrollTargetRef }: FloatingLogoProps) {
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start start", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div
      className="w-full flex justify-center pt-10"
      style={{ perspective: 1100, perspectiveOrigin: "50% 50%" }}
    >
      <motion.figure
        style={{
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative m-0 flex items-center justify-center size-64 md:size-96"
      >
        <motion.img
          src={new URL("/logo.webp", import.meta.url).href}
          alt="Triton Logo"
          draggable={false}
          className="relative z-10 block w-full h-full object-contain object-center drop-shadow-2xl"
          style={{ backfaceVisibility: "hidden" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.span
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[85%] bg-brand/20 rounded-full blur-3xl pointer-events-none"
          style={{ transform: "translateZ(-40px)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.figure>
    </div>
  );
}
