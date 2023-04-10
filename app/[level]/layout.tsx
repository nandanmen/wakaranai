import { LEVELS } from "@/lib/constants";
import { LevelLink } from "./level-link";
import { Title } from "./title";
import { Tabs } from "./tabs";
import { QuizLink } from "./quiz-link";

export function generateStaticParams() {
  return LEVELS.map((level) => {
    return { level };
  });
}

export default function LevelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[min-content_1fr] p-16 min-h-screen gap-12">
      <Title />
      <div className="sticky flex justify-between top-4 z-10">
        <Tabs />
        <div>
          <QuizLink />
        </div>
      </div>
      <aside className="space-y-4 sticky top-16 h-fit">
        <div className="bg-gray1 border rounded-lg border-gray6 w-[250px] p-4 shadow-sm">
          <ul className="font-mono">
            {LEVELS.map((level) => {
              return <LevelLink key={level} level={level} />;
            })}
          </ul>
        </div>
      </aside>
      <main className="relative">{children}</main>
    </div>
  );
}
