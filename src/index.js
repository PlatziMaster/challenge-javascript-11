/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  const parentsCount = {}

  for (const [parent, child] of parentChildPairs) {
    if (parentsCount[child])
      parentsCount[child]++;
    else
      parentsCount[child] = 1;
    
    if (!parentsCount[parent]) parentsCount[parent] = 0;
  }

  const zeroParents = [], oneParent = [];

  for (let node in parentsCount) {
    node = Number(node);
    const nodeParents = parentsCount[node];
    if (nodeParents === 0) zeroParents.push(node);
    else if (nodeParents === 1) oneParent.push(node);
  }

  return [zeroParents, oneParent];
}

module.exports = findNodesWithZeroAndOneParents;