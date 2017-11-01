import { BinaryTree } from './binary-tree';

var input: any[] = process.argv;
var filtered: number[] = [];

input.forEach((element: any) => {
  if (!Number.isNaN(Number(element))) filtered.push(Number(element));
});

if (filtered.length === 0) {
  filtered = [5, 2, 4, 6, 1, 3];
  console.log('To insert a custom set of numbers, add them to the command:');
  console.log('npm run binary-tree ' + filtered.join(' ') + '\n\n');
}

var binarytree: BinaryTree = new BinaryTree(filtered);

console.log(binarytree.root);