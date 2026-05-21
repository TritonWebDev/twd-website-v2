import { motion } from "motion/react";
import { FloatingLogo } from "./FloatingLogo";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const MotionLink = motion.create(Link);

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      <FloatingLogo />

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mt-12 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl text-brand tracking-wide leading-tight font-display italic">
          We build Websites.
        </h1>
        <p className="text-2xl md:text-4xl text-on-dark-strong tracking-wide mt-4">
          For students, by students.
        </p>
      </motion.header>

      <MotionLink
        to="/contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-brand hover:bg-brand-dark text-on-brand rounded-xl tracking-wide hover:shadow-lg hover:shadow-brand/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out group"
      >
        <span className="text-lg">Start Your Project</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
      </MotionLink>
    </section>
  );
}
