import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "./vocab/LanguageContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-white text-text-primary overflow-x-hidden">
        {/* Intro Typewriter Loader */}
        <AnimatePresence mode="wait">
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {/* Sticky navigation header */}
        <Navbar />

        {/* Main landing sections */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Bottom professional links footer */}
        <Footer />

        {/* Floating AI chatbot assistant */}
        <AIChatbot />
      </div>
    </LanguageProvider>
  );
}

export default App;
