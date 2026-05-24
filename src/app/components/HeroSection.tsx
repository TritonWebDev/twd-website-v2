import { useRef } from "react";
import { motion } from "motion/react";
import { FloatingLogo } from "./FloatingLogo";
import { ScrollIndicator } from "./ScrollIndicator";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const MotionLink = motion.create(Link);

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-visible"
    >
      <FloatingLogo scrollTargetRef={heroRef} />

      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl text-brand tracking-tight leading-tight italic">
          We build Websites.
        </h1>
        <p className="text-xl md:text-3xl text-white mt-2 font-light tracking-wide">
          For students, by students.
        </p>
      </motion.header>

      <MotionLink
        to="/contact"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-2 inline-flex items-center gap-3 px-6 py-3 bg-brand text-on-brand tracking-wide hover:shadow-lg hover:shadow-brand/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out group text-base font-medium"
        style={{ borderRadius: "2px" }}
      >
        <span>Start Your Project</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </MotionLink>

      <ScrollIndicator />
    </section>
  );
}
