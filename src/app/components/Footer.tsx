import { motion } from "motion/react";
import { Mail, MapPin, Phone, PersonStanding } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-glass-border-subtle px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-brand" />
              <h3 className="text-on-dark tracking-wide">Email Us</h3>
            </div>
            <a
              href="mailto:triton.webdev@gmail.com"
              className="text-on-dark-subtle hover:text-brand transition-colors duration-200"
            >
              triton.webdev@gmail.com
            </a>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <PersonStanding className="w-5 h-5 text-brand" />
              <h3 className="text-on-dark tracking-wide">Our Community</h3>
            </div>
            <a
              href="https://discord.gg/9zbBpykbHT"
              className="text-on-dark-subtle hover:text-brand transition-colors duration-200"
            >
              Join our Discord!
            </a>
          </motion.div>
        </div>

        <div className="border-t border-glass-border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-on-dark-faint text-sm">
            © 2026 Triton Web Developers. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
