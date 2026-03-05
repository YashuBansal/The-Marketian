import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500 ${scrolled ? "shadow-2xl shadow-black/20" : ""}`}>
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              {/* Placeholder for the logo image. User should replace the src with their actual logo file path */}
              <img 
                src="https://picsum.photos/seed/marketian-logo/200/200" 
                alt="TheMarketian Logo" 
                className="w-full h-full object-contain rounded-lg group-hover:scale-110 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-display font-bold text-base sm:text-xl tracking-tighter">
                TheMarketian
              </span>
              <span className="text-[6px] sm:text-[8px] text-accent font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Build . Scale . Dominate
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-accent ${
                  location.pathname === link.path ? "text-accent" : "text-white/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-white text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
            >
              Consult
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-medium border-b border-white/5 ${
                    location.pathname === link.path ? "text-secondary-bg" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-accent text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
