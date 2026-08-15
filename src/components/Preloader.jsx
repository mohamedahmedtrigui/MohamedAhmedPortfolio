import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Quick 1.7 second total duration to make it energetic and not keep recruiters waiting
    const timer = setTimeout(() => {
      onComplete();
    }, 1700);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#030712] z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(15px)",
        transition: { ease: "easeInOut", duration: 0.5 } 
      }}
    >
      {/* Sci-fi Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      {/* Glowing background halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Cybernetic Neural Plexus SVG Animation */}
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 mb-8 flex items-center justify-center">
        {/* Pulsing glow background behind plexus */}
        <motion.div 
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute w-28 h-28 bg-gradient-to-tr from-primary to-accent rounded-full blur-xl -z-10"
        />

        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          {/* Connecting Lines (Impulse Pathways) */}
          <motion.line 
            x1="50" y1="50" x2="25" y2="30" 
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4"
          />
          <motion.line 
            x1="50" y1="50" x2="75" y2="30" 
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4"
          />
          <motion.line 
            x1="50" y1="50" x2="80" y2="60" 
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4"
          />
          <motion.line 
            x1="50" y1="50" x2="20" y2="65" 
            stroke="currentColor" strokeWidth="0.7" strokeOpacity="0.4"
          />
          <motion.line 
            x1="25" y1="30" x2="75" y2="30" 
            stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"
          />
          <motion.line 
            x1="75" y1="30" x2="80" y2="60" 
            stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"
          />
          <motion.line 
            x1="20" y1="65" x2="80" y2="60" 
            stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2"
          />

          {/* Electrical Signals (Moving Dashes) */}
          <motion.path 
            d="M 50,50 L 25,30 M 50,50 L 75,30 M 50,50 L 80,60 M 50,50 L 20,65" 
            fill="none" 
            stroke="#0969DA" 
            strokeWidth="1.2"
            strokeDasharray="10 40"
            animate={{ strokeDashoffset: [0, -50] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          />

          {/* Outer Orbital Ring */}
          <motion.circle 
            cx="50" cy="50" r="42" 
            fill="none" 
            stroke="url(#accentGrad)" 
            strokeWidth="0.5" 
            strokeDasharray="5 15"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />

          {/* Intersecting Nodes */}
          {/* Node 1: Left Top */}
          <motion.circle 
            cx="25" cy="30" r="2.5" 
            fill="#38BDF8"
            animate={{ scale: [1, 1.4, 1] }} 
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
          {/* Node 2: Right Top */}
          <motion.circle 
            cx="75" cy="30" r="3" 
            fill="#0969DA"
            animate={{ scale: [1, 1.5, 1] }} 
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.3 }}
          />
          {/* Node 3: Right Bottom */}
          <motion.circle 
            cx="80" cy="60" r="2.5" 
            fill="#38BDF8"
            animate={{ scale: [1, 1.3, 1] }} 
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut", delay: 0.6 }}
          />
          {/* Node 4: Left Bottom */}
          <motion.circle 
            cx="20" cy="65" r="3.5" 
            fill="#0969DA"
            animate={{ scale: [1, 1.4, 1] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.9 }}
          />

          {/* Center Cognitive Core */}
          <motion.circle 
            cx="50" cy="50" r="6" 
            fill="url(#coreGrad)"
            animate={{ scale: [0.95, 1.15, 0.95] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
          <circle cx="50" cy="50" r="2" fill="#FFFFFF" />

          {/* Gradients declarations */}
          <defs>
            <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0969DA" />
            </linearGradient>
            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0969DA" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Futuristic identity presentation */}
      <div className="flex flex-col items-center gap-2 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="font-heading font-extrabold text-2xl sm:text-3xl tracking-[0.25em] text-white uppercase text-center bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent"
        >
          Mohamed Ahmed TRIGUI
        </motion.h1>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
          className="h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="font-mono text-accent text-xs tracking-[0.3em] uppercase text-center font-bold mt-1"
        >
          Artificial Intelligence & Software Engineer
        </motion.p>
      </div>
    </motion.div>
  );
}
