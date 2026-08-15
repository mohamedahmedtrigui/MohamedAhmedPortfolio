export const portfolioData = {
  personalInfo: {
    name: "Mohamed Ahmed TRIGUI",
    title: "Software Engineer | AI & Full-Stack",
    location: "Sfax, Tunisia",
    email: "medahmedtrigui@gmail.com",
    phone: "+216 53 387 940",
    linkedin: "https://www.linkedin.com/in/mohamed-ahmed-trigui",
    github: "https://github.com", // Generic link, but we'll show social link
    availability: "Open to Software Engineering, Full-Stack and AI opportunities",
    resumeUrl: "/cv_Ahmed_Trigui_vf.pdf" // Reference the resume on desktop or public folder
  },
  branding: {
    primaryMessage: "Building intelligent, scalable and production-ready software.",
    secondaryMessage: "Full-Stack Engineering • Generative AI • Computer Vision • AI Agents",
    personality: ["Professional", "Technical", "Modern", "Ambitious", "Reliable", "Innovative"]
  },
  about: {
    title: "About Me",
    content: "I am a Software Engineer specialized in designing intelligent web solutions and integrating Artificial Intelligence models into real-world applications. With a strong background in Full-Stack development and Advanced AI, I bridge the gap between robust software engineering and cognitive capabilities. My hands-on experience spans building intelligent web platforms, designing secure APIs, developing Computer Vision pipelines, and deploying conversational agents using state-of-the-art LLMs, RAG frameworks, and AI Agents.",
    highlightTopics: [
      { title: "Software Engineering", desc: "Designing scalable, robust, and secure backend architectures combined with modern, responsive user interfaces." },
      { title: "Artificial Intelligence", desc: "Implementing deep learning systems, data preprocessing pipelines, and predictive machine learning models." },
      { title: "Full-Stack Development", desc: "Connecting rich, interactive frontends (React, Angular) with enterprise-grade backends (FastAPI, Laravel, Django, Spring Boot)." },
      { title: "Generative AI & LLMs", desc: "Leveraging large language models, structured prompt engineering, and conversational voice interfaces." },
      { title: "Computer Vision", desc: "Applying state-of-the-art object detection (YOLO), optical character recognition (OCR), and segmentation (U-Net)." },
      { title: "AI Agents & RAG", desc: "Orchestrating agent workflows with LangGraph and Retrieval-Augmented Generation for deep regulatory analysis and reporting." }
    ]
  },
  experience: [
    {
      role: "Full-Stack & AI Engineer",
      company: "Miral Development",
      location: "Sfax, Tunisia",
      period: "July 2025 – Present",
      project: "MiralDrive",
      details: "Working on MiralDrive, a mobility platform for managing rides, drivers, and clients in real time. The platform includes intelligent tools to support ride assignment, improve dispatch operations, and streamline mobility workflows.",
      technologies: ["Laravel", "React", "Python", "FastAPI", "MySQL", "REST API", "Real-Time Systems", "AI Integration"],
      companyLogo: "/images/miral_.png"
    },
    {
      role: "Software Engineer Intern — Final Engineering Project",
      company: "Miral Development",
      location: "Sfax, Tunisia",
      period: "February 2026 – June 2026",
      project: "AutoDispatch",
      details: "Conception and development of AutoDispatch, an intelligent delivery dispatch platform designed to automate, monitor, and optimize courier assignment. Implemented a configurable routing and auto-dispatch engine, real-time command supervision interfaces, AI models for preparation-time estimation, an LLM-based courier performance reporting agent, and a conversational voice assistant to assist dispatch operators.",
      technologies: ["Laravel", "React", "Python", "FastAPI", "MySQL", "Docker", "VROOM", "REST API", "SSE", "Whisper", "LLM", "AI Agents"],
      companyLogo: "/images/miral_.png"
    },
    {
      role: "AI & Computer Vision Intern",
      company: "IIT Sfax",
      location: "Sfax, Tunisia",
      period: "October 2025 – January 2026",
      project: "SmartALPR",
      details: "Conception of an intelligent automatic license plate recognition system (SmartALPR) customized for Tunisian plates. Built an end-to-end pipeline combining computer vision and generative AI, integrating YOLO-based object detection, OCR character extraction, Retrieval-Augmented Generation (RAG), and Large Language Models (LLMs) with a regulatory AI agent for vehicle compliance reports.",
      technologies: ["Python", "PyTorch", "YOLO", "FastAPI", "RAG", "LLM", "AI Agent"],
      companyLogo: "/images/iit.png"
    },
    {
      role: "AI Engineering Intern — Stage de Perfectionnement",
      company: "SportExpert",
      location: "Sfax, Tunisia",
      period: "June 2025 – August 2025",
      project: "NutriShape AI",
      details: "Conception and development of NutriShape AI, a sports-centric AI solution enabling automatic estimation of body measurements from 2D images. Developed a multimodal system utilizing PyTorch, U-Net segmentations, and T5 transformers to generate personalized training targets, dietary plans, and supplementation schedules.",
      technologies: ["PyTorch", "T5", "Multimodal Learning", "U-Net"],
      companyLogo: ""
    },
    {
      role: "Deep Learning Intern — Year-End Project",
      company: "IIT Sfax",
      location: "Sfax, Tunisia",
      period: "January 2025 – April 2025",
      project: "Intelligent Video Conferencing Platform",
      details: "Development of an intelligent video conferencing application integrating real-time deep learning models to analyze student engagement. Combined computer vision to detect student facial expressions and postures, sentiment analysis from image feeds, and NLP-based chat text monitoring to estimate comprehension and participation.",
      technologies: ["Deep Learning", "Vision Transformer", "YOLO", "Angular", "FastAPI", "WebSocket"],
      companyLogo: "/images/iit.png"
    },
    {
      role: "Machine Learning Intern — Stage d’Initiation",
      company: "IIT Sfax",
      location: "Sfax, Tunisia",
      period: "July 2024",
      project: "Predictive Cost Estimation System",
      details: "Development of a predictive machine learning tool for construction cost estimation. Focused on data preprocessing, feature engineering, exploratory data analysis, and benchmarked ensemble models including Bagging, Boosting, and Stacking to deliver accurate estimations.",
      technologies: ["Python", "Data Preprocessing", "Machine Learning", "Bagging", "Boosting", "Stacking"],
      companyLogo: "/images/iit.png"
    },
    {
      role: "Full-Stack Developer Intern — Bachelor Project",
      company: "CES Expertise",
      location: "Sfax, Tunisia",
      period: "February 2023 – May 2023",
      project: "Expertise Management Platform",
      details: "Conception and development of a full-stack web application dedicated to managing an engineering expertise firm, aiming to structure and digitalize internal workflows, track client dossiers, and improve overall collaboration between experts, employees, and clients.",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "MySQL"],
      companyLogo: "/images/CES.webp"
    }
  ],
  projects: [
    {
      id: "autodispatch",
      name: "AutoDispatch",
      type: "Final Engineering Project",
      organization: "Miral Development",
      period: "February 2026 – June 2026",
      headline: "AI-powered intelligent delivery dispatch platform",
      description: "AutoDispatch is an end-to-end platform built to automate, supervise, and optimize delivery logistics. By automating the courier assignment process with a configurable auto-dispatch engine, it solves complex routing constraints in real time. The platform features dynamic dashboard interfaces, real-time order tracking, and custom AI components: a machine learning estimator for meal preparation times, an LLM-powered reporting agent that synthesizes courier performance metrics, and a voice assistant built with OpenAI Whisper and conversational agents to streamline operator workflows.",
      technologies: ["Laravel", "React", "Python", "FastAPI", "MySQL", "Docker", "VROOM", "REST API", "SSE", "Whisper", "LLM", "AI Agents"],
      categories: ["ai", "fullstack"],
      featured: true,
      image: "/images/autodispatch.png"
    },
    {
      id: "smartalpr",
      name: "SmartALPR",
      type: "Generative AI, AI Agent & Full-Stack Project",
      organization: "IIT Sfax",
      period: "October 2025 – January 2026",
      headline: "Intelligent Tunisian license plate recognition system",
      description: "An end-to-end Automatic License Plate Recognition (ALPR) system customized for Tunisian plates. The system integrates YOLO-based object detection to extract license plate bounding boxes, OCR (Optical Character Recognition) engines for character extraction, and a Retrieval-Augmented Generation (RAG) pipeline linked with a Large Language Model. The system also embeds a regulatory AI agent capable of answering questions about vehicle compliance and automatically generating structured PDF report analyses.",
      technologies: ["Python", "PyTorch", "YOLO", "FastAPI", "OCR", "RAG", "LLM", "AI Agent"],
      categories: ["ai", "cv", "genai", "agent", "fullstack"],
      focusLabel: "GenAI + Agent + Full-Stack",
      featured: true,
      image: "/images/smartalpr.png"
    },
    {
      id: "nutrishape",
      name: "NutriShape AI",
      type: "Generative AI Project",
      organization: "SportExpert",
      period: "June 2025 – August 2025",
      headline: "AI-powered body measurement & recommendation system",
      description: "An intelligent fitness software solution designed to estimate body dimensions from 2D images. Using U-Net for body shape segmentation and custom regression models, the platform estimates key body measurements. These physical metrics are processed alongside user profiles through a multimodal transformer (T5) to generate bespoke, evidence-based training regimens, caloric and macronutrient dietary targets, and supplementation schedules.",
      technologies: ["PyTorch", "T5", "Multimodal Learning", "U-Net"],
      categories: ["ai", "genai"],
      focusLabel: "Generative AI",
      featured: true,
      image: "/images/nutrishape.png"
    },
    {
      id: "videoconf",
      name: "Intelligent Video Conferencing Platform",
      type: "Academic Project",
      organization: "IIT Sfax",
      period: "January 2025 – April 2025",
      headline: "Real-time AI analysis of student engagement",
      description: "An e-learning video conferencing tool incorporating live AI telemetry to track student attentiveness and engagement. Combining Computer Vision models (YOLO, Vision Transformers) to capture facial expressions and posture, the application analyzes real-time video feeds for sentiment. Concurrently, natural language processing models monitor text chat messages. The combined data gives instructors a live engagement dashboard via WebSockets.",
      technologies: ["Deep Learning", "Vision Transformer", "YOLO", "Angular", "FastAPI", "WebSocket"],
      categories: ["ai", "cv", "fullstack"],
      featured: true,
      image: "/images/videoconf.png"
    },
    {
      id: "costestimation",
      name: "Predictive Construction Cost Estimation",
      type: "Machine Learning Project",
      organization: "IIT Sfax",
      period: "July 2024",
      headline: "Predictive machine learning estimator",
      description: "A machine learning pipeline developed to predict civil engineering and construction costs. Focused on deep data preprocessing (handling outliers, encoding categoricals, scaling, and feature selection), the project implemented and benchmarked multiple ensemble learning algorithms including Bagging, Boosting (gradient boosting, XGBoost), and Stacking to achieve high-accuracy cost estimates.",
      technologies: ["Python", "Machine Learning", "Bagging", "Boosting", "Stacking"],
      categories: ["ai"],
      featured: false,
      image: "/images/costestimation.png"
    },
    {
      id: "expertisemanagement",
      name: "Expertise Management Platform",
      type: "Bachelor Final Project",
      organization: "CES Expertise",
      period: "February 2023 – May 2023",
      headline: "Internal digitalization and tracking dashboard",
      description: "A full-stack web application developed to digitalize the internal workflows of an engineering expertise firm. The application centralizes case files, manages assignments for on-site experts, automates client notification milestones, and provides secure collaboration spaces between administrative staff, experts, and clients, replacing legacy paper processes.",
      technologies: ["Django", "HTML", "CSS", "JavaScript", "MySQL"],
      categories: ["fullstack"],
      featured: false,
      image: "/images/expertisemanagement.png"
    }
  ],
  skills: {
    programming: ["Python", "Java", "C", ".NET", "PHP", "JavaScript"],
    frontend_backend: ["React", "Angular", "FastAPI", "Django", "Laravel", "Spring Boot"],
    databases: ["MySQL", "PostgreSQL", "SQL", "Database Design"],
    machine_learning: ["Scikit-learn", "NumPy", "Pandas", "Data Preprocessing", "Machine Learning"],
    deep_learning_computer_vision: ["PyTorch", "TensorFlow", "Keras", "YOLO", "Vision Transformer", "OCR", "Roboflow"],
    generative_ai: ["LLM", "RAG", "AI Agents", "Prompt Engineering", "LangGraph", "Conversational Agents", "Reporting Agents"],
    backend_api: ["REST API", "WebSocket", "SSE", "AI Model Integration", "Secure Backend Architectures"],
    devops: ["Docker", "Git", "GitLab"]
  },
  education: [
    {
      degree: "Engineering Degree — Software Engineering & Business Intelligence",
      specialization: "Advanced Artificial Intelligence",
      school: "International Institute of Technology",
      location: "Sfax, Tunisia",
      year: "2026",
      schoolLogo: "/images/iit.png"
    },
    {
      degree: "Bachelor's Degree in Information Technology",
      specialization: "Telecommunications",
      school: "National School of Electronics and Telecommunications",
      location: "Sfax, Tunisia",
      year: "2023",
      schoolLogo: "/images/enetcom.png"
    }
  ],
  certifications: [
    { name: "Retrieval Augmented Generation", issuer: "Activeloop", year: "2026", credentialUrl: "https://learn.activeloop.ai/" },
    { name: "LangGraph Essentials", issuer: "LangChain", year: "2026", credentialUrl: "https://academy.langchain.com/" },
    { name: "Claude Code in Action", issuer: "Anthropic", year: "2026", credentialUrl: "https://training.anthropic.com/" },
    { name: "Time Series - Machine Learning", issuer: "Intellipaat", year: "2026", credentialUrl: "https://intellipaat.com/verify/" },
    { name: "HCIA-AI Mock Exam", issuer: "Huawei Talent", year: "2025", credentialUrl: "https://e.huawei.com/en/talent/portal/#/" },
    { name: "Machine Learning Certification", issuer: "IT Specialist", year: "2024", credentialUrl: "https://www.certiport.com/portal/ssl/portal.aspx" }
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "B2 Professional" },
    { name: "English", level: "B2 Professional" }
  ]
};
