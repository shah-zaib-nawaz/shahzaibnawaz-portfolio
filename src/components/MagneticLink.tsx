"use client";

import React from "react";
import { motion, useSpring } from "framer-motion";
import { useMotion } from "./MotionContext";

interface MagneticLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function MagneticLink({
  children,
  className = "",
  href,
  ...props
}: MagneticLinkProps) {
  const motionEnabled = useMotion();
  const x = useSpring(0, { stiffness: 220, damping: 20 });
  const y = useSpring(0, { stiffness: 220, damping: 20 });

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!motionEnabled || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...(props as any)}
    >
      {children}
    </motion.a>
  );
}
