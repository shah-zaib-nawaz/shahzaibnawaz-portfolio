"use client";

import React from "react";
import { Globe, Instagram, Github, ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const p = portfolioData.personal;
  const c = portfolioData.contact;

  return (
    <footer className="footer">
      <a className="wordmark" href="#home">
        {p.wordmark}
        <span>{p.wordmarkSymbol}</span>
      </a>

      <span suppressHydrationWarning>
        © {currentYear} {p.copyrightText}
      </span>

      <div>
        <a
          href={c.studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${c.studioName} website`}
        >
          <Globe size={17} />
        </a>
        <a
          href={c.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram ${c.instagramHandle}`}
        >
          <Instagram size={17} />
        </a>
        <a
          href={c.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub ${c.githubUser}`}
        >
          <Github size={17} />
        </a>
        <a href="#home" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}
