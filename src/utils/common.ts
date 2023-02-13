export function* rangeGenerator(start: number, end: number) {
  let i = start;
  do {
    yield i++;
  } while (i <= end);
}
