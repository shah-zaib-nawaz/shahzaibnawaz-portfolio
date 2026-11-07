"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export const MotionContext = createContext<boolean>(true);

export function useMotion() {
  return useContext(MotionContext);
}

export const easeCustom = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("shahzaib-motion");
      if (stored === "off") {
        setEnabled(false);
      }
    } catch {
      // fallback
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
  }, [enabled]);

  const toggleMotion = () => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("shahzaib-motion", next ? "on" : "off");
      } catch {
        // ignore
      }
      return next;
    });
  };

  return (
    <MotionContext.Provider value={enabled}>
      {children}
    </MotionContext.Provider>
  );
}
