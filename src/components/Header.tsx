"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Pause, Play } from "lucide-react";
import { useMotion } from "./MotionContext";
import { portfolioData } from "@/data/portfolioData";

interface HeaderProps {
  onToggleMotion: () => void;
}

export function Header({ onToggleMotion }: HeaderProps) {
  const motionEnabled = useMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );

    const sections = document.querySelectorAll("main > section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems: [string, string][] = [
    ["portfolio", "Work"],
    ["about", "About"],
    ["experience", "Journey"],
    ["contact", "Contact"],
  ];

  const mobileNavItems: [string, string][] = [
    ["home", "Home"],
    ["portfolio", "Work"],
    ["about", "About"],
    ["experience", "Journey"],
    ["contact", "Contact"],
  ];

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${portfolioData.personal.name}, home`}>
        {portfolioData.personal.wordmark}
        <span>{portfolioData.personal.wordmarkSymbol}</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="motion-toggle"
          onClick={onToggleMotion}
          aria-label={motionEnabled ? "Pause animation" : "Enable animation"}
          aria-pressed={!motionEnabled}
        >
          {motionEnabled ? <Pause size={13} /> : <Play size={13} />}
          <span>Motion {motionEnabled ? "on" : "off"}</span>
        </button>

        <a className="header-contact" href="#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle icon-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {mobileNavItems.map(([id, label], idx) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>0{idx + 1}</span>
                {label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
