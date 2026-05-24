import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underline, setUnderline] = useState({ left: 0, width: 0, top: 0 });

  const navHeight = useTransform(scrollY, [0, 100], [80, 64]);

  const updateUnderline = useCallback(() => {
    const list = navListRef.current;
    const link = linkRefs.current[location.pathname];
    if (!list || !link) return;

    const listRect = list.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setUnderline({
      left: linkRect.left - listRect.left,
      width: linkRect.width,
      top: linkRect.bottom - listRect.top - 1,
    });
  }, [location.pathname]);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 20));
    return unsub;
  }, [scrollY]);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    updateUnderline();
    const list = navListRef.current;
    if (!list) return;

    const observer = new ResizeObserver(updateUnderline);
    observer.observe(list);
    window.addEventListener("resize", updateUnderline);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateUnderline);
    };
  }, [updateUnderline, scrolled]);

  const isActive = (path: string) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/team", label: "Team" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        style={{ height: navHeight }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-nav border-b border-glass-border-subtle" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <span className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between w-full">
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <motion.img
              src={new URL("/logo.webp", import.meta.url).href}
              alt="Triton Web Developers"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-10 w-10 object-contain"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-on-dark tracking-wide hidden sm:block"
            >
              Triton Web Developers
            </motion.span>
          </Link>

          {/* Desktop nav */}
          <ul
            ref={navListRef}
            className="hidden md:flex items-center gap-8 list-none p-0 m-0 relative"
          >
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  ref={(el) => {
                    linkRefs.current[to] = el;
                  }}
                  to={to}
                  onClick={scrollToTop}
                  className={`text-sm tracking-wide transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    isActive(to) ? "text-brand" : "text-on-dark hover:text-on-dark-strong"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <motion.span
              aria-hidden
              className="absolute h-px bg-brand pointer-events-none"
              initial={false}
              animate={{
                left: underline.left,
                width: underline.width,
                top: underline.top,
                opacity: underline.width > 0 ? 1 : 0,
              }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            />
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </span>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-navy-deep border-b border-glass-border backdrop-blur-xl px-6 py-6"
          >
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={scrollToTop}
                    className={`text-base block py-2 border-b border-glass-border-subtle transition-colors duration-200 ${
                      isActive(to) ? "text-brand" : "text-on-dark-subtle hover:text-on-dark"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}