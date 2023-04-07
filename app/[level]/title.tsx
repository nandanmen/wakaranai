"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Title() {
  const [toggled, setToggled] = React.useState(false);
  return (
    <motion.h2
      className="relative text-xl font-title overflow-hidden leading-none w-fit flex items-center"
      onHoverStart={() => setToggled(true)}
      onHoverEnd={() => setToggled(false)}
    >
      <Link href="/" className="flex items-center">
        <span className="block">わか</span>
        <motion.span
          animate={{ y: toggled ? -32 : 0 }}
          transition={{ type: "spring", bounce: 0, delay: toggled ? 0.6 : 0.2 }}
        >
          <span className="relative block">
            <motion.span
              style={{ y: -1.5, originX: "left" }}
              animate={{ scaleX: toggled ? 1 : 0 }}
              initial={{ scaleX: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                delay: toggled ? 0 : 0.5,
              }}
              className="absolute left-0 right-0 h-[3px] bg-gray12 top-1/2"
            />
            <motion.span
              animate={{ opacity: toggled ? 0.3 : 1 }}
              transition={{ delay: toggled ? 0 : 0.5 }}
            >
              らない
            </motion.span>
            <span className="absolute top-full block left-0 translate-y-3">
              る
            </span>
          </span>
        </motion.span>
      </Link>
    </motion.h2>
  );
}
