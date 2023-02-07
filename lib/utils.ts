export const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
};

export const getRandomUnique = (min: number, max: number, count: number) => {
  const numbers = new Set<number>();
  while (numbers.size < Math.min(count, max - min + 1)) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(numbers);
};
