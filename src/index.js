/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  const parents = [...new Set(parentChildPairs.map(innerPair => innerPair[0]))];
  const children = parentChildPairs.map(innerPair => innerPair[1])
 
  children.map(j => {
    if(parents.includes(j)){
      const indexToRemove = parents.findIndex((element)=> element === j)
      parents.splice(indexToRemove, 1);
    }
  })

  const oneParent = [];
  for (i in children) {
    for (j in children) {
      if (children[i] == children[j] && i != j) break;
      else if (j == children.length - 1){
        oneParent.push(children[i])
      } 
    }
  }
  oneParent.sort((a,b)=>{
    return a-b;
  });
  const number = [parents, oneParent];
  console.log(number);
  
  return number
}

module.exports = findNodesWithZeroAndOneParents;