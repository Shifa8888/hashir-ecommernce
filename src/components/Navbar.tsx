import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { homeSectionLinks, primaryNav } from "../data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const transparent = location.pathname === "/" && !isScrolled;
  const logoClass = transparent ? "text-white" : "text-navy-900";
  const navBase = transparent ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-primary-600";

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          transparent ? "bg-transparent" : "border-b border-gray-100 bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/25">
                <Zap className="h-5 w-5" fill="white" />
              </div>
              <span className={`text-xl font-bold tracking-tight font-[Poppins] ${logoClass}`}>
                Nexa<span className="text-primary-500">Tech</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? transparent
                          ? "bg-white/10 text-white"
                          : "bg-primary-50 text-primary-600"
                        : navBase
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/#services"
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${navBase}`}
              >
                Sections
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-primary-500/35"
              >
                Let’s talk
              </Link>
            </div>

            <button
              onClick={() => setIsMobileOpen((value) => !value)}
              className={`inline-flex rounded-xl p-2.5 lg:hidden ${transparent ? "text-white hover:bg-white/10" : "text-navy-900 hover:bg-gray-100"}`}
              aria-label="Toggle navigation"
            >
              {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-6">
                <span className="text-xl font-bold text-navy-900 font-[Poppins]">
                  Nexa<span className="text-primary-500">Tech</span>
                </span>
                <button onClick={() => setIsMobileOpen(false)} className="rounded-xl p-2 text-gray-500 hover:bg-gray-100">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4">
                <p className="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Pages</p>
                <div className="mt-3 space-y-1">
                  {primaryNav.map((item, index) => (
                    <motion.div key={item.name} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                          `block rounded-xl px-4 py-3 text-sm font-medium ${
                            isActive ? "bg-primary-50 text-primary-600" : "text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 p-4">
                <p className="px-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Home sections</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {homeSectionLinks.map((item) => (
                    <a key={item.name} href={item.href} className="rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <Link
                  to="/contact"
                  className="block rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary-500/20"
                >
                  Start your project
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
