"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, ArrowRightIcon } from "@radix-ui/react-icons";
import { motion, useAnimationControls } from "framer-motion";

const Overlay = motion(Dialog.Overlay);

const Content = motion(Dialog.Content);

export function LoginModal() {
  const [state, setState] = React.useState<"idle" | "loading" | "success">(
    "idle"
  );
  const controls = useAnimationControls();
  const submit = async () => {
    setState("loading");
    controls.start({
      x: "66.6%",
      transition: {
        type: "tween",
        ease: "linear",
        duration: 2,
        repeat: Infinity,
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setState("success");
    controls.stop();
  };

  return (
    <Dialog.Portal>
      <Overlay
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      />
      <Content
        className="fixed top-40 left-1/2"
        style={{ x: "-50%" }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        initial={{ y: 16, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", duration: 0.5 }}
        onCloseAutoFocus={() => setState("idle")}
      >
        <motion.div className="from-dark-800 to-dark-900 bg-gradient-to-b border border-neutral-900 p-10 rounded-lg w-[400px] relative">
          <div className="h-px absolute -top-[1px] left-0 right-0 bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
          <Dialog.Title className="text-2xl font-bold mb-4">
            Login With Email
          </Dialog.Title>
          <form
            className="w-full relative mb-6 group overflow-hidden py-[1px]"
            onSubmit={(evt) => {
              evt.preventDefault();
              controls.start({
                x: "66.6%",
                transition: {
                  type: "tween",
                  ease: "linear",
                  duration: 2,
                  repeat: Infinity,
                },
              });
            }}
          >
            <label htmlFor="login-email" hidden>
              Email
            </label>
            <input
              id="login-email"
              type="email"
              className="block bg-transparent w-full py-3 placeholder:text-neutral-600 focus:outline-none disabled:text-neutral-600"
              placeholder="john@example.com"
              disabled={state === "loading"}
            />
            {state === "success" ? (
              <div className="absolute bottom-3 right-0">
                <svg viewBox="0 0 15 15" width="20" height="20">
                  <motion.path
                    className="stroke-black dark:stroke-white"
                    d="M 4 8 L 7 10.8 L 12 4"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="1.2"
                    animate={{ pathLength: 1 }}
                    initial={{ pathLength: 0 }}
                    transition={{ type: "spring", damping: 20 }}
                  />
                </svg>
              </div>
            ) : (
              <motion.button
                className="absolute bottom-3 right-0"
                animate={state}
                variants={{
                  idle: {
                    x: 0,
                    opacity: 1,
                  },
                  loading: {
                    x: "100%",
                    opacity: 0,
                  },
                }}
                initial="idle"
                transition={{ type: "spring", damping: 20 }}
                onClick={submit}
              >
                <ArrowRightIcon width="20" height="20" />
              </motion.button>
            )}
            <motion.div
              animate={controls}
              className="absolute w-[300%] h-[1px] bottom-0 right-0 from-neutral-500 group-focus-within:from-white"
              style={{
                background: `linear-gradient(to right, var(--tw-gradient-from), transparent 33%, var(--tw-gradient-from) 67%, transparent 100%)`,
              }}
            />
          </form>
          <Dialog.Description className="text-sm text-neutral-600">
            {state === "success" ? (
              <motion.span
                style={{ display: "block" }}
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 16, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                {`Thank you! Check your inbox for a magic link; if it's not there, it might be in the promotions tab.`}
              </motion.span>
            ) : (
              <span key="ready">{`We'll send you a magic link that will either create an account or log in to an existing one.`}</span>
            )}
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="absolute -top-5 -right-5 flex items-center justify-center w-10 h-10 bg-black rounded-full from-dark-800 to-dark-900 bg-gradient-to-b border border-neutral-900 shadow-md">
              <Cross1Icon />
            </button>
          </Dialog.Close>
        </motion.div>
      </Content>
    </Dialog.Portal>
  );
}
