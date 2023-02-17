"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";

const Overlay = motion(Dialog.Overlay);

const Content = motion(Dialog.Content);

export function LoginModal() {
  const [isLogin, setIsLogin] = React.useState(true);
  const [state, setState] = React.useState<"idle" | "loading" | "success">(
    "idle"
  );
  const submit = async () => {
    setState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setState("success");
  };

  return (
    <Dialog.Portal>
      <Overlay
        className="fixed inset-0 bg-neutral-900/20 backdrop-blur-sm"
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
        onCloseAutoFocus={() => {
          setState("idle");
          setIsLogin(true);
        }}
      >
        <motion.div className="bg-gray2 border border-gray4 p-10 rounded-lg w-[400px] relative">
          <div className="h-px absolute -top-[1px] left-0 right-0 bg-gradient-to-r from-transparent via-gray5 to-transparent" />
          <Dialog.Title className="text-2xl font-bold mb-6 flex gap-2">
            <TitleToggle active={isLogin} onClick={() => setIsLogin(true)}>
              Login
            </TitleToggle>
            <span className="text-gray8">/</span>
            <TitleToggle active={!isLogin} onClick={() => setIsLogin(false)}>
              Sign up
            </TitleToggle>
          </Dialog.Title>
          <div className="-mx-10 px-10 overflow-hidden relative">
            <AnimatePresence mode="popLayout">
              {isLogin ? (
                <motion.form
                  key="login"
                  initial={{ x: -400 }}
                  animate={{ x: 0 }}
                  exit={{ x: -400 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="w-full relative group overflow-hidden py-[1px] shrink-0"
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    submit();
                  }}
                >
                  <label
                    htmlFor="login-email"
                    className="text-gray10 text-sm mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    className="block w-full p-2 border rounded-[4px] border-gray6 placeholder:text-gray8 focus:outline-gray10 disabled:text-gray8 mb-4 bg-gray2"
                    placeholder="john@example.com"
                    disabled={state === "loading"}
                  />
                  <label
                    htmlFor="login-password"
                    className="text-gray10 text-sm mb-2 block"
                  >
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    className="block w-full p-2 border rounded-[4px] border-gray6 placeholder:text-gray8 focus:outline-gray10 disabled:text-gray8 mb-6 bg-gray2"
                    placeholder="john1234"
                    disabled={state === "loading"}
                  />
                  <button className="block bg-gray4 w-full p-2 border border-gray6 rounded-[4px] text-gray11 text-sm focus:outline-gray10">
                    Login
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  key="signup"
                  initial={{ x: 400 }}
                  animate={{ x: 0 }}
                  exit={{ x: 400 }}
                  transition={{ type: "spring", damping: 20 }}
                  className="w-full relative group overflow-hidden py-[1px] shrink-0"
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    submit();
                  }}
                >
                  <label
                    htmlFor="login-email"
                    className="text-gray10 text-sm mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    className="block w-full p-2 border rounded-[4px] border-gray6 placeholder:text-gray8 focus:outline-gray10 disabled:text-gray8 mb-4 bg-gray2"
                    placeholder="john@example.com"
                    disabled={state === "loading"}
                  />
                  <label
                    htmlFor="login-password"
                    className="text-gray10 text-sm mb-2 block"
                  >
                    Password
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    className="block w-full p-2 border rounded-[4px] border-gray6 placeholder:text-gray8 focus:outline-gray10 disabled:text-gray8 mb-6 bg-gray2"
                    placeholder="john1234"
                    disabled={state === "loading"}
                  />
                  <button className="block bg-gray4 w-full p-2 border border-gray6 rounded-[4px] text-gray11 text-sm focus:outline-gray10">
                    Sign up
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
          <Dialog.Close asChild>
            <button className="absolute -top-5 -right-5 flex items-center justify-center w-10 h-10 bg-gray3 rounded-full border border-gray5 shadow-md">
              <Cross1Icon />
            </button>
          </Dialog.Close>
        </motion.div>
      </Content>
    </Dialog.Portal>
  );
}

const TitleToggle = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        active ? undefined : "opacity-20 hover:opacity-100 transition-opacity"
      }
    >
      {children}
    </button>
  );
};
