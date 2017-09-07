var input: any[] = process.argv;
var filtered: number[] = [];

input.forEach((element: any) => {
  if (!Number.isNaN(Number(element))) filtered.push(Number(element));
});

if (filtered.length === 0) {
  filtered = [5, 2, 4, 6, 1, 3];
  console.log('To sort a custom set of number, add them to the command:');
  console.log('npm run insertion-sort ' + filtered.join(' ') + '\n\n');
}

var result: any[] = [];

console.log('Unsorted array:', filtered);

while (filtered.length > 0) {
  let insertion: number = filtered.pop();
  for (let i: number = 0; i <= result.length; i++) {
    if (i === result.length) {
      result.push(insertion);
      break;
    } else if (insertion <= result[i]) {
      result.splice(i, 0, insertion);
      break;
    }
  }
}

console.log('Sorted array:', result);