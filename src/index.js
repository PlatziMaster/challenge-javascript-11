/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  const childs = [];
  const parents = [];
  const childsWithTwoParents = [];

  const isThere = (array, elementToFind) => array.some(element => element === elementToFind);
  const isChild = (element, index) => {
    if (index % 2 !== 0) {
      return true;
    }
  };
  const parentChildPairsFlat = parentChildPairs.flat();
  parentChildPairsFlat.forEach((element, index) => {
    if (!isThere(childs, element) && !isThere(parents, element) && !isThere(childsWithTwoParents, element)) {
      if (isChild(element, index)) {
        childs.push(element);
      } else {
        parents.push(element);
      }
    }
    else if (isThere(parents, element) && isChild(element, index)) {
      parents.splice(parents.indexOf(element), 1);
      childs.push(element);
    }
    else if (isThere(childs, element) && isChild(element, index)) {
      childs.splice(childs.indexOf(element), 1);
      childsWithTwoParents.push(element);
    }
  });
  return [parents.sort((a, b) => a - b), childs.sort((a, b) => a - b)];
}

module.exports = findNodesWithZeroAndOneParents;