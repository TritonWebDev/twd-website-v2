import { motion, useScroll, useTransform } from "motion/react";
import { Link, useLocation } from "react-router";

export function Navigation() {
  const { scrollY } = useScroll();
  const location = useLocation();

  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      style={{ height: navHeight }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-nav border-b border-glass-border-subtle"
    >
      <span className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-3">
          <motion.img
            src={new URL("/logo.webp", import.meta.url).href}
            alt="Triton Web Developers"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-10 w-10 object-contain"
          />
          <span className="text-on-dark tracking-wide">Triton Web Developers</span>
        </Link>

        <ul className="flex items-center gap-8 list-none p-0 m-0">
          <li>
            <Link
              to="/"
              className={`text-sm tracking-wide transition-colors duration-200 ${
                isActive("/") ? "text-brand" : "text-on-dark"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className={`text-sm tracking-wide transition-colors duration-200 ${
                isActive("/team") ? "text-brand" : "text-on-dark"
              }`}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`text-sm tracking-wide transition-colors duration-200 ${
                isActive("/projects") ? "text-brand" : "text-on-dark"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`text-sm tracking-wide transition-colors duration-200 ${
                isActive("/contact") ? "text-brand" : "text-on-dark"
              }`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="inline-flex px-6 py-2.5 bg-brand text-on-brand rounded-lg tracking-wide transition-all duration-200 ease-out hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </span>
    </motion.nav>
  );
}
