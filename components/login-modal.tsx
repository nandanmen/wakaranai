"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useSupabase } from "@/app/supabase";

const Overlay = motion(Dialog.Overlay);

const Content = motion(Dialog.Content);

export function LoginModal() {
  const { supabase } = useSupabase();
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
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={isLogin ? "login" : "signup"}
                initial={{ x: isLogin ? -400 : 400 }}
                animate={{ x: 0 }}
                exit={{ x: isLogin ? -400 : 400 }}
                transition={{ type: "spring", damping: 30, stiffness: 250 }}
              >
                {isLogin ? (
                  <Form
                    isLogin
                    state={state}
                    onSubmit={async ({ email, password }) => {
                      setState("loading");
                      const { error } = await supabase.auth.signInWithPassword({
                        email,
                        password,
                      });
                      if (error) {
                        console.error(error);
                      }
                      setState("success");
                    }}
                  />
                ) : (
                  <Form
                    isLogin={false}
                    state={state}
                    onSubmit={async ({ email, password }) => {
                      setState("loading");
                      const { error } = await supabase.auth.signUp({
                        email,
                        password,
                      });
                      if (error) {
                        console.error(error);
                      }
                      setState("success");
                    }}
                  />
                )}
              </motion.div>
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

const Form = ({
  isLogin,
  state,
  onSubmit,
}: {
  isLogin: boolean;
  state: "idle" | "loading" | "success";
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
}) => {
  return (
    <form
      className="w-full relative group overflow-hidden py-[1px] shrink-0"
      onSubmit={async (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        const emailInput = form.elements.namedItem("email") as HTMLInputElement;
        const passwordInput = form.elements.namedItem(
          "password"
        ) as HTMLInputElement;
        onSubmit({ email: emailInput.value, password: passwordInput.value });
      }}
    >
      <label
        htmlFor={`${isLogin ? "login" : "signup"}-email`}
        className="text-gray10 text-sm mb-2 block"
      >
        Email
      </label>
      <input
        id={`${isLogin ? "login" : "signup"}-email`}
        type="email"
        name="email"
        className="block w-full p-2 border rounded-[4px] border-gray6 placeholder:text-gray8 focus:outline-gray10 disabled:text-gray8 mb-4 bg-gray2"
        placeholder="john@example.com"
        disabled={state === "loading"}
        autoComplete="email"
      />
      <label
        htmlFor={`${isLogin ? "login" : "signup"}-password`}
        className="text-gray10 text-sm mb-2 block"
      >
        Password
      </label>
      <input
        id={`${isLogin ? "login" : "signup"}-password`}
        type="password"
        name="password"
        className="block w-full p-2 border rounded-[4px] border-gray6 placeholder:text-gray8 focus:outline-gray10 disabled:text-gray8 mb-6 bg-gray2"
        placeholder="john1234"
        disabled={state === "loading"}
        autoComplete={isLogin ? "current-password" : "new-password"}
      />
      <button className="block bg-gray4 w-full p-2 border border-gray6 rounded-[4px] text-gray11 text-sm focus:outline-gray10">
        {isLogin ? "Login" : "Sign up"}
      </button>
    </form>
  );
};
