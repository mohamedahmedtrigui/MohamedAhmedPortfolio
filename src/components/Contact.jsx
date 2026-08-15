import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || "";
    
    if (!accessKey || accessKey === "your_web3forms_key_here") {
      console.warn("Web3Forms access key is not set. Simulating mail send. Set VITE_WEB3FORMS_KEY in your env.");
      // Fallback for visual review
      setTimeout(() => {
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Message from " + formData.name,
          message: formData.message,
          from_name: "Portfolio Visitor"
        })
      });

      const data = await response.json();
      if (data.success) {
        setFormStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Web3Forms error response:", data);
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Web3Forms network error:", err);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-secondary relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col text-left justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary mb-4 leading-tight">
                Let's Build <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Something Intelligent.</span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
              
              <p className="text-text-secondary text-base sm:text-lg mb-10 leading-relaxed font-normal">
                Interested in Software Engineering, Artificial Intelligence, Full-Stack development, or innovative AI agents and computer vision systems? Let's connect and discuss opportunities.
              </p>
            </motion.div>

            {/* Direct Details Grid */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border-custom shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-bg-secondary text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-0.5">Email Me</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-text-primary hover:text-primary font-semibold text-sm sm:text-base transition-colors duration-200">
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border-custom shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-bg-secondary text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-0.5">Call Me</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-text-primary hover:text-primary font-semibold text-sm sm:text-base transition-colors duration-200">
                    {personalInfo.phone}
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border-custom shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-bg-secondary text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-0.5">Location</h4>
                  <span className="text-text-primary font-semibold text-sm sm:text-base">
                    {personalInfo.location}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

                    
        </div>
      </div>
    </section>
  );
}
