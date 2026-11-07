"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  const cardRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const pictureY = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      layout
      initial={motionEnabled ? { opacity: 0, y: 24 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionEnabled ? 0.45 : 0,
        delay: (index % 3) * 0.05,
        ease: easeCustom,
      }}
      exit={{ opacity: 0, scale: 0.96 }}
    >
      <button
        className="project-open"
        onClick={() => onOpen(project)}
        aria-label={`View ${project.title}`}
      >
        <motion.div
          className="project-picture"
          style={motionEnabled ? { y: pictureY } : {}}
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

      <button className="project-caption" onClick={() => onOpen(project)}>
        <span className="project-number display">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>
          <h3>{project.title}</h3>
          <span className="project-category">
            {project.category}
            {project.year ? ` / ${project.year}` : ""}
          </span>
        </span>
        <ArrowUpRight size={20} />
      </button>
    </motion.article>
  );
}
