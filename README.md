# challenge-javascript-11 - Zero and one parents problem

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

### Example

In this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

```md
1   2    4
 \ /   / | \
  3   5  8  9
   \ / \     \
    6   7    11
```

Example input:

```js
parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
]
```

## Installation

```bash
npm install
```

## Test

```bash
npm run test
```

## Challenge

Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.

Example output:

```js
[
  [1, 2, 4],       // Individuals with zero parents
  [5, 7, 8, 9, 11] // Individuals with exactly one parent
]
```

## Submit challenge solution

You must "Fork" this project, solve the problem and create a Pull Request to this repository.

## Contribute

If someone wants to add or improve something, I invite them to collaborate directly in this repository: challenge-javascript-11

# License
challenge-javascript-11 is released under the MIT license.
