/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
parentChild = [
  [1, 3], [2, 3], [3, 6], [5, 6], [5, 7],
  [4, 5], [4, 8], [4, 9], [9, 11]
];

// 1   2    4
//  \ /   / | \
//   3   5  8  9
//    \ / \     \
//     6   7    11

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  const parents = [...new Set(parentChildPairs.map(innerPair => innerPair[0]))];
  const children = parentChildPairs.map(innerPair => innerPair[1])
  
  console.log(`array before:\n parents = ${parents}\nchildren = ${children}\n\n`);

  children.map(j => {
    if(parents.includes(j)){
      console.log(parents);
      
      console.log(`${j} makes match`);
      
      const indexToRemove = parents.findIndex((element)=> element === j)
      console.log(`index of the element to remove ${indexToRemove}`);      
      const elementsRemoved = parents.splice(indexToRemove, indexToRemove -1);
      console.log(`elementsRemoved = ${elementsRemoved}`);
      console.log(`current parents ${parents}`);
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
  
  console.log(`array after: zeroparents = ${parents}\nOneParent = ${oneParent}`);
}

findNodesWithZeroAndOneParents(parentChild);

// module.exports = findNodesWithZeroAndOneParents;