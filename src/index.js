/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  let zeroParentsArray = [];
  let oneParentArray = [];
  let parentCount;
  let childCount;

  parentChildPairs.forEach(parentChildPair => {
    parentCount = 0;
    childCount = 1;

    parentChildPairs.forEach(parentChildPairAux => {
      if (parentChildPair === parentChildPairAux) return;

      if (parentChildPair[0] === parentChildPairAux[1]) parentCount++;
      if (parentChildPair[1] === parentChildPairAux[1]) childCount++;
    });

    if(parentCount === 0 && !zeroParentsArray.includes(parentChildPair[0])) {
      zeroParentsArray.push(parentChildPair[0]);
    }

    if(parentCount === 1 && !oneParentArray.includes(parentChildPair[0])) {
      oneParentArray.push(parentChildPair[0]);
    }

    if(childCount === 1 && !oneParentArray.includes(parentChildPair[1])) {
      oneParentArray.push(parentChildPair[1]);
    }
  });

  return [zeroParentsArray, oneParentArray];
}

module.exports = findNodesWithZeroAndOneParents;