var input: any[] = process.argv;
var filtered: number[] = [];

input.forEach((element: any) => {
  if (!Number.isNaN(Number(element))) filtered.push(Number(element));
});

if (filtered.length === 0) {
  filtered = [30, 90, 10, 5, 7, 8, 20, 15, 25];
  console.log('To sort a custom set of number, add them to the command:');
  console.log('npm run quick-sort ' + filtered.join(' ') + '\n\n');
}

console.log('Unsorted array:', filtered);

function quicksort(c: number[]): any {
  if (c.length <= 1) { return c; }
  const pivot: number = c.pop();
  const less: number[] = [];
  const more: number[] = [];
  c.forEach((val: number) => (pivot > val) ? less.push(val) : more.push(val));
  return [...quicksort(less), pivot, ...quicksort(more)];

}

console.log('Sorted array:', quicksort(filtered));