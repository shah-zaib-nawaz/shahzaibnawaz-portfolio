"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
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
          {experiences.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimatedSection
                key={item.title}
                className={`experience-row ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`job-${idx}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="experience-date">{item.date}</span>
                  <span>
                    <h3>{item.title}</h3>
                    <span className="experience-place">{item.place}</span>
                  </span>
                  {isOpen ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </button>

                <div
                  id={`job-${idx}`}
                  className={`experience-detail ${isOpen ? "is-expanded" : "is-collapsed"}`}
                  aria-hidden={!isOpen}
                >
                  <p>{item.text}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="awards-panel">
          <p className="eyebrow">A FEW MILESTONES</p>
          <h3 className="display">
            SHIPPED. <br />
            <span className="accent">LIVE. USED.</span>
          </h3>
          <div className="award-list">
            {milestones.map((p, idx) => (
              <a
                key={p.title}
                href={p.liveUrl || p.media || "#portfolio"}
                className="award-item-link"
                onClick={(e) => {
                  e.preventDefault();
                  onProject(p);
                }}
                aria-label={`View milestone: ${p.title}`}
              >
                <span>{String(idx + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{p.title}</strong>
                  <small>
                    {p.category}
                    {p.year ? ` · ${p.year}` : ""}
                    {p.metric ? ` · ${p.metric}` : ""}
                  </small>
                </span>
                <ArrowUpRight size={19} />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
