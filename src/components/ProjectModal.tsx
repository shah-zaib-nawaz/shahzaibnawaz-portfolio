"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { useMotion, easeCustom } from "./MotionContext";
import { MediaImage } from "./MediaImage";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const motionEnabled = useMotion();
  const externalLink =
    project.media && project.media !== project.image ? project.media : null;

  useEffect(() => {
    const prevActiveElement = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = [
          ...dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]"),
        ].filter((el) => !el.hasAttribute("disabled") && el.getClientRects().length);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          e.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === dialogRef.current)
        ) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      prevActiveElement?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="dialog-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabIndex={-1}
        initial={motionEnabled ? { y: 45, scale: 0.97 } : false}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.35, ease: easeCustom }}
      >
        <div className="dialog-heading">
          <span className="eyebrow">
            {project.category} {project.year && ` / ${project.year}`}
          </span>
          <button
            onClick={onClose}
            className="icon-button"
            aria-label="Close project"
          >
            <X size={20} />
          </button>
        </div>

        <div className="dialog-media">
          <MediaImage src={project.image} alt={project.title} priority />
        </div>

        <div className="dialog-description">
          <div>
            <h2 id="dialog-title">{project.title}</h2>
            {project.role && <span className="accent">{project.role}</span>}
            <p>{project.description}</p>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
            {externalLink && (
              <a
                className="outline-button"
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.type === "website" ? "Visit live demo" : "View full project"}
                <ExternalLink size={15} />
              </a>
            )}
            {project.github && (
              <a
                className="outline-button"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
