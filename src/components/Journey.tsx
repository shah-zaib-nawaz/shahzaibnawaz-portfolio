"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { easeCustom } from "./MotionContext";
import { AnimatedSection } from "./AnimatedSection";
import { portfolioData, Project } from "@/data/portfolioData";

interface JourneyProps {
  onProject: (project: Project) => void;
}

export function Journey({ onProject }: JourneyProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const experiences = portfolioData.experienceList;

  const featuredTitles = ["Try The Look", "Nike Design", "Maison Vell", "Attitude"];
  const milestones = featuredTitles
    .map((title) => portfolioData.projects.find((p) => p.title === title))
    .filter(Boolean) as Project[];

  return (
    <section id="experience" className="journey section-wrap">
      <AnimatedSection className="section-heading">
        <div>
          <span className="eyebrow">03 / THE JOURNEY</span>
          <h2>
            KEEP BUILDING. KEEP SHIPPING<span className="accent">.</span>
          </h2>
        </div>
        <span className="text-link" style={{ cursor: "default" }}>
          EXPERIENCE & MILESTONES
        </span>
      </AnimatedSection>

      <div className="journey-grid">
        <div className="experience-list">
          {experiences.map((item, idx) => (
            <AnimatedSection
              key={item.title}
              className={`experience-row ${openIndex === idx ? "is-open" : ""}`}
            >
              <button
                aria-expanded={openIndex === idx}
                aria-controls={`job-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="experience-date">{item.date}</span>
                <span>
                  <h3>{item.title}</h3>
                  <span className="experience-place">{item.place}</span>
                </span>
                {openIndex === idx ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    id={`job-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easeCustom }}
                  >
                    <p>{item.text}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="awards-panel">
          <p className="eyebrow">A FEW MILESTONES</p>
          <h3 className="display">
            SHIPPED. <br />
            <span className="accent">LIVE. USED.</span>
          </h3>
          <div className="award-list">
            {milestones.map((p, idx) => (
              <button key={p.title} onClick={() => onProject(p)}>
                <span>{String(idx + 1).padStart(2, "0")}</span>
                <span>
                  {p.title}
                  <small>
                    {p.category}
                    {p.year ? ` · ${p.year}` : ""}
                  </small>
                </span>
                <ArrowUpRight size={19} />
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
