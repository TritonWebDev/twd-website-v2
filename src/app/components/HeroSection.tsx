import { motion } from "motion/react";
import { FloatingLogo } from "./FloatingLogo";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      <FloatingLogo />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mt-12 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl text-[#FFBE50] tracking-wide leading-tight">
          We build <span className="font-display italic">Websites</span>.
        </h1>
        <p className="text-2xl md:text-4xl text-white/90 tracking-wide mt-4">
          For students, <span className="font-display italic text-white">by students</span>.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12"
      >
        <Link to="/contact">
          <button className="px-8 py-4 bg-gradient-to-r from-[#FFBE50] to-[#D88C0C] text-[#0a1929] rounded-xl tracking-wide flex items-center gap-3 hover:shadow-lg hover:shadow-[#FFBE50]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 ease-out group">
            <span className="text-lg">Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
