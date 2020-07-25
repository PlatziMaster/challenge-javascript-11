/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
//           1   2    4
//            \ /   / | \
//             3   5  8  9
//             \  / \     \
//               6   7    11

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
let parentsUnique = [];
let childOneParent = [];

parentChildPairs.forEach(pairs => {
  let numberOfParents = 0;
  let ChildrenOf = 0;

  for(let i = 0; i < parentChildPairs.length; i++){
    if(pairs[0] === parentChildPairs[i][1]){
      ChildrenOf++;
      }
    if(pairs[1] === parentChildPairs[i][1]){
      numberOfParents++
      }
    }
    if(ChildrenOf === 0 && !parentsUnique.includes(pairs[0])){
      parentsUnique.push(pairs[0]);
    }
    if(numberOfParents === 1 && !childOneParent.includes(pairs[1])){
      childOneParent.push(pairs[1])
    }
  });
  return res = [parentsUnique.sort((a,b) => a-b), childOneParent.sort((a,b) => a-b)];
}


//parentChildPairs([[1, 3], [ 2, 3 ], [3, 6 ], [5, 6 ], [5, 7 ] , [4, 5], [4, 8 ], [4, 9], [9, 11]])
//findNodesWithZeroAndOneParents(parentChildPairs)


module.exports = findNodesWithZeroAndOneParents;
