"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, X, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { ProjectCard } from "./ProjectCard";
import { BrandSection } from "./BrandSection";
import { portfolioData, Project } from "@/data/portfolioData";

interface PortfolioProps {
  onProject: (project: Project) => void;
}

export function Portfolio({ onProject }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllWork, setShowAllWork] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  const allProjects = portfolioData.projects;
  const categories = portfolioData.categories;
  const featuredTitles = [
    "Try The Look",
    "Attitude",
    "Benchmark Electronics",
    "Nike Design",
    "Metropolitan",
    "Pollheim Suits",
    "Rare Luxury Jewelry",
    "Release Store",
    "Shine Serene",
  ];
  const featuredProjects = featuredTitles
    .map((title) => allProjects.find((p) => p.title === title))
    .filter(Boolean) as Project[];

  const filteredProjects = allProjects.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = `${p.title} ${p.category} ${p.role}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedProjects =
    showAllWork || activeCategory !== "All" || searchQuery
      ? filteredProjects.slice(0, visibleCount)
      : featuredProjects;

  const handleToggleAll = () => {
    if (showAllWork) {
      setShowAllWork(false);
      setActiveCategory("All");
      setSearchQuery("");
    } else {
      setShowAllWork(true);
      setVisibleCount(9);
    }
  };

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setShowAllWork(true);
    setVisibleCount(9);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowAllWork(true);
    setVisibleCount(9);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <section id="portfolio" className="portfolio section-wrap">
      <AnimatedSection className="section-heading">
        <div>
          <span className="eyebrow">01 / SELECTED WORK</span>
          <h2>
            WORK THAT SPEAKS<span className="accent">.</span>
          </h2>
        </div>
        <button className="text-link" onClick={handleToggleAll}>
          {showAllWork ? "FEATURED WORK" : "ALL WORK"}
          <ArrowUpRight size={21} />
        </button>
      </AnimatedSection>

      <AnimatedSection className="portfolio-toolbar">
        <div className="filters" role="group" aria-label="Work categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeCategory === cat ? "selected" : ""}
              aria-pressed={activeCategory === cat}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  className="filter-line"
                  layoutId="filter-line"
                />
              )}
            </button>
          ))}
        </div>

        <label className="search-box">
          <Search size={15} />
          <span>Search</span>
          <input
            aria-label="Search work"
            type="search"
            placeholder="Title or category…"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </label>
      </AnimatedSection>

      <motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((p, idx) => (
            <ProjectCard
              key={p.category + p.title + p.media}
              project={p}
              index={idx}
              onOpen={onProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {displayedProjects.length === 0 && (
        <div className="empty-state">
          <p>No work found for “{searchQuery}”.</p>
          <button className="text-link" onClick={resetFilters}>
            Reset search <X size={15} />
          </button>
        </div>
      )}

      {showAllWork && filteredProjects.length > visibleCount && (
        <div className="load-more">
          <button
            className="outline-button"
            onClick={() => setVisibleCount((prev) => prev + 9)}
          >
            Show more work <Plus size={16} />
          </button>
          <span>
            {displayedProjects.length} of {filteredProjects.length} projects
          </span>
        </div>
      )}

      <BrandSection />
    </section>
  );
}
