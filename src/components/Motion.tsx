import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

export const motionTimings = {
  short: 0.16,
  base: 0.24,
  medium: 0.36,
  long: 0.56,
};

export function useMotionAwareVariants() {
  const reduceMotion = useReducedMotion();

  const page = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 },
    animate: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    exit: reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 },
    transition: {
      duration: reduceMotion ? 0 : motionTimings.base,
      ease: "easeOut",
    },
  } satisfies MotionProps;

  const section = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0.98, y: 10 },
    whileInView: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : motionTimings.medium,
      ease: [0.22, 1, 0.36, 1],
    },
  } satisfies MotionProps;

  const stagger = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0 },
    whileInView: reduceMotion ? { opacity: 1 } : { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      staggerChildren: reduceMotion ? 0 : 0.08,
      delayChildren: reduceMotion ? 0 : 0.05,
    },
  } satisfies MotionProps;

  return { page, section, stagger, reduceMotion };
}

export function MotionSection({
  children,
  className,
  delay = 0,
  id,
}: PropsWithChildren<{ className?: string; delay?: number; id?: string }>) {
  const { section, reduceMotion } = useMotionAwareVariants();
  return (
    <motion.section
      className={className}
      id={id}
      initial={section.initial}
      whileInView={section.whileInView}
      viewport={section.viewport}
      transition={{ ...section.transition, delay: reduceMotion ? 0 : delay }}
    >
      {children}
    </motion.section>
  );
}
