import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { IconOnly } from "./icon";

const TooltipContent = motion(Tooltip.Content);

export const MarkCorrectButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.button
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -16, opacity: 0 }}
            exit={{ x: 16, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-gray2 hover:bg-gray4 p-2 rounded-full border border-gray4 flex items-center justify-center shadow-sm"
            onClick={onClick}
            type="button"
          >
            <IconOnly type="correct" size={25} style={{ x: -1 }} />
          </motion.button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent
            side="right"
            sideOffset={3}
            className="flex flex-row-reverse"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -16, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="bg-gray4 py-2 px-3 rounded-[4px] text-sm">
              Mark correct
            </div>
            <Tooltip.Arrow className="fill-gray4" width={12} height={8} />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
