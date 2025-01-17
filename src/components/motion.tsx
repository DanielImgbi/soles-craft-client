"use client";
import React, { Children } from "react";
import { useInView, motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type MotionProps = {
  children: ReactNode;
  amount?: number;
  className?: string;
};
const Motion = ({ children, amount, className }: MotionProps) => {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, amount: amount ?? 0.4 });
  const animate = {
    initial: { y: "100%" },
    open: (i: number) => ({
      y: "0%",
      transition: { duration: 1, delay: 0.15 * i, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  return (
    <div ref={body}>
      {Children.map(children, (phrase, index) => {
        return (
          <motion.div
            key={index}
            variants={animate}
            initial="initial"
            animate={isInView ? "open" : ""}
            custom={index}
            className={`"h-full w-full ${className}`}
          >
            {phrase}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Motion;
