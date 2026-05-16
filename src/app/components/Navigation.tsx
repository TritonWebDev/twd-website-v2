import { motion, useScroll, useTransform } from "motion/react";
import { Link, useLocation } from "react-router";

export function Navigation() {
  const { scrollY } = useScroll();
  const location = useLocation();

  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const navOpacity = useTransform(scrollY, [0, 50], [0.8, 0.95]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      style={{ height: navHeight, opacity: navOpacity }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={new URL("/logo.png", import.meta.url).href}
              alt="Triton Web Developers"
              className="h-10 w-10 object-contain"
            />
            <span className="text-white tracking-wide">Triton Web Developers</span>
          </motion.div>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm tracking-wide transition-colors duration-200 ${
              isActive("/")
                ? "text-[#FFBE50]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/team"
            className={`text-sm tracking-wide transition-colors duration-200 ${
              isActive("/team")
                ? "text-[#FFBE50]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Team
          </Link>
          <Link
            to="/contact"
            className={`text-sm tracking-wide transition-colors duration-200 ${
              isActive("/contact")
                ? "text-[#FFBE50]"
                : "text-white/80 hover:text-white"
            }`}
          >
            Contact
          </Link>

          <Link to="/contact">
            <button className="px-6 py-2.5 bg-[#FFBE50] text-[#0a1929] rounded-lg tracking-wide transition-all duration-200 ease-out hover:bg-[#D88C0C] hover:scale-[1.02] active:scale-[0.98]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
