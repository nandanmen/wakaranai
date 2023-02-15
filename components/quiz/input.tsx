import { motion } from "framer-motion";
import cn from "classnames";
import type { Answer } from "./types";
import { Icon } from "./icon";

export type FormInputProps = {
  type?: Answer["type"];
  disabled?: boolean;
  label: string;
};

export const FormInput = ({ label, type, disabled }: FormInputProps) => {
  return (
    <motion.label layout="position" className="block w-full relative">
      <span
        className={cn("font-mono text-base text-gray12", {
          "text-gray4": disabled,
        })}
      >
        {label}
      </span>
      <input
        name={label.toLowerCase()}
        className={cn(
          "text-2xl block w-full bg-inherit py-2 border-b focus-visible:border-gray12 focus:outline-none",
          disabled ? "border-gray4" : "border-gray6"
        )}
        type="text"
        disabled={disabled}
      />
      {!disabled && (
        <>
          <Icon type={type} key={type} />
          {type === "skipped" && (
            <motion.p
              className="absolute bottom-2 italic text-neutral-500"
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -16, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              Skipped
            </motion.p>
          )}
        </>
      )}
    </motion.label>
  );
};
