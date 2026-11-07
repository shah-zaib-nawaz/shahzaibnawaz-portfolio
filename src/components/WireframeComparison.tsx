"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMotion } from "./MotionContext";
import { AnimatedSection } from "./AnimatedSection";
import { MediaImage } from "./MediaImage";
import { portfolioData } from "@/data/portfolioData";

export function WireframeComparison() {
  const containerRef = useRef<HTMLElement>(null);
  const motionEnabled = useMotion();
  const [userInteracted, setUserInteracted] = useState(false);
  const [cutValue, setCutValue] = useState(65);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!userInteracted && motionEnabled) {
      setCutValue(Math.round(90 - latest * 80));
    }
  });

  const headingX = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const cmp = portfolioData.wireframeComparison;

  return (
    <section
      className="breakdown section-wrap"
      ref={containerRef}
      aria-labelledby="breakdown-title"
    >
      <AnimatedSection className="breakdown-copy">
        <span className="eyebrow">DESIGN UNDER THE HOOD</span>
        <motion.h2
          id="breakdown-title"
          className="display"
          style={motionEnabled ? { x: headingX } : {}}
        >
          FROM WIREFRAME. <br />
          <span className="accent">TO LIVE.</span>
        </motion.h2>
        <p>
          One page. Every layer of thinking. <br />
          Drag to see a grey-box wireframe become a finished, live interface.
        </p>
        <span className="breakdown-credit">
          {cmp.creditProject} <br />
          {cmp.creditRole}
        </span>
      </AnimatedSection>

      <AnimatedSection className="comparison">
        <div
          className="comparison-stage"
          style={
            {
              "--cut": `${motionEnabled || userInteracted ? cutValue : 50}%`,
            } as React.CSSProperties
          }
        >
          <MediaImage src={cmp.wireframe} alt="Grey-box wireframe layout" />
          <div className="comparison-final">
            <MediaImage src={cmp.final} alt="Finished live interface design" />
          </div>
          <span className="comparison-label raw-label">WIREFRAME</span>
          <span className="comparison-label final-label">FINAL DESIGN</span>
          <div className="comparison-divider">
            <span>
              <ChevronLeft size={14} />
              <ChevronRight size={14} />
            </span>
          </div>
          <input
            aria-label="Comparison before and after"
            aria-valuetext={`${cutValue}% wireframe, ${100 - cutValue}% final design`}
            type="range"
            min="0"
            max="100"
            value={cutValue}
            onChange={(e) => {
              setUserInteracted(true);
              setCutValue(Number(e.target.value));
            }}
          />
        </div>
        <div className="comparison-caption">
          <span>DRAG TO SEE THE PROCESS</span>
          <span>DRAG / SCROLL</span>
        </div>
      </AnimatedSection>
    </section>
  );
}
