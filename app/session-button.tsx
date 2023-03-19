"use client";

import { useSupabase } from "@/app/supabase";
import { useRouter } from "next/navigation";
import { LoginModal } from "@/components/login-modal";
import { Root, Trigger } from "@radix-ui/react-dialog";

export function SessionButton() {
  const { supabase, session } = useSupabase();
  const router = useRouter();
  if (session) {
    return (
      <button
        className="block w-full text-center border rounded-md border-gray4 p-2 bg-gray1 text-sm font-bold hover:bg-gray2"
        onClick={async () => {
          await supabase.auth.signOut();
          router.refresh();
        }}
      >
        Logout
      </button>
    );
  }

  return (
    <Root>
      <Trigger asChild>
        <button className="block w-full text-center border rounded-md border-gray4 p-2 bg-gray1 text-sm font-bold hover:bg-gray2">
          Login
        </button>
      </Trigger>
      <LoginModal />
    </Root>
  );
}
