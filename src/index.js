/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  let parents = [];
  let children = [];

  for (let i = 0; i < parentChildPairs.length; i++) {
    if (!parents.includes(parentChildPairs[i][0])) {
      parents.push(parentChildPairs[i][0]);
    }
    children.push(parentChildPairs[i][1]);
  }

  let numberChild = children
    .sort((a, b) => a - b)
    .reduce((countChild, child) => {
      countChild[child] = (countChild[child] || 0) + 1;
      return countChild;
    }, {});

  let zeroParents = parents.filter((item) => !children.includes(item));
  let oneParents = children.filter((item) => numberChild[item] === 1);

  return [zeroParents, oneParents];
};

module.exports = findNodesWithZeroAndOneParents;
