"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Play } from "lucide-react";
import { useMotion, easeCustom } from "./MotionContext";
import { MagneticLink } from "./MagneticLink";
import { portfolioData, Project } from "@/data/portfolioData";

interface HeroProps {
  onProject: (project: Project) => void;
}

export function Hero({ onProject }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const motionEnabled = useMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 85]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const introY = useTransform(scrollYProgress, [0, 1], [0, -55]);

  const p = portfolioData.personal;
  const featured = portfolioData.projects[0];

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero-top">
        <span>
          {p.roleHeroTop} <br />
          <span className="muted">{p.roleHeroSub}</span>
        </span>
        <span className="availability">
          <i></i>
          <span>
            {p.availabilityText}
            <span className="avail-long">{p.availabilitySub}</span>
          </span>
        </span>
      </div>

      <motion.div
        className="hero-title display"
        aria-hidden="true"
        style={motionEnabled ? { y: titleY } : {}}
        initial={motionEnabled ? { clipPath: "inset(0 0 100% 0)" } : false}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.4, ease: easeCustom }}
      >
        PORTFOLIO
      </motion.div>

      <motion.div
        className="hero-portrait"
        style={motionEnabled ? { y: portraitY, scale: portraitScale } : {}}
        initial={motionEnabled ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <img
          src={p.portraitImage}
          alt={p.portraitAlt}
          width={682}
          height={1024}
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.endsWith(".png")) {
              target.src = "/Asset/img/shahzaib-portrait.png";
            }
          }}
        />
      </motion.div>

      <motion.div
        className="hero-intro"
        style={motionEnabled ? { y: introY } : {}}
        initial={motionEnabled ? { opacity: 0, x: -35 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: easeCustom }}
      >
        <p className="handwriting">{p.greeting}</p>
        <h1 className="display">
          {p.wordmark}
          <span>.</span>
        </h1>
        <p className="hero-role">
          {p.rolePrimary} <br />
          {p.roleSecondary}
        </p>
        <p className="hero-description">{p.heroDescription}</p>

        <MagneticLink href="#portfolio" className="primary-link">
          See my work <ArrowDown size={17} />
        </MagneticLink>

        <span className="hero-location">
          <MapPin size={12} /> {p.location}
        </span>
      </motion.div>

      <motion.div
        className="hero-side"
        initial={motionEnabled ? { opacity: 0, x: 30 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.55, ease: easeCustom }}
      >
        <div className="hero-manifesto">
          <span className="crosshair" aria-hidden="true">
            ✳
          </span>
          <p>
            {p.manifestoTitle} <br />
            {p.manifestoSub}
          </p>
        </div>

        <div className="hero-stats">
          <div>
            <span className="display">
              {p.yearsExperience}
            </span>
            <p>
              YEARS BUILDING <br />
              ECOMMERCE
            </p>
          </div>

          <div>
            <span className="display">{p.reviewsCount}</span>
            <p>
              STORES BUILT <br />
              & DELIVERED
            </p>
          </div>

          <div className="hero-award-stat">
            <span className="display">{p.servicesCount}</span>
            <a href="#portfolio" aria-label="View services and specialized builds">
              CORE SERVICES <br />
              & CAPABILITIES
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="hero-bottom">
        <button
          className="reel-button"
          onClick={() => onProject(featured)}
        >
          <span className="play-circle">
            <Play size={12} fill="currentColor" />
          </span>
          VIEW FEATURED BUILD
          <span className="muted">ECOMMERCE / UI</span>
        </button>

        <span className="hero-scroll">
          SCROLL TO DISCOVER <ArrowDown size={13} />
        </span>

        <span className="edition">SELECTED WORK / 2021–2026</span>
      </div>
    </section>
  );
}
