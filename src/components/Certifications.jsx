import React from "react";
import { Award, ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Certifications() {
  const { certifications } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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
    <section id="certifications" className="py-24 bg-white relative">
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
            Licenses & Certifications
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"
          />
          <p className="text-text-secondary text-lg leading-relaxed">
            Professional development, industry-recognized certificates, and credentials specialized in AI development, LangGraph, and RAG.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={cardVariants}
              className="glass-panel p-6 rounded-2xl shadow-soft hover:shadow-premium border border-border-custom hover:border-primary/20 transition-all duration-300 flex items-start gap-4 group text-left relative overflow-hidden"
            >
              {/* Shine effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-2xl" />

              {/* Award Icon container */}
              <div className="w-12 h-12 rounded-xl bg-bg-secondary text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                <Award className="w-6 h-6" />
              </div>

              {/* Certificate Details */}
              <div className="flex-1 flex flex-col justify-between min-h-[80px]">
                <div>
                  <h3 className="font-heading font-bold text-base text-text-primary group-hover:text-primary transition-colors duration-200 leading-snug mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-semibold text-text-secondary">
                    {cert.issuer}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-border-custom/50">
                  <span className="text-[11px] font-bold text-text-secondary/70 bg-bg-secondary px-2 py-0.5 rounded-md border border-border-custom">
                    Issued {cert.year}
                  </span>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] font-bold text-primary hover:text-accent transition-colors duration-200"
                      aria-label={`Verify ${cert.name} credential`}
                    >
                      Verify
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <ShieldCheck className="w-4 h-4 text-accent" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
