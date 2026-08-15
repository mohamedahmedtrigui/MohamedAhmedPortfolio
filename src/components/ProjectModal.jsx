import React, { useState } from "react";
import { X, Calendar, Tag, Briefcase, Maximize, Minimize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectImageCard({ src, alt }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="w-full h-full bg-[#080d1a] relative flex flex-col items-center justify-center p-6 overflow-hidden select-none">
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        {/* Pulsing ambient glow */}
        <div className="absolute w-32 h-32 bg-primary/25 rounded-full blur-2xl animate-pulse" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
            <span className="font-mono text-base font-bold">&lt;/&gt;</span>
          </div>
          <span className="font-heading font-extrabold text-white text-xs tracking-wider uppercase mb-1">
            {alt} Engine
          </span>
          <span className="font-mono text-[9px] text-accent uppercase tracking-widest">
            AI & Full-Stack Platform
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className="object-cover object-top w-full h-full"
    />
  );
}

export default function ProjectModal({ project, onClose, vocab }) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!project) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Semi-transparent backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0F172A]/50 backdrop-blur-md"
        />

        {/* Modal Card content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-3xl shadow-premium border border-border-custom overflow-y-auto no-scrollbar z-10 flex flex-col"
        >
          {/* Sticky Close Button overlaying banner */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-primary hover:text-white border border-border-custom/50 shadow-soft text-text-primary transition-all duration-200 z-30 cursor-pointer"
            aria-label={vocab.projects.modal.close}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Full-bleed Project Screenshot Banner */}
          {project.image && (
            <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-slate-900 border-b border-border-custom shrink-0 group">
              <ProjectImageCard src={project.image} alt={project.name} />
              {/* Premium blending gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none z-10" />
              
              {/* Zoom Action overlay */}
              <div 
                onClick={() => setIsZoomed(true)}
                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-zoom-in z-20"
              >
                <span className="px-4 py-2 bg-white/95 text-primary text-xs font-bold rounded-full shadow-premium flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 select-none">
                  <Maximize className="w-3.5 h-3.5" />
                  {vocab.projects.modal.zoom}
                </span>
              </div>
            </div>
          )}

          {/* Modal Main Body */}
          <div className="px-8 pt-8 pb-10 flex flex-col text-left">
            {/* Project Type Badge */}
            <div className="inline-flex self-start px-3 py-1 rounded-full bg-bg-secondary text-primary text-xs font-bold border border-border-custom mb-4">
              {project.type}
            </div>

            {/* Project Name */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary mb-2">
              {project.name}
            </h2>

            {/* Headline */}
            <p className="text-primary font-heading font-semibold text-lg sm:text-xl mb-6">
              {project.headline}
            </p>

            {/* Meta Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-bg-secondary border border-border-custom mb-6">
              <div className="flex items-center gap-2.5 text-sm text-text-secondary">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>
                  <strong>{vocab.projects.modal.organization}</strong> {project.organization}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-text-secondary">
                <Calendar className="w-4 h-4 text-primary" />
                <span>
                  <strong>{vocab.projects.modal.timeline}</strong> {project.period}
                </span>
              </div>
            </div>

            {/* Description Detail */}
            <div className="mb-8">
              <h4 className="font-heading font-bold text-lg text-text-primary mb-3">
                {vocab.projects.modal.descriptionTitle}
              </h4>
              <p className="text-text-secondary text-base leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Technologies Stack */}
            <div>
              <h4 className="font-heading font-bold text-lg text-text-primary mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                {vocab.projects.modal.stack}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-sm font-semibold rounded-xl bg-bg-secondary text-text-primary border border-border-custom hover:border-primary/30 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-screen Lightbox Zoom Modal */}
      <AnimatePresence>
        {isZoomed && project.image && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
              className="absolute inset-0 cursor-zoom-out"
            />
            
            {/* Close Zoom button */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-[110]"
              aria-label={vocab.projects.modal.closeZoom}
            >
              <Minimize className="w-6 h-6" />
            </button>

            {/* Full Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-full max-h-full overflow-auto rounded-xl z-[105]"
            >
              <img 
                src={project.image} 
                alt={`${project.name} Screenshot Zoom`}
                loading="lazy"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-premium border border-white/10"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
