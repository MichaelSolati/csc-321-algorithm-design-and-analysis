# CSC 321: Algorithm Design and Analysis

## Contents
 - [Introduction](#introduction)
 - [Sorts](#sorts)
     - [Insertion Sort](#insertion-sort)
     - [Merge Sort](#merge-sort)
     - [Quick Sort](#quick-sort)
 - [Data Structures](#data-structures)
     - [Binary Tree](#binary-tree)

## Introduction
A slew of algorithms, assignments and other work for my Algorithm Design and Analysis class.

Be sure to `npm install` to install all dependencies.

## Sorts
### Insertion Sort
[(view source)](https://github.com/MichaelSolati/csc-321-algorithm-design-and-analysis/blob/master/src/insertion-sort.ts)
```
npm run insertion-sort
```

From a deck of cards (our input), as we draw one card we add it into our hand (the eventual return) and ensure we place it in order with regards to the other cards by iterating through each card and inserting it before the card that it is less than or equal to.

#### Time Complexity

| Best Case | Average Case | Worst Case |
| --------- |:------------:| ----------:|
| Ω(n)      | θ(n^2)       | O(n^2)     |

If you need more additional resources to better understand insertion sorts I advise [reading this article](https://dev.to/vaidehijoshi/inching-towards-insertion-sort) by [vaidehijoshi](https://github.com/vaidehijoshi).

### Merge Sort
[(view source)](https://github.com/MichaelSolati/csc-321-algorithm-design-and-analysis/blob/master/src/merge-sort.ts)
```
npm run merge-sort
```

From an input we will recursively split the input into sets of one element by dividing each set in half. Once we have gotten down to the set of one element we will return the set of one, and in all other recursive returns we will join the two results (one from the lower half of the division, and one from the opper half) and sort them as we join them. This is best described as a "divide and conquer" approach.

#### Time Complexity

| Best Case   | Average Case | Worst Case  |
| ----------- |:------------:| -----------:|
| Ω(n*log(n)) | θ(n*log(n))  | O(n*log(n)) |

If you need more additional resources to better understand merge sorts I advise [reading this article](https://dev.to/vaidehijoshi/making-sense-of-merge-sort-part-1) as well as [this article](https://dev.to/vaidehijoshi/making-sense-of-merge-sort-part-2) by [vaidehijoshi](https://github.com/vaidehijoshi).

### Quick Sort
[(view source)](https://github.com/MichaelSolati/csc-321-algorithm-design-and-analysis/blob/master/src/quick-sort.ts)
```
npm run quick-sort
```

From an input of an array of numbers we will first select a pivot point, typically the last element of an array. We will then create two new arrays, one with all the values of the array less than the pivot (excluding the pivot point) into one array and all the values into another array. Those arrays two arrays will then have the quicksort function called upon them until the arrays inputted into the quicksort function has a length less than or equal to one: at which point we will return the array.

As the recursive calls trickle back up we will return a concatenated array of the values less than the pivot, the pivot, and all other numbers.

#### Time Complexity

| Best Case   | Average Case | Worst Case |
| ----------- |:------------:| ----------:|
| Ω(n*log(n)) | θ(n*log(n))  | O(n^2)     |

If you need more additional resources to better understand quick sorts I advise [reading this article](https://dev.to/vaidehijoshi/pivoting-to-understand-quicksort-part-1) as well as [this article](https://dev.to/vaidehijoshi/pivoting-to-understand-quicksort-part-2) by [vaidehijoshi](https://github.com/vaidehijoshi).

## Data Structures
### Binary Tree
[(view source)](https://github.com/MichaelSolati/csc-321-algorithm-design-and-analysis/blob/master/src/binary-tree/binary-tree.ts)
```
npm run binary-tree
```

A data structure in which a record is linked to two successor records, usually referred to as the left branch when greater and the right when less than the previous record.

Function | Description
-------------- |:---------------------------------
`new BinaryTree(value)` | Instantiates a new binary tree with either a number, or an array of numbers.
`get root(): Node` | Get function for binary tree.
`delete(value): void` | Removes a node of the same value inputted from the binary tree.
`insert(value): void` | Inserts number or array of numbers into the binary tree.
`max(): Node` | Get maximum valued node in binary tree.
`min(): Node` | Get minimum valued node in binary tree.
`search(value, traversal, log): Node` | Searches tree for value based on three travesal methods ('inorder', 'preorder', 'postorder'). Logs each check.


If you need more additional resources to better understand trees or binary trees I advise [reading this article](https://dev.to/vaidehijoshi/leaf-it-up-to-binary-trees) by [vaidehijoshi](https://github.com/vaidehijoshi).