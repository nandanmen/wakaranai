const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export default function VocabLoading() {
  <div>
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
      {range(0, 12).map((index) => {
        return (
          <li
            className="h-[42px] bg-gray3 border-gray3 border rounded-md"
            key={index}
          />
        );
      })}
    </ul>
  </div>;
}
