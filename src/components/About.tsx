"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useMotion } from "./MotionContext";
import { AnimatedSection } from "./AnimatedSection";
import { portfolioData } from "@/data/portfolioData";

export function About() {
  const motionEnabled = useMotion();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  const p = portfolioData.personal;
  const skills = portfolioData.skillTags;
  const tech = portfolioData.techIcons;
  const steps = portfolioData.processSteps;

  return (
    <section id="about" className="about section-wrap" ref={containerRef}>
      <AnimatedSection className="about-lead">
        <div>
          <span className="eyebrow">{p.aboutEyebrow}</span>
          <h2 className="display">
            {p.aboutTitle} <br />
            CRAFTING <span className="accent">{p.aboutTitleHighlight}</span>
          </h2>
        </div>
        <p>{p.aboutBio}</p>
      </AnimatedSection>

      <div className="studio-grid">
        <AnimatedSection className="education-panel">
          <h3 className="panel-heading">EXPERTISE & SKILLS</h3>
          <p className="eyebrow accent">EDUCATION & LEARNING</p>

          <div className="education-row">
            <strong>Ecommerce Store Specialist</strong>
            <span>2021 – NOW</span>
            <p>Shopify, WooCommerce, custom themes & conversion optimization.</p>
          </div>

          <div className="education-row">
            <strong>Custom E-commerce Architect</strong>
            <span>2021 – NOW</span>
            <p>Next.js · React · Shopify Liquid · WooCommerce · Headless Stores · Figma</p>
          </div>

          <p className="eyebrow accent skills-heading">CREATIVE & TECH TOOLKIT</p>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <div className="software-row">
            {tech.map(([key, name]) => (
              <img
                key={key}
                src={`/Asset/svg/${key}.svg`}
                alt={name}
                title={name}
                loading="lazy"
                width="28"
                height="28"
              />
            ))}
          </div>
        </AnimatedSection>

        <div className="process-panel">
          <AnimatedSection>
            <h3 className="panel-heading">FROM CONCEPT TO LAUNCH</h3>
          </AnimatedSection>

          <div className="process-list">
            <div className="process-track">
              <motion.div
                style={{
                  scaleY: motionEnabled ? scrollYProgress : 1,
                  transformOrigin: "top",
                }}
              />
            </div>

            {steps.map((step, idx) => (
              <AnimatedSection
                key={step.num}
                className="process-row"
                delay={idx * 0.035}
              >
                <span className="process-num display">{step.num}</span>
                <span className="process-node" />
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="quote-panel">
          <span className="quote-mark display">{p.quoteMark}</span>
          <blockquote>
            From concept <br />
            and user flows, <br />
            <em>
              to pixel-perfect <br />
              digital products.
            </em>
          </blockquote>
          <span className="handwriting">{p.quoteAuthor}</span>
          <div className="quote-bottom">
            {p.quoteBottom}
            <span className="quote-symbol" aria-hidden="true">
              ✳
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
