import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="education" className="py-24 bg-bg-secondary relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary mb-4"
          >
            Education & Background
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"
          />
        </div>

        {/* Education Timeline/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
              className="glass-panel p-8 rounded-3xl shadow-soft hover:shadow-premium border border-border-custom hover:border-primary/20 transition-all duration-300 flex flex-col text-left group"
            >
              {/* Header Icon */}
              <div className="w-12 h-12 rounded-2xl bg-bg-secondary text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>

              {/* Year & Location */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-secondary/80 mb-3 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 bg-bg-secondary px-2.5 py-1 rounded-md border border-border-custom text-primary">
                  <Calendar className="w-3.5 h-3.5" />
                  Class of {edu.year}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </span>
              </div>

              {/* Degree Name */}
              <h3 className="font-heading font-extrabold text-xl text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                {edu.degree}
              </h3>

              {/* School Name */}
              <p className="text-text-primary/95 font-semibold text-base mb-4 flex items-center gap-2">
                {edu.schoolLogo && (
                  <img 
                    src={edu.schoolLogo} 
                    alt={`${edu.school} logo`} 
                    className="h-6 w-auto object-contain rounded bg-white p-0.5 border border-border-custom"
                  />
                )}
                <span>{edu.school}</span>
              </p>

              {/* Specialization */}
              <div className="mt-auto pt-4 border-t border-border-custom flex items-start gap-2.5 text-sm text-text-secondary">
                <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-text-primary font-medium">Specialization:</strong>{" "}
                  {edu.specialization}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
