import { motion } from "motion/react";
import { Code2, Palette, Ban, Infinity } from "lucide-react";

const features = [
  {
    icon: Ban,
    title: "No Code Required",
    description:
      "We handle all the coding. You can even update your site yourself without touching a single line of code.",
  },
  {
    icon: Code2,
    title: "Modern Stack",
    description: "Built with React, TypeScript, and the latest web technologies for a fast, future-proof site.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Tailored UI/UX that perfectly matches your brand identity and resonates with your audience.",
  },
  {
    icon: Infinity,
    title: "Lifelong Support",
    description: "We're here long after launch. Reach out anytime for updates, changes, or new features.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 max-w-6xl w-full mx-auto"
    >
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 w-full"
      >
        <p className="text-brand text-xs uppercase tracking-[0.3em] mb-4 font-medium">
          What We Offer
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-4xl md:text-5xl text-on-dark leading-tight">
            Everything you need,{" "}
            <span className="italic text-brand">nothing you don't.</span>
          </h2>
        </div>
      </motion.header>

      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-glass-border list-none p-0 m-0">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <li key={feature.title} className="bg-page">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative p-8 h-full flex flex-col group overflow-hidden"
              >
                {/* Top accent line that grows on hover */}
                <span
                  aria-hidden
                  className="absolute top-0 left-0 w-full h-[2px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />

                <span aria-hidden className="mb-6">
                  <Icon className="w-6 h-6 text-brand/70 group-hover:text-brand transition-colors duration-300" />
                </span>

                <h3 className="text-base text-on-dark mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-on-dark-subtle text-sm leading-relaxed font-light mt-auto">
                  {feature.description}
                </p>
              </motion.article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}