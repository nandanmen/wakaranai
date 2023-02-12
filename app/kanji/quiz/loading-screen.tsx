"use client";

import React from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

export function LoadingScreen() {
  const controls = useAnimationControls();
  return (
    <motion.div
      className="bg-black inset-0 flex items-center justify-center loading-mask fixed z-10 pointer-events-none"
      animate={controls}
      initial={{ "--stop": "100%" } as any}
      aria-hidden="true"
    >
      <LoadingAnimation
        onComplete={() => {
          controls.start({
            "--stop": "0%",
            transition: {
              delay: 0.2,
              type: "tween",
              duration: 0.8,
            },
          } as any);
        }}
      />
    </motion.div>
  );
}

function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  const [toggled, setToggled] = React.useState(false);
  return (
    <h1 className="font-bold text-[10rem] flex">
      <motion.span
        className="block"
        layout
        transition={{ type: "spring", damping: 20 }}
      >
        わか
      </motion.span>
      <AnimatePresence mode="popLayout">
        {toggled ? (
          <motion.span
            key="final"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 64, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onAnimationComplete={onComplete}
          >
            る.
          </motion.span>
        ) : (
          <motion.span
            key="initial"
            className="relative block"
            animate="hide"
            initial="show"
            exit="exit"
            onAnimationComplete={() => setToggled(true)}
          >
            <motion.span
              className="block"
              variants={{
                hide: { opacity: 0.1 },
                show: { opacity: 1 },
                exit: { y: -64, opacity: 0 },
              }}
              transition={{ type: "spring", damping: 20, restDelta: 0.001 }}
            >
              らない!
            </motion.span>
            <motion.span
              className="absolute left-4 right-0 block h-[24px] bg-white top-1/2"
              style={{ y: "-50%", originX: "left" }}
              variants={{
                hide: { scaleX: 1 },
                show: { scaleX: 0 },
                exit: { scaleX: 0, originX: "right" },
              }}
              transition={{ type: "spring", damping: 20, restDelta: 0.001 }}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </h1>
  );
}
