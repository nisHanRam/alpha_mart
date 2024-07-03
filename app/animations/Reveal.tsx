"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "w-fit" | "w-full";
  whileHover?: {
    scale: number;
    rotate: string;
    transition?: { duration: number };
  };
}

const Reveal = ({
  children,
  width = "w-fit",
  whileHover = { scale: 1, rotate: "0deg", transition: { duration: 0.3 } },
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      whileHover={whileHover}
      className={`relative overflow-hidden ${width}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute left-0 right-0 top-[4px] bottom-[4px] bg-indigo-400 z-20"
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </motion.div>
  );
};

export default Reveal;
