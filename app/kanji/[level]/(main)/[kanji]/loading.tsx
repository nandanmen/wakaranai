export default function KanjiSidebarLoading() {
  return (
    <aside className="w-[350px] p-8 pb-4 bg-gray2 border border-gray4 h-fit rounded-lg sticky -top-8 self-start">
      <div className="py-8 bg-gray3 border rounded-lg border-gray5 shadow-lg flex items-center justify-center text-[10rem] font-bold leading-none">
        <div className="h-[160px] aspect-square bg-gray4 rounded-lg" />
      </div>
      <h2 className="text-xl mt-4 mb-6 flex justify-center">
        <span className="w-[80%] h-[28px] block bg-gray4" />
      </h2>
      <section className="flex gap-2 mb-2">
        <h3 className="text-gray10 font-mono text-sm w-[30px] shrink-0">Kun</h3>
        <p className="text-lg leading-[1.2] w-full">
          <span className="h-[1.25em] w-full block bg-gray4" />
        </p>
      </section>
      <section className="flex gap-2">
        <h3 className="text-gray10 font-mono text-sm w-[30px] shrink-0">On</h3>
        <p className="text-lg leading-[1.2] w-full">
          <span className="h-[1.25em] w-full block bg-gray4" />
        </p>
      </section>
      <h3 className="font-mono text-sm mt-6 relative text-center">
        <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray6"></span>
        <span className="relative bg-gray2 text-gray10 px-4">Words</span>
      </h3>
      <ul className="divide-y divide-dashed divide-gray6 ">
        <li className="py-4">
          <div className="text-lg h-[28px] bg-gray4" />
        </li>
        <li className="py-4">
          <div className="text-lg h-[28px] bg-gray4" />
        </li>
        <li className="py-4">
          <div className="text-lg h-[28px] bg-gray4" />
        </li>
        <li className="py-4">
          <div className="text-lg h-[28px] bg-gray4" />
        </li>
        <li className="py-4">
          <div className="text-lg h-[28px] bg-gray4" />
        </li>
      </ul>
    </aside>
  );
}
