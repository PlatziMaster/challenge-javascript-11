/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  let uniqueParents = [];
  let vertexWithOneParent = [];

  parentChildPairs.forEach(pairs => {
    let isChildrenOf = 0;         
    let numbOfParents = 0;

    for(let i = 0; i < parentChildPairs.length; i++){
      if(pairs[0] === parentChildPairs[i][1]){
        isChildrenOf++;
      }
      if(pairs[1] === parentChildPairs[i][1]){
        numbOfParents++
      }
    }

    if(isChildrenOf === 0 && !uniqueParents.includes(pairs[0])){
        uniqueParents.push(pairs[0]);
    }
    if(numbOfParents === 1 && !vertexWithOneParent.includes(pairs[1])){
      vertexWithOneParent.push(pairs[1])
    } 

  });

  return [uniqueParents.sort((a,b) => a-b), vertexWithOneParent.sort((a,b) => a-b)];
}


module.exports = findNodesWithZeroAndOneParents;