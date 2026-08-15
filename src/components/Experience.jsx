import React from "react";
import { Briefcase, Calendar, MapPin, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../vocab/useLanguage";

export default function Experience() {
  const { data, vocab } = useLanguage();
  const { experience } = data;

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary mb-4"
          >
            {vocab.experience.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-custom transform md:-translate-x-1/2" />

          {experience.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.project}
                className={`relative flex flex-col md:flex-row items-stretch mb-12 md:mb-16 last:mb-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node dot */}
                <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full border-4 border-white bg-primary shadow-soft transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <Briefcase className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Content side card */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="glass-panel p-8 rounded-2xl shadow-soft hover:shadow-premium border border-border-custom hover:border-primary/20 transition-all duration-300 flex flex-col text-left group"
                  >
                    {/* Role Title */}
                    <h3 className="font-heading font-bold text-xl text-text-primary group-hover:text-primary transition-colors duration-200 mb-2">
                      {item.role}
                    </h3>

                    {/* Company and Location */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary font-medium mb-4">
                      <span className="flex items-center gap-2">
                        {item.companyLogo ? (
                          <img 
                            src={item.companyLogo} 
                            alt={`${item.company} logo`} 
                            className="w-5 h-5 object-contain rounded bg-white p-0.5 border border-border-custom"
                          />
                        ) : (
                          <Terminal className="w-4 h-4 text-primary" />
                        )}
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-text-secondary" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-text-secondary" />
                        {item.period}
                      </span>
                    </div>

                    {/* Project Headline and details */}
                    <div className="mb-4">
                      <div className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-bg-secondary text-primary border border-border-custom mb-2">
                        {vocab.experience.project} {item.project}
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.details}
                      </p>
                    </div>

                    {/* Technologies used */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border-custom">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-bg-secondary text-text-primary border border-border-custom group-hover:border-primary/20 group-hover:bg-white transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty placeholder column on opposite side for desktop grid alignment */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
