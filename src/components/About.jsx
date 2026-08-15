import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Layers, Eye, Bot, Sparkles } from "lucide-react";
import { useLanguage } from "../vocab/useLanguage";

const iconMap = {
  "Software Engineering": Terminal,
  "Artificial Intelligence": Cpu,
  "Full-Stack Development": Layers,
  "Generative AI & LLMs": Sparkles,
  "Computer Vision": Eye,
  "AI Agents & RAG": Bot,
  "Ingenierie logicielle": Terminal,
  "Intelligence Artificielle": Cpu,
  "Developpement Full-Stack": Layers,
  "IA generative & LLMs": Sparkles,
  "Agents IA & RAG": Bot
};

export default function About() {
  const { data } = useLanguage();
  const { about } = data;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-bg-secondary relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary mb-4"
          >
            {about.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-text-secondary text-lg leading-relaxed"
          >
            {about.content}
          </motion.p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.highlightTopics.map((topic, index) => {
            const Icon = iconMap[topic.title] || Cpu;
            return (
              <motion.div
                key={topic.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl shadow-soft flex flex-col text-left group hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow accent on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl" />
                
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-text-primary mb-3 group-hover:text-primary transition-colors duration-200">
                  {topic.title}
                </h3>
                
                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {topic.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
