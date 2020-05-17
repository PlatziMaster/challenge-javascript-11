/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  let totalParentsMap = new Map();
  parentChildPairs.forEach((element) => {
    if (!totalParentsMap.has(element[0])) {
      totalParentsMap.set(element[0], 0);
    }
    let totalParent = totalParentsMap.get(element[1]) || 0;
    totalParentsMap.set(element[1], ++totalParent);
  });
  let zeroParents = [];
  let oneParent = [];
  for (let [key, value] of totalParentsMap) {
    if (value === 0) {
      zeroParents.push(key);
      continue;
    }
    if (value === 1) oneParent.push(key);
  }
  return [zeroParents, oneParent];
};

module.exports = findNodesWithZeroAndOneParents;
