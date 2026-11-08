"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useMotion, easeCustom } from "./MotionContext";
import { MediaImage } from "./MediaImage";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const motionEnabled = useMotion();
  const [isClient, setIsClient] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const pictureY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const liveUrl = project.liveUrl || (project.media && project.media.startsWith("http") ? project.media : undefined);

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      layout
      initial={isClient && motionEnabled ? { opacity: 0, y: 24 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionEnabled ? 0.45 : 0,
        delay: (index % 3) * 0.05,
        ease: easeCustom,
      }}
      exit={{ opacity: 0, scale: 0.96 }}
    >
      <div className="project-media-wrap">
        <button
          className="project-open"
          onClick={() => onOpen(project)}
          aria-label={`View case study for ${project.title}`}
        >
          <motion.div
            className="project-picture"
            style={isClient && motionEnabled ? { y: pictureY } : {}}
          >
            <MediaImage src={project.image} alt={project.title} />
          </motion.div>
          <span className="project-type">
            {project.category.toUpperCase()}
          </span>
          <span className="project-hover">
            <ArrowUpRight size={22} />
          </span>
          <span className="project-frame" aria-hidden="true" />
        </button>

        {project.metric && (
          <div className="project-metric-pill" title="Key Store Performance Metric">
            <TrendingUp size={12} className="metric-icon" />
            <span>{project.metric}</span>
          </div>
        )}
      </div>

      <div className="project-caption-container">
        <div className="project-caption-row">
          <button
            className="project-title-btn"
            onClick={() => onOpen(project)}
            aria-label={`Open details for ${project.title}`}
          >
            <span className="project-number display">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="project-heading-group">
              <h3>{project.title}</h3>
              <span className="project-category">
                {project.category}
                {project.year ? ` / ${project.year}` : ""}
              </span>
            </span>
          </button>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-live-btn"
              title={`Visit live storefront for ${project.title}`}
              aria-label={`Open live storefront for ${project.title}`}
            >
              <span>Live Store</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        {project.impact && (
          <p className="project-impact-line">{project.impact}</p>
        )}
      </div>
    </motion.article>
  );
}
