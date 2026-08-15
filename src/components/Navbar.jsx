import React, { useState, useEffect } from "react";
import { Globe2, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../utils/scroll";
import { useLanguage } from "../vocab/useLanguage";

const NAV_ITEMS = [
  { id: "home", target: "#home" },
  { id: "about", target: "#about" },
  { id: "experience", target: "#experience" },
  { id: "projects", target: "#projects" },
  { id: "skills", target: "#skills" },
  { id: "education", target: "#education" },
  { id: "certifications", target: "#certifications" },
  { id: "contact", target: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, vocab } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Pin to last section when user is at the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        setActiveSection("contact");
        return;
      }

      // Section tracker for active indicator
      const scrollPosition = window.scrollY + 120; // offset for nav height
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(target, 80);
    setActiveSection(target.substring(1));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border-custom shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Identity */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 text-primary font-heading font-bold text-xl group"
        >
          <div className="p-1.5 rounded-lg bg-bg-secondary group-hover:bg-primary transition-colors duration-300">
            <Terminal className="w-5 h-5 group-hover:text-white text-primary transition-colors duration-300" />
          </div>
          <span className="text-text-primary tracking-tight">
            Mohamed<span className="text-primary">.AI</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const targetId = item.target.substring(1);
            const isActive = activeSection === targetId;
            return (
              <a
                key={item.id}
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-bg-secondary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {vocab.nav[item.id]}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 rounded-full border border-border-custom bg-white/85 px-3.5 py-2 text-sm font-bold text-text-primary shadow-soft backdrop-blur transition-all duration-300 hover:border-primary/35 hover:text-primary"
            aria-label={vocab.switchAria}
          >
            <Globe2 className="h-4 w-4 text-primary" />
            {vocab.switchLabel}
          </button>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold tracking-wide shadow-soft transition-all duration-300 hover:scale-105"
          >
            {vocab.nav.cta}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-bg-secondary transition-colors duration-200"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-border-custom shadow-premium overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 gap-3">
              {NAV_ITEMS.map((item) => {
                const targetId = item.target.substring(1);
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={item.id}
                    href={item.target}
                    onClick={(e) => handleNavClick(e, item.target)}
                    className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200 ${
                      isActive
                        ? "bg-bg-secondary text-primary"
                        : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
                    }`}
                  >
                    {vocab.nav[item.id]}
                  </a>
                );
              })}
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-white px-4 py-3 text-base font-bold text-text-primary transition-colors duration-200 hover:bg-bg-secondary hover:text-primary"
                aria-label={vocab.switchAria}
              >
                <Globe2 className="h-5 w-5 text-primary" />
                {language === "eng" ? "Francais" : "English"}
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 w-full py-3 text-center rounded-xl bg-primary hover:bg-primary-dark text-white font-bold transition-all duration-200 shadow-soft"
              >
                {vocab.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
