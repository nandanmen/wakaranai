export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-y-auto grid grid-cols-[300px_1fr_450px]">
      {children}
    </div>
  );
}
