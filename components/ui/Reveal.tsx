"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.7,
  className = "",
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 35, opacity: 0 };
      case "down":
        return { y: -35, opacity: 0 };
      case "left":
        return { x: 35, opacity: 0 };
      case "right":
        return { x: -35, opacity: 0 };
      case "none":
        return { opacity: 0 };
      default:
        return { y: 35, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
