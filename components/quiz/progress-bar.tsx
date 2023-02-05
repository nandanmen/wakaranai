import { motion } from "framer-motion";

const range = (start: number, end: number) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};

export const ProgressBar = ({
  value,
  steps,
}: {
  value: number;
  steps: number;
}) => {
  return (
    <motion.div
      layout
      className="w-full flex h-[6px] dark:bg-neutral-900 bg-neutral-300 rounded-full overflow-hidden relative"
    >
      <motion.div
        layout
        className="dark:bg-white bg-neutral-900 h-full"
        animate={{ width: `${value * 100}%` }}
        transition={{ type: "spring", damping: 20 }}
      />
      {range(0, steps).map((index) => {
        const step = 100 / steps;
        const pos = step * (index + 1);
        return (
          <motion.div
            layout
            key={pos}
            className="absolute h-full w-[2px] dark:bg-black bg-white"
            style={{ left: `${pos}%` }}
          />
        );
      })}
    </motion.div>
  );
};
