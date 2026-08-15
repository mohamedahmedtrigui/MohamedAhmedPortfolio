import React from "react";
import { Terminal, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "../vocab/useLanguage";

export default function Footer() {
  const { data, vocab } = useLanguage();
  const { personalInfo } = data;

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-white border-t border-border-custom relative py-12">
      {/* Scroll to Top button floating inside footer */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={handleScrollTop}
          className="p-3 rounded-full bg-white hover:bg-primary hover:text-white text-text-primary border border-border-custom shadow-soft hover:shadow-premium transition-all duration-300 group hover:-translate-y-1"
          aria-label={vocab.footer.scrollTop}
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name and Professional Title */}
        <div className="flex flex-col text-center md:text-left gap-1">
          <div className="flex items-center justify-center md:justify-start gap-2 font-heading font-bold text-lg text-text-primary">
            <Terminal className="w-4 h-4 text-primary" />
            <span>{personalInfo.name}</span>
          </div>
          <p className="text-xs text-text-secondary font-medium">
            {personalInfo.title}
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-secondary/80 font-normal order-3 md:order-2">
          &copy; {new Date().getFullYear()} Mohamed Ahmed TRIGUI. {vocab.footer.rights}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-bg-secondary hover:bg-primary hover:text-white text-text-secondary transition-all duration-200 border border-border-custom"
            aria-label={vocab.footer.linkedinAria}
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-full bg-bg-secondary hover:bg-primary hover:text-white text-text-secondary transition-all duration-200 border border-border-custom"
            aria-label={vocab.footer.emailAria}
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
