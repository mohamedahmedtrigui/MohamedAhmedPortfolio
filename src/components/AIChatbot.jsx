import React, { useState, useEffect, useRef } from "react";
import { X, Send, Bot, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

/**
 * Dynamically builds the AI assistant system prompt from portfolioData.
 * This ensures the chatbot is always in sync when portfolioData is updated.
 */
function buildSystemPrompt(data) {
  const { personalInfo, education, experience, skills, certifications, languages } = data;

  const experienceLines = experience
    .map(
      (exp, i) =>
        `${i + 1}. ${exp.role} at ${exp.company} (${exp.period}). Project: ${exp.project}.\n   Details: ${exp.details}\n   Technologies: ${exp.technologies.join(", ")}.`
    )
    .join("\n");

  const skillLines = Object.entries(skills)
    .map(([, list]) => `- ${list.join(", ")}`)
    .join("\n");

  const certLines = certifications
    .map((c) => `- ${c.name} (${c.issuer}, ${c.year})`)
    .join("\n");

  const eduLines = education
    .map((e) => `- ${e.degree} (${e.specialization}) from ${e.school}, ${e.location} (${e.year}).`)
    .join("\n");

  const langLines = languages.map((l) => `- ${l.name}: ${l.level}`).join("\n");

  return `You are Mohamed's AI Portfolio Assistant, an elite representation of Mohamed Ahmed TRIGUI.
Mohamed is a Software Engineer specialized in Full-Stack development and Artificial Intelligence.
Your goal is to answer recruiters and tech companies' questions about Mohamed in a professional, concise, and technical tone.
Respond in the language the user speaks to you (French or English).
Only use the following factual information from Mohamed's CV:

IDENTITY & CONTACT:
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Location: ${personalInfo.location}
- Email: ${personalInfo.email}
- Phone: ${personalInfo.phone}
- LinkedIn: ${personalInfo.linkedin}
- Availability: ${personalInfo.availability}

ACADEMIC BACKGROUND:
${eduLines}

WORK EXPERIENCE & PROJECTS:
${experienceLines}

TECHNICAL SKILLS:
${skillLines}

CERTIFICATIONS:
${certLines}

LANGUAGES:
${langLines}

RULES:
- Keep answers short, clean, and highly professional.
- Always highlight and sell Mohamed Ahmed TRIGUI's profile, presenting his software engineering and AI expertise in the best possible light to attract recruiters.
- DO NOT use bold markdown tags (such as **, ***, etc.) in any part of your response. Return plain text only.
- DO NOT use bullet points (-), dashes, or list layouts. Write in clean, flowing, cohesive paragraphs.
- When sharing contact details, state them in a natural, plain-text sentence.
- Do not invent experience, certifications, or metrics.
- If a question is unrelated to Mohamed's professional profile, politely redirect the user to contact Mohamed via the contact form or LinkedIn.
`;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am Mohamed's AI Assistant. Ask me anything about his projects, experience, technical skills, or availability!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const MISTRAL_API_KEY = import.meta.env.VITE_MISTRAL_API_KEY || "or3c7gkjZJlFmmLMq8zx8mgCIW5YryhF";

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    if (!textToSend) setInputValue("");

    // Add user message
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Build conversation payload for Mistral AI — dynamically generated from portfolioData
      const systemPrompt = buildSystemPrompt(portfolioData);

      const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: "mistral-large-latest",
          messages: [
            { role: "system", content: systemPrompt },
            ...newMessages.map(msg => ({ role: msg.role, content: msg.content }))
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();

      if (data.choices && data.choices[0]) {
        setMessages([
          ...newMessages,
          { role: "assistant", content: data.choices[0].message.content }
        ]);
      } else {
        throw new Error("Invalid API response");
      }
    } catch (error) {
      console.error("Mistral chatbot error:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, I had trouble connecting to my cognitive models. Please try again in a few seconds or contact Mohamed directly."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const PRESET_QUESTIONS = [
    "Tell me about AutoDispatch project.",
    "What are Mohamed's AI & RAG skills?",
    "Is he available for job offers?",
    "Show me his certifications."
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {/* Eye-catching badge invite */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-white border border-border-custom shadow-premium cursor-pointer text-xs font-bold text-primary hover:text-primary-dark group hover:border-primary/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>Ask my AI Agent!</span>
          </motion.div>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-15 h-15 flex items-center justify-center text-white shadow-[0_0_20px_rgba(9,105,218,0.4)] border border-primary/20 bg-gradient-to-tr from-primary to-accent transition-all duration-500 overflow-hidden cursor-pointer ${isOpen
              ? "rounded-full"
              : "rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] hover:rounded-full"
            }`}
          aria-label="Toggle AI assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Bot className="w-7 h-7 text-white" />
            </motion.div>
          )}
          {/* Intense ambient glowing hover background inside button */}
          {!isOpen && (
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          )}
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 260 }}
            className="fixed bottom-24 right-6 w-full max-w-[380px] h-[500px] bg-white rounded-3xl border border-border-custom shadow-premium z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white/10 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-bold text-sm tracking-wide flex items-center gap-1">
                    Mohamed's AI Assistant
                    <Sparkles className="w-3 h-3 text-accent animate-pulse" />
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-white/80 font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-slate-50/50">
              {messages.map((msg, index) => {
                const isBot = msg.role === "assistant";
                return (
                  <div
                    key={index}
                    className={`flex ${isBot ? "justify-start" : "justify-end"} text-left`}
                  >
                    <div
                      className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${isBot
                          ? "bg-white text-text-primary border border-border-custom shadow-soft rounded-tl-none"
                          : "bg-primary text-white rounded-tr-none shadow-soft"
                        }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start text-left">
                  <div className="bg-white text-text-primary border border-border-custom shadow-soft p-3.5 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    <span className="text-xs font-medium text-text-secondary">Assistant is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Helper Questions (when chat starts or is idle) */}
            {messages.length === 1 && (
              <div className="p-3 bg-slate-50 border-t border-border-custom/50">
                <p className="text-[10px] font-bold text-text-secondary/70 uppercase tracking-wider mb-2 text-left px-1">Suggested questions:</p>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSendMessage(q)}
                      className="px-2.5 py-1.5 rounded-lg bg-white border border-border-custom hover:border-primary/40 hover:text-primary transition-all text-[11px] font-semibold text-text-primary text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="p-3 bg-white border-t border-border-custom flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                placeholder="Ask about my projects, stack..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-border-custom text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:bg-slate-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white shadow-soft transition-colors disabled:opacity-50 shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
