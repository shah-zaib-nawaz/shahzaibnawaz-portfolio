"use client";

import React, { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Instagram,
  Globe,
  Github,
  MapPin,
  Play,
  Plus,
  ExternalLink,
} from "lucide-react";
import { useMotion } from "./MotionContext";
import { AnimatedSection } from "./AnimatedSection";
import { MagneticLink } from "./MagneticLink";
import { portfolioData, Project } from "@/data/portfolioData";

interface ContactProps {
  onProject: (project: Project) => void;
}

function ReelVideo() {
  const motionEnabled = useMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: true, margin: "300px" as any });

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !isInView) return;
    if (motionEnabled) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [motionEnabled, isInView]);

  return (
    <video
      ref={videoRef}
      className="reel-video"
      src={isInView ? "/Asset/video/shahzaib-reel.mp4" : undefined}
      poster="/Asset/video/shahzaib-reel-poster.webp"
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}

export function Contact({ onProject }: ContactProps) {
  const [formSent, setFormSent] = useState(false);
  const contact = portfolioData.contact;
  const featured = portfolioData.projects[0];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const type = formData.get("type") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`New Project Inquiry: ${type} - ${name}`);
    const body = encodeURIComponent(
      `Hi Shahzaib,\n\nI'm ${name}.\nProject type: ${type}\n\nProject details:\n${message}\n\nBest regards,\n${name}`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="contact section-wrap">
      <div className="contact-grid">
        <AnimatedSection className="contact-intro">
          <span className="eyebrow">04 / YOUR NEXT PROJECT</span>
          <h2 className="display">
            LET’S BUILD <br />
            TOGETHER<span className="accent">.</span>
          </h2>
          <p>
            Got an ecommerce store or project in mind? <br />
            Let’s make something people love to use.
          </p>
          <MagneticLink
            href={`mailto:${contact.email}?subject=Project%20Inquiry`}
            className="contact-cta"
          >
            <span className="round-arrow">
              <ArrowUpRight size={21} />
            </span>
            START A CONVERSATION
          </MagneticLink>
        </AnimatedSection>

        <AnimatedSection className="contact-links" delay={0.1}>
          <a href={`mailto:${contact.email}`}>
            <Mail size={18} />
            <span>
              <small>EMAIL</small>
              {contact.email}
            </span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
            <span>
              <small>INSTAGRAM</small>
              {contact.instagramHandle}
            </span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={contact.studioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={18} />
            <span>
              <small>WEBSITE</small>
              {contact.studioName}
            </span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={contact.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} />
            <span>
              <small>FIVERR</small>
              {contact.fiverrUser}
            </span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            <span>
              <small>GITHUB</small>
              {contact.githubUser}
            </span>
            <ArrowUpRight size={16} />
          </a>

          <div>
            <MapPin size={18} />
            <span>
              <small>BASED IN</small>
              {contact.location}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection className="contact-reel" delay={0.2}>
          <button
            onClick={() => onProject(featured)}
            aria-label="View featured project"
          >
            <div className="reel-screen">
              <span className="reel-screen-top">
                SHAHZAIB NAWAZ<span>STUDIO REEL</span>
              </span>
              <ReelVideo />
              <span className="reel-screen-title display">
                BUILD <br />
                <span>SMARTER.</span>
              </span>
              <span className="play-circle">
                <Play size={18} fill="currentColor" />
              </span>
            </div>
            <span className="reel-caption">
              SHAHZAIB NAWAZ — ECOMMERCE STORE STUDIO
            </span>
          </button>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <details className="project-brief">
          <summary>
            Tell me about your project <Plus size={19} />
          </summary>
          <form onSubmit={handleSubmit}>
            <label>
              Your Name
              <input
                name="name"
                required
                placeholder="Name or brand"
                autoComplete="name"
                maxLength={100}
              />
            </label>
            <label>
              Project type
              <select name="type">
                <option>Shopify Store Development</option>
                <option>WooCommerce Store Development</option>
                <option>Custom E-commerce (Next.js / Headless)</option>
                <option>Store Redesign & Conversion Optimization</option>
                <option>UI/UX Design & Prototyping</option>
                <option>Custom E-commerce Architecture</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="brief-message">
              About the project
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Tell me about your idea, requirements, and timeline…"
                maxLength={3000}
              />
            </label>
            <button className="solid-button" type="submit">
              Send Project Inquiry <ArrowUpRight size={18} />
            </button>
            <p className="form-note" role="status">
              {formSent
                ? "Your email client has been opened with your inquiry. You can also reach out directly to shahzaibnawazoffical@gmail.com."
                : "Brief will open directly in your email client addressed to shahzaibnawazoffical@gmail.com."}
            </p>
          </form>
        </details>
      </AnimatedSection>
    </section>
  );
}
