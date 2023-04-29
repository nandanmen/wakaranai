"use client";

import React from "react";
import { CheckCircle } from "@/app/icons";
import type { Word, WordProficiency } from "@/lib/types";
import { motion } from "framer-motion";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";

export function VocabList({
  words,
  proficiency,
}: {
  words: Word[];
  proficiency: Record<number, WordProficiency>;
}) {
  const [active, setActive] = React.useState<number | null>(null);
  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
        {words.map((word) => {
          const _proficiency = proficiency[word.id]?.proficiency / 3 ?? 0;
          return (
            <Vocab
              key={word.id}
              word={word}
              proficiency={_proficiency}
              open={active === word.id}
              onOpenChange={(isOpen) => {
                if (isOpen) setActive(word.id);
                else setActive(null);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

const Vocab = ({
  word,
  proficiency,
  open,
  onOpenChange,
}: {
  word: Word;
  proficiency: number;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}) => {
  return (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <li className="bg-gray-1 border-gray-6 border rounded-md relative shadow-sm overflow-hidden hover:border-gray-12 group">
        <Popover.Trigger asChild>
          <button className="p-2 block w-full text-left">
            <motion.span
              style={{ originX: "left" }}
              animate={{ scaleX: proficiency }}
              initial={{ scaleX: 0 }}
              transition={{ type: "spring", bounce: 0 }}
              className="absolute inset-0 bg-gray-3"
            />
            <span className="relative flex gap-2">
              <span>{word.literal}</span>
              <span className="hidden group-hover:block text-gray-11">
                {word.senses[0].readings[0]}
              </span>
            </span>
            {proficiency === 1 && (
              <span className="absolute right-2 bottom-2 text-gray-10">
                <CheckCircle />
              </span>
            )}
          </button>
        </Popover.Trigger>
      </li>
      <Popover.Portal>
        <Popover.Content align="start" side="bottom">
          <VocabExpanded word={word} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const offset = 8;

const VocabExpanded = ({ word }: { word: Word }) => {
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    setExpanded(true);
  }, []);

  return (
    <div
      style={{
        transform: `translate(calc(-1px - ${
          expanded ? offset : 0
        }px), calc(-1 * var(--radix-popover-trigger-height) - 1px - ${
          expanded ? offset : 0
        }px))`,
        width: `calc(var(--radix-popover-trigger-width) + 2px + ${
          expanded ? offset * 2 : 0
        }px)`,
        height: expanded
          ? "auto"
          : `calc(var(--radix-popover-trigger-height) + 2px)`,
      }}
    >
      <motion.div
        layout
        className={clsx(
          "bg-gray-1 dark:bg-gray-2 border-gray-6 border rounded-md relative shadow-lg p-2 h-full divide-y divide-dashed divide-gray-6",
          expanded && "p-4"
        )}
      >
        <div className={clsx("flex pb-2 gap-2", expanded && "justify-between")}>
          <motion.p layout>{word.literal}</motion.p>
          <motion.p layout className="text-gray-11">
            {word.senses[0].readings[0]}
          </motion.p>
        </div>
        <motion.p
          className="pt-2 flex text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {word.senses
            .flatMap((sense) => sense.meanings)
            .slice(0, 2)
            .map((meaning) => meaning.texts[0])
            .join(", ")}
        </motion.p>
      </motion.div>
    </div>
  );
};
