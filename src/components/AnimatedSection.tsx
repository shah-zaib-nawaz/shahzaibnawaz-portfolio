"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMotion, easeCustom } from "./MotionContext";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "h2" | "header" | "p";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "div",
}: AnimatedSectionProps) {
  const motionEnabled = useMotion();
  const MotionComponent = (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={motionEnabled ? { opacity: 0, y: 32 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: motionEnabled ? 0.75 : 0,
        delay,
        ease: easeCustom,
      }}
    >
      {children}
    </MotionComponent>
  );
}
