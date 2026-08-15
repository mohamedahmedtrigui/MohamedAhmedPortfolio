import React, { useEffect, useMemo, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { eng } from "./eng";
import { fr } from "./fr";
import { LanguageContext } from "./useLanguage";

const VOCAB = { eng, fr };

const projectIdByName = {
  AutoDispatch: "autodispatch",
  SmartALPR: "smartalpr",
  "NutriShape AI": "nutrishape",
  "Intelligent Video Conferencing Platform": "videoconf",
  "Predictive Cost Estimation System": "costestimation",
  "Predictive Construction Cost Estimation": "costestimation",
  "Expertise Management Platform": "expertisemanagement",
};

function readInitialLanguage() {
  if (typeof window === "undefined") return "eng";

  const saved = window.localStorage.getItem("portfolio-language");
  if (saved === "fr") return "fr";
  return "eng";
}

function localizeData(baseData, vocab) {
  const overrides = vocab.data;
  if (!overrides) return baseData;

  return {
    ...baseData,
    personalInfo: {
      ...baseData.personalInfo,
      ...overrides.personalInfo,
    },
    branding: {
      ...baseData.branding,
      ...overrides.branding,
    },
    about: {
      ...baseData.about,
      ...overrides.about,
    },
    experience: baseData.experience.map((item) => {
      const projectId = projectIdByName[item.project];
      return {
        ...item,
        ...(overrides.experience?.[projectId] ?? {}),
      };
    }),
    projects: baseData.projects.map((project) => ({
      ...project,
      ...(overrides.projects?.[project.id] ?? {}),
    })),
    education: baseData.education.map((item) => ({
      ...item,
      ...(overrides.education?.[item.degree] ?? {}),
    })),
  };
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readInitialLanguage);

  const vocab = VOCAB[language] ?? eng;
  const data = useMemo(() => localizeData(portfolioData, vocab), [vocab]);

  useEffect(() => {
    document.documentElement.lang = vocab.code;
    window.localStorage.setItem("portfolio-language", language);
  }, [language, vocab.code]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "eng" ? "fr" : "eng")),
      vocab,
      data,
    }),
    [language, vocab, data]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
