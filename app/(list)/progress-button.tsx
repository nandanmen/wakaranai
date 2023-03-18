import cn from "classnames";
import { motion } from "framer-motion";
import { SparkleIcon } from "./sparkle-icon";

type ProgressButtonProps = {
  proficiency: number;
  direction?: "x" | "y";
} & Omit<React.ComponentPropsWithoutRef<"button">, "href">;

export function ProgressButton({
  proficiency,
  children,
  className,
  direction = "y",
  ...props
}: ProgressButtonProps) {
  const progressProps =
    direction === "y"
      ? {
          style: { originY: "bottom" },
          animate: { scaleY: proficiency },
          initial: { scaleY: 0 },
        }
      : {
          style: { originX: "left" },
          animate: { scaleX: proficiency },
          initial: { scaleX: 0 },
        };

  return (
    <button
      className={cn(
        "rounded-md flex items-center justify-center bg-gray2 border border-gray4 relative overflow-hidden hover:outline-4 hover:outline-gray8 focus:outline-none focus-visible:outline-4 focus-visible:outline-gray8",
        proficiency < 1 ? "shadow-md" : "shadow-gray4/60 border-gray6",
        className
      )}
      style={
        proficiency === 1
          ? { boxShadow: "0 0 10px 5px var(--tw-shadow-color)" }
          : undefined
      }
      {...props}
    >
      <motion.span
        className={cn("absolute inset-0 from-gray5 to-gray2 bg-gradient-to-bl")}
        transition={{ type: "spring", damping: 20 }}
        {...progressProps}
      />
      {proficiency === 1 && (
        <span className="absolute top-1 right-1">
          <SparkleIcon />
        </span>
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
