import cn from "classnames";
import { motion } from "framer-motion";

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
        <span className="absolute -top-4 -left-4 text-gray6">
          <SparkleIcon size={64} />
        </span>
      )}
      <span className="relative">{children}</span>
    </button>
  );
}

const SparkleIcon = ({ size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 4.75C15 7.51142 13.5114 10 10.75 10C13.5114 10 15 12.4886 15 15.25C15 12.4886 16.4886 10 19.25 10C16.4886 10 15 7.51142 15 4.75Z"></path>
        <path d="M8 12.75C8 14.4069 6.40685 16 4.75 16C6.40685 16 8 17.5931 8 19.25C8 17.5931 9.59315 16 11.25 16C9.59315 16 8 14.4069 8 12.75Z"></path>
      </g>
    </svg>
  );
};
