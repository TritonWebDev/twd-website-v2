import { useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const [featuresEl, setFeaturesEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setFeaturesEl(document.getElementById("features"));
  }, []);

  const featuresInView = useInView(
    { current: featuresEl },
    { amount: 0.05, margin: "-20% 0px 0px 0px" }
  );

  const scrollDown = () => {
    featuresEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {!featuresInView && (
        <motion.button
          type="button"
          onClick={scrollDown}
          aria-label="Scroll down to see more"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, exit: { duration: 1 } }}
          className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#6A86AB] hover:text-[#a8e8ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7dd4fc]/60 rounded-full p-2 transition-colors duration-200"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block"
          >
            <ChevronDown className="w-8 h-8 stroke-[2.5]" aria-hidden />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}