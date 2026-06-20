import type { Transition } from "motion/react";

export const springSoft: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.9,
};

export const springFirm: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 32,
};

export const easeOut: Transition = {
  duration: 0.32,
  ease: [0.16, 1, 0.3, 1],
};

export const durations = {
  fast: 0.18,
  normal: 0.32,
  slow: 0.55,
} as const;

export const STAGGER_MS = 40;
