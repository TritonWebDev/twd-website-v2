import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function FloatingLogo() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };

  const rotateX = useSpring(
    useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [15, -15]),
    springConfig
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-15, 15]),
    springConfig
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.figure
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative m-0"
    >
      <motion.img
        src={new URL("/logo.webp", import.meta.url).href}
        alt="Triton Logo"
        className="w-64 h-64 md:w-96 md:h-96 drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.span
        aria-hidden
        className="absolute inset-0 bg-brand/20 rounded-full blur-3xl block"
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
  );
}
