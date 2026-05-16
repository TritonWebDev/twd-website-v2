import { motion } from "motion/react";
import { Mail, MapPin, Phone, PersonStanding } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-16">
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
              <Mail className="w-5 h-5 text-[#FFBE50]" />
              <h3 className="text-white tracking-wide">Email Us</h3>
            </div>
            <a
              href="mailto:triton.webdev@gmail.com"
              className="text-white/60 hover:text-[#FFBE50] transition-colors duration-200"
            >
              triton.webdev@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-[#FFBE50]" />
              <h3 className="text-white tracking-wide">Campus Hub</h3>
            </div>
            <p className="text-white/60 text-center md:text-left">
              University of California, San Diego
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <PersonStanding className="w-5 h-5 text-[#FFBE50]" />
              <h3 className="text-white tracking-wide">Our Community</h3>
            </div>
            <a
              href="https://discord.gg/9zbBpykbHT"
              className="text-white/60 hover:text-[#FFBE50] transition-colors duration-200"
            >
              Join our Discord!
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Triton Web Developers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-[#FFBE50] text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-[#FFBE50] text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
