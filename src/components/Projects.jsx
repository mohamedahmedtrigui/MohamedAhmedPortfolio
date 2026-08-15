import React, { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  FolderKanban,
  Layers3,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "../vocab/useLanguage";

function getProjectTone(project) {
  if (project.focusLabel) {
    return {
      label: project.focusLabel,
      badge: "bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE]",
      icon: "text-[#7C3AED]",
    };
  }

  if (project.categories?.includes("fullstack") && project.categories?.includes("ai")) {
    return {
      label: "AI + Full-Stack",
      badge: "bg-[#EEF2FF] text-[#3730A3] border-[#C7D2FE]",
      icon: "text-[#4F46E5]",
    };
  }

  if (project.categories?.includes("cv")) {
    return {
      label: "Computer Vision",
      badge: "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]",
      icon: "text-[#059669]",
    };
  }

  if (project.categories?.includes("fullstack")) {
    return {
      label: "Full-Stack",
      badge: "bg-[#FFF7ED] text-[#C2410C] border-[#FDBA74]",
      icon: "text-[#EA580C]",
    };
  }

  return {
    label: "Machine Learning",
    badge: "bg-[#F0F9FF] text-[#0369A1] border-[#BAE6FD]",
    icon: "text-[#0284C7]",
  };
}

function ProjectVisual({ project }) {
  const [error, setError] = useState(false);
  const tone = getProjectTone(project);

  if (error || !project.image) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0B1220] p-5 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-[#38BDF8]/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#F97316]/20 blur-3xl" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10">
              <Layers3 className="h-5 w-5" />
            </div>
            <span className="rounded-md border border-white/15 bg-white/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase text-white/80">
              {tone.label}
            </span>
          </div>
          <div>
            <p className="font-heading text-lg font-extrabold leading-tight">
              {project.name}
            </p>
            <p className="mt-2 max-w-[15rem] text-xs leading-relaxed text-white/68">
              {project.headline}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.name}
      loading="lazy"
      onError={() => setError(true)}
      className="h-full w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.04]"
    />
  );
}

function ProjectCard({ project, onSelect, vocab }) {
  const tone = getProjectTone(project);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.28 }}
      onClick={() => onSelect(project)}
      className="group flex h-full min-h-[500px] cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-[0_18px_45px_-34px_rgba(15,23,42,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_26px_70px_-38px_rgba(9,105,218,0.55)]"
    >
      <div className="relative h-56 shrink-0 overflow-hidden bg-slate-950">
        <ProjectVisual project={project} />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-white/0" />
        {project.featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-white/45 bg-white/90 px-2.5 py-1 text-[11px] font-extrabold text-slate-950 shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#F59E0B]" />
            {vocab.projects.featured}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-bold ${tone.badge}`}>
            <FolderKanban className={`h-3.5 w-3.5 ${tone.icon}`} />
            {tone.label}
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>

        <h3 className="font-heading text-[1.35rem] font-extrabold leading-tight text-text-primary transition-colors duration-200 group-hover:text-primary">
          {project.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-text-secondary">
          <span>{project.organization}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {project.period}
          </span>
        </div>

        <p className="mt-4 font-heading text-sm font-bold leading-snug text-slate-900">
          {project.headline}
        </p>

        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
              +{project.technologies.length - 5} {vocab.projects.more}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { data, vocab } = useLanguage();
  const { projects } = data;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#F6FAFF] py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-4 inline-flex items-center gap-2 rounded-md border border-primary/15 bg-white px-3 py-1 text-xs font-extrabold uppercase text-primary shadow-soft"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#F59E0B]" />
              {vocab.projects.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-heading text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl"
            >
              {vocab.projects.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.05 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary"
            >
              {vocab.projects.description}
            </motion.p>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
                vocab={vocab}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            vocab={vocab}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
