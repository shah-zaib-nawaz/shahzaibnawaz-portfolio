"use client";

import React, { useState, useCallback, useEffect } from "react";
import { MotionConfig, AnimatePresence } from "framer-motion";
import { MotionContext, easeCustom } from "@/components/MotionContext";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { WireframeComparison } from "@/components/WireframeComparison";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { Project } from "@/data/portfolioData";

export default function Home() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("shahzaib-motion");
      if (stored === "off") {
        setMotionEnabled(false);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? "on" : "off";
  }, [motionEnabled]);

  const toggleMotion = () => {
    setMotionEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("shahzaib-motion", next ? "on" : "off");
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <MotionContext.Provider value={motionEnabled}>
      <MotionConfig
        reducedMotion={motionEnabled ? "user" : "always"}
        transition={{ ease: easeCustom }}
      >
        <a className="skip-link" href="#portfolio">
          Skip to work
        </a>

        <ReadingProgress />

        <Header onToggleMotion={toggleMotion} />

        <main>
          <Hero onProject={setSelectedProject} />
          <Portfolio onProject={setSelectedProject} />
          <WireframeComparison />
          <About />
          <Journey onProject={setSelectedProject} />
          <Contact onProject={setSelectedProject} />
        </main>

        <Footer />

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              key={selectedProject.title}
              project={selectedProject}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>
      </MotionConfig>
    </MotionContext.Provider>
  );
}
