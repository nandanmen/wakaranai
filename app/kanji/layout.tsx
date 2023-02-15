import { getSession } from "@/lib/supabase/server";
import { LoadingScreen } from "./loading-screen";

export default async function KanjiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { session },
  } = await getSession();
  return (
    <div>
      {!session && <LoadingScreen />}
      {children}
    </div>
  );
}
