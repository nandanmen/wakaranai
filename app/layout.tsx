import { getSession } from "@/lib/supabase/server";
import { SupabaseListener, SupabaseProvider } from "./supabase";
import "./globals.css";
import { LoadingScreen } from "./loading-screen";

const loadScript = `
  (function () {
    if (localStorage.getItem('been-here')) {
      document.body.style.setProperty('--loading-display', 'none');
    } else {
      localStorage.setItem('been-here', 'true');
    }
  })()
`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { session },
  } = await getSession();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray1">
        <script dangerouslySetInnerHTML={{ __html: loadScript }} />
        {!session && <LoadingScreen />}
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <div className="h-screen overflow-y-auto grid grid-cols-[300px_1fr_450px]">
            {children}
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
