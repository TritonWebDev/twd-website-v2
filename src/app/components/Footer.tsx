import { motion } from "motion/react";
import { Mail, PersonStanding } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border-subtle px-6 py-16 max-w-6xl mx-auto w-full">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <motion.address
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center md:items-start not-italic"
        >
          <h3 className="flex items-center gap-3 mb-4 text-on-dark tracking-wide">
            <Mail className="w-5 h-5 text-brand" aria-hidden />
            Email Us
          </h3>
          <a
            href="mailto:triton.webdev@gmail.com"
            className="text-on-dark-subtle hover:text-brand transition-colors duration-200"
          >
            triton.webdev@gmail.com
          </a>
        </motion.address>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center md:items-start"
        >
          <h3 className="flex items-center gap-3 mb-4 text-on-dark tracking-wide">
            <PersonStanding className="w-5 h-5 text-brand" aria-hidden />
            Our Community
          </h3>
          <a
            href="https://discord.gg/9zbBpykbHT"
            className="text-on-dark-subtle hover:text-brand transition-colors duration-200"
          >
            Join our Discord!
          </a>
        </motion.section>
      </section>

      <p className="border-t border-glass-border-subtle pt-8 text-on-dark-faint text-sm text-center md:text-left">
        © 2026 Triton Web Developers. All rights reserved.
      </p>
    </footer>
  );
}
