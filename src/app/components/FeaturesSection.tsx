import { motion } from "motion/react";
import { Code2, Palette, Zap, Smartphone } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Modern Stack",
    description: "Built with React, TypeScript, and cutting-edge web technologies",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Tailored UI/UX that perfectly matches your brand identity",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for exceptional user experience",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Seamless experience across all devices and screen sizes",
  },
];

export function FeaturesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-white tracking-wide mb-4">
            What We <span className="font-display italic text-[#FFBE50]">Offer</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Professional web development services designed to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#FFBE50]/50 hover:-translate-y-2 transition-all duration-300 ease-out"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFBE50] to-[#D88C0C] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#0a1929]" />
                </div>
                <h3 className="text-xl text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
