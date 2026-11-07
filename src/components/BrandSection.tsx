"use client";

import React, { useRef, useState, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Plus, Minus } from "lucide-react";
import { useMotion } from "./MotionContext";
import { AnimatedSection } from "./AnimatedSection";
import { portfolioData } from "@/data/portfolioData";

export function BrandSection() {
  const motionEnabled = useMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const singleSetWidthRef = useRef<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showAllGrid, setShowAllGrid] = useState(false);
  const tools = portfolioData.brandTools;

  useEffect(() => {
    if (!viewportRef.current || showAllGrid) return;
    const calculateWidth = () => {
      const set = viewportRef.current?.querySelector(".brand-set");
      if (set) {
        singleSetWidthRef.current = set.getBoundingClientRect().width || 0;
      }
    };
    const observer = new ResizeObserver(calculateWidth);
    observer.observe(viewportRef.current);
    calculateWidth();
    return () => observer.disconnect();
  }, [showAllGrid]);

  useAnimationFrame((time, delta) => {
    if (
      !motionEnabled ||
      isPaused ||
      isHovered ||
      showAllGrid ||
      !viewportRef.current ||
      !singleSetWidthRef.current
    )
      return;

    const el = viewportRef.current;
    el.scrollLeft += Math.min(delta, 40) * 0.038;
    if (el.scrollLeft >= singleSetWidthRef.current) {
      el.scrollLeft -= singleSetWidthRef.current;
    }
  });

  const scrollByDirection = (direction: number) => {
    setIsPaused(true);
    viewportRef.current?.scrollBy({
      left: direction * (viewportRef.current.clientWidth * 0.7),
      behavior: motionEnabled ? "smooth" : "auto",
    });
  };

  return (
    <AnimatedSection className="brand-section">
      <div className="brand-heading">
        <p>
          BUILT WITH <br />
          <strong>THE TOOLS I TRUST.</strong>
        </p>
        <div>
          <button
            className="brand-all"
            onClick={() => setShowAllGrid((prev) => !prev)}
            aria-expanded={showAllGrid}
            aria-controls="brand-collection"
          >
            {showAllGrid ? "SHOW ROW" : `SEE ALL (${tools.length})`}
            {showAllGrid ? <Minus size={14} /> : <Plus size={14} />}
          </button>

          {!showAllGrid && (
            <>
              <button
                className="icon-button brand-pause"
                aria-label={isPaused ? "Play logo animation" : "Pause logo animation"}
                aria-pressed={isPaused}
                onClick={() => setIsPaused((prev) => !prev)}
              >
                {isPaused ? <Play size={13} /> : <Pause size={13} />}
              </button>
              <button
                className="icon-button"
                onClick={() => scrollByDirection(-1)}
                aria-label="Previous logo"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                className="icon-button"
                onClick={() => scrollByDirection(1)}
                aria-label="Next logo"
              >
                <ChevronRight size={17} />
              </button>
            </>
          )}
        </div>
      </div>

      <div
        id="brand-collection"
        className={showAllGrid ? "brand-full-grid" : "brand-viewport"}
        ref={viewportRef}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setIsHovered(true);
        }}
        onPointerLeave={() => setIsHovered(false)}
        onPointerDown={() => setIsPaused(true)}
        onFocusCapture={() => setIsHovered(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setIsHovered(false);
        }}
        tabIndex={showAllGrid ? undefined : 0}
        role={showAllGrid ? "list" : "region"}
        aria-label="Tools and technologies, scroll to see all"
      >
        {showAllGrid ? (
          tools.map((t) => (
            <div className="brand-logo" role="listitem" key={t.file}>
              <img
                src={`/Asset/svg/brand/${t.file}`}
                alt={t.name}
                title={t.name}
                width="150"
                height="60"
                loading="lazy"
              />
              <span>{t.name}</span>
            </div>
          ))
        ) : (
          <div className="brand-rail">
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                className="brand-set"
                aria-hidden={copyIndex === 1 ? true : undefined}
              >
                {tools.map((t) => (
                  <div className="brand-logo" key={t.file}>
                    <img
                      src={`/Asset/svg/brand/${t.file}`}
                      alt={copyIndex === 1 ? "" : t.name}
                      title={t.name}
                      width="150"
                      height="60"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
