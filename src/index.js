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

  let numberChild = children.reduce((countChild, child) => {
    countChild[child] = (countChild[child] || 0) + 1;
    return countChild;
  }, {});

  parents = parents.filter((item) => !children.includes(item));
  children = children
    .filter((item) => numberChild[item] === 1)
    .sort((a, b) => a - b);

  return [parents, children];
};

module.exports = findNodesWithZeroAndOneParents;
