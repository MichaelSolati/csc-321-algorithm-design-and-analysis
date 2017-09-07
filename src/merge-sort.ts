var input: any[] = process.argv;
var filtered: number[] = [];

input.forEach((element: any) => {
  if (!Number.isNaN(Number(element))) filtered.push(Number(element));
});

if (filtered.length === 0) {
  filtered = [30, 90, 10, 5, 7, 8, 20, 15, 25];
  console.log('To sort a custom set of number, add them to the command:');
  console.log('npm run merge-sort ' + filtered.join(' ') + '\n\n');
}

console.log('Unsorted array:', filtered);

function mergeSort(input: number[]): number[] {
  if (input.length === 1) return input;
  const a: number[] = input.slice(0, Math.floor(input.length / 2));
  const b: number[] = input.slice(Math.floor(input.length / 2));
  return conquer(mergeSort(a), mergeSort(b));
}

function conquer(a: number[], b: number[]): number[] {
  const c: number[] = [];
  while (a.length && b.length) {
    (a[0] < b[0]) ? c.push(a.shift()) : c.push(b.shift());
  }
  while (a.length) {
    c.push(a.shift());
  }
  while (b.length) {
    c.push(b.shift());
  }
  return c;
}

console.log('Sorted array:', mergeSort(filtered));