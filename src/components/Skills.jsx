import React from "react";
import { Cpu, Terminal, Database, Sparkles, Layers, ShieldCheck, GitBranch, Binary } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../vocab/useLanguage";

const categoryMeta = {
  programming: {
    icon: Binary,
    color: "from-blue-500 to-indigo-500"
  },
  frontend_backend: {
    icon: Layers,
    color: "from-cyan-500 to-blue-500"
  },
  databases: {
    icon: Database,
    color: "from-teal-500 to-emerald-500"
  },
  machine_learning: {
    icon: Cpu,
    color: "from-purple-500 to-pink-500"
  },
  deep_learning_computer_vision: {
    icon: Terminal,
    color: "from-orange-500 to-red-500"
  },
  generative_ai: {
    icon: Sparkles,
    color: "from-violet-600 to-indigo-600"
  },
  backend_api: {
    icon: ShieldCheck,
    color: "from-sky-500 to-blue-600"
  },
  devops: {
    icon: GitBranch,
    color: "from-slate-600 to-zinc-700"
  }
};

export default function Skills() {
  const { data, vocab } = useLanguage();
  const { skills } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary mb-4"
          >
            {vocab.skills.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"
          />
          <p className="text-text-secondary text-lg leading-relaxed">
            {vocab.skills.description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {Object.entries(skills).map(([key, list]) => {
            const meta = categoryMeta[key] || { icon: Cpu, color: "from-blue-500 to-indigo-500" };
            const Icon = meta.icon;
            const label = vocab.skills.categories[key] || key;
            
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                className="glass-panel p-6 rounded-2xl shadow-soft hover:shadow-premium border border-border-custom hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-white shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-text-primary group-hover:text-primary transition-colors duration-200 leading-tight">
                      {label}
                    </h3>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {list.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-bg-secondary text-text-primary border border-border-custom hover:bg-white hover:border-primary/20 hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Decorative border bar at bottom */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${meta.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
