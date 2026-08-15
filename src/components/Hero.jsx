import React, { useState } from "react";
import { ArrowRight, Download, Linkedin, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "../utils/scroll";
import { useLanguage } from "../vocab/useLanguage";

export default function Hero() {
  const { data, vocab } = useLanguage();
  const { personalInfo } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dot-pattern"
    >
      {/* Abstract background gradient decorations */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: "10s" }} />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-accent/15 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: "8s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Heading and Info */}
        <motion.div
          className="lg:col-span-7 flex flex-col text-left justify-center order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-bg-secondary border border-border-custom mb-6">
            <Cpu className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: "6s" }} />
            <span className="text-sm font-semibold text-primary tracking-wide">
              {personalInfo.title}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] text-text-primary mb-6"
          >
            {vocab.hero.titleBefore}{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {vocab.hero.titleHighlight}
            </span>{" "}
            {vocab.hero.titleAfter}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl font-normal"
          >
            {vocab.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center mb-8">
            <button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold flex items-center gap-2 group transition-all duration-300 shadow-premium hover:shadow-soft hover:translate-y-[-2px]"
            >
              {vocab.hero.explore}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 rounded-xl border border-border-custom bg-white hover:bg-bg-secondary text-text-primary font-semibold flex items-center gap-2 transition-all duration-300 hover:translate-y-[-2px]"
            >
              {vocab.hero.contact}
            </button>
          </motion.div>

          {/* Social and Resume download */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6 pt-4 border-t border-border-custom"
          >
            <a
              href="https://www.linkedin.com/in/mohamed-ahmed-trigui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
              {vocab.hero.linkedin}
            </a>
            <a
              href="/cv_Ahmed_Trigui_vf.pdf"
              download="CV_Mohamed_Ahmed_TRIGUI.pdf"
              className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-primary transition-colors duration-200"
            >
              <Download className="w-5 h-5 text-accent animate-bounce" />
              {vocab.hero.resume}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Picture */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.2 }}
          >
            {/* Glowing halos */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-20 -z-10 scale-95 animate-pulse" style={{ animationDuration: "6s" }} />
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl -z-10 scale-105" />

            {/* Profile Frame with custom organic border radius */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden border-2 border-primary/20 shadow-premium bg-white group transition-all duration-500 hover:rounded-[50%]">
              {imgError ? (
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex flex-col items-center justify-center text-white">
                  <span className="text-6xl font-heading font-extrabold tracking-tight">MT</span>
                  <span className="text-sm font-medium mt-2">Mohamed Ahmed TRIGUI</span>
                </div>
              ) : (
                <img
                  src="/profile.png"
                  alt="Mohamed Ahmed TRIGUI Portrait"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            {/* Floating technology items/badges */}
            <motion.div
              className="absolute -top-4 -right-4 p-3 bg-white rounded-2xl shadow-soft border border-border-custom flex items-center gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#3776AB]" /> {/* Python Color */}
              <span className="text-xs font-bold text-text-primary">Python</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-8 p-3 bg-white rounded-2xl shadow-soft border border-border-custom flex items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#61DAFB]" /> {/* React Color */}
              <span className="text-xs font-bold text-text-primary">React</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 right-12 p-3 bg-white rounded-2xl shadow-soft border border-border-custom flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.2 }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent" /> {/* Custom Accent Color */}
              <span className="text-xs font-bold text-text-primary">LangGraph</span>
            </motion.div>
            
            <motion.div
              className="absolute bottom-1/3 -right-6 p-3 bg-white rounded-2xl shadow-soft border border-border-custom flex items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#EE4C2C]" /> {/* PyTorch Color */}
              <span className="text-xs font-bold text-text-primary">PyTorch</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
