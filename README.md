# CSC 321: Algorithm Design and Analysis

## Contents
 - [Introduction](#introduction)
 - [Sorts](#sorts)
     - [Insertion Sort](#insertion-sort)
     - [Merge Sort](#merge-sort)

## Introduction
A slew of algorithms, assignments and other work for my Algorithm Design and Analysis class.

Be sure to `npm install` to install all dependencies, then run `npm run build` to transpile the code into Javascript.

## Sorts
### Insertion Sort
[(view source)](https://github.com/MichaelSolati/csc-321-algorithm-design-and-analysis/blob/master/src/insertion-sort.ts)
```
npm run insertion-sort
```

From a deck of cards (our input), as we draw one card we add it into our hand (the eventual return) and ensure we place it in order with regards to the other cards by iterating through each card and inserting it before the card that it is less than or equal to.

If you need more additional resources to better understand insertion sorts I advise [reading this article](https://dev.to/vaidehijoshi/inching-towards-insertion-sort) by [vaidehijoshi](https://github.com/vaidehijoshi).

### Merge Sort
[(view source)](https://github.com/MichaelSolati/csc-321-algorithm-design-and-analysis/blob/master/src/merge-sort.ts)
```
npm run merge-sort
```

From an input we will recursively split the input into sets of one element by dividing each set in half. Once we have gotten down to the set of one element we will return the set of one, and in all other recursive returns we will join the two results (one from the lower half of the division, and one from the opper half) and sort them as we join them. This is best described as a "divide and conquer" approach.

If you need more additional resources to better understand merge sorts I advise [reading this article](https://dev.to/vaidehijoshi/making-sense-of-merge-sort-part-1) as well as [this article](https://dev.to/vaidehijoshi/making-sense-of-merge-sort-part-2) by [vaidehijoshi](https://github.com/vaidehijoshi).