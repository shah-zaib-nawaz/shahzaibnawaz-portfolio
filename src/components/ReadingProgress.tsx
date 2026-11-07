"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useMotion } from "./MotionContext";

export function ReadingProgress() {
  const motionEnabled = useMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="reading-progress"
      style={{
        scaleX: motionEnabled ? smoothProgress : scrollYProgress,
        transformOrigin: "left",
      }}
    />
  );
}
