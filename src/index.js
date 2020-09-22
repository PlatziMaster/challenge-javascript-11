/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  const padres = [];
  const hijos = [];
  const hijos2 = [];

  for (let i = 0; i < parentChildPairs.length; i++) {
    if (!padres.includes(parentChildPairs[i][0]))
      padres.push(parentChildPairs[i][0]);
    if (!hijos.includes(parentChildPairs[i][1])) {
      hijos.push(parentChildPairs[i][1]);
    }
    hijos2.push(parentChildPairs[i][1]);
  }

  hijos.sort((a, b) => a - b);

  let sinPadres = padres.filter((x) => !hijos.includes(x));

  let soloUnPadre = hijos.filter(
    (item) => 1 == hijos2.filter((x) => x == item).length
  );

  return [sinPadres, soloUnPadre];
};

module.exports = findNodesWithZeroAndOneParents;
