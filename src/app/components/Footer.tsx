import { motion } from "motion/react";
import { Mail, MessageSquare, ExternalLink, Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border-subtle bg-navy-deep/20 w-full mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h2 className="font-serif text-2xl font-semibold text-brand tracking-tight mb-3">
              Triton Web Developers
            </h2>
            <p className="text-on-dark-subtle text-sm max-w-sm leading-relaxed">
              We are an organization founded in 2025 at UC San Diego. Our main mission is to build free, interactive websites for students and other organizations! 
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="md:col-span-4 md:col-start-9 flex flex-col items-center md:items-end text-center md:text-right"          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm w-full flex flex-col items-center md:items-end">
              <li>
                <a
                  href="mailto:triton.webdev@gmail.com"
                  className="flex items-center gap-2.5 text-on-dark-subtle hover:text-brand transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-on-dark-faint group-hover:text-brand transition-colors" />
                  <span>triton.webdev@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/9zbBpykbHT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-on-dark-subtle hover:text-brand transition-colors duration-200 group"
                >
                  <MessageSquare className="w-4 h-4 text-on-dark-faint group-hover:text-brand transition-colors" />
                  <span className="flex items-center gap-1">
                    Join our Discord <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-glass-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-dark-faint">
          <p>© {currentYear} Triton Web Developers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">UC San Diego</span>
          </div>
        </div>
      </div>
    </footer>
  );
}