/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    let possibleParents = [];
    let parents = [];
    let childsWithOneParent = [];
    let lastNumber = 0;
    for (let i = 0; i < parentChildPairs.length; i++){ 
        if(parentChildPairs[i][0] != lastNumber){
            possibleParents.push(parentChildPairs[i][0]);
        }
        lastNumber = parentChildPairs[i][0];
    }
    possibleParents.map(number =>{
        let counter = 0;
        for(let i = 0; i< parentChildPairs.length; i++){
            if(number == parentChildPairs[i][1]){
                counter = 1;
            }
        }
        if(counter == 0){
            parents.push(number);
        }
    })
    for(let i = 0; i <parentChildPairs.length; i++){
        let child = parentChildPairs[i][1];
        let counter = 0;
        for(let j = 0; j < parentChildPairs.length; j++){
            if(child == parentChildPairs[j][1]){
                counter ++;  
            }
        }
        if(counter == 1){
            childsWithOneParent.push(child);
        }
    }
    childsWithOneParent = childsWithOneParent.sort( (a,b) => {
        return a - b;
    });
    return [parents, childsWithOneParent];                
}

module.exports = findNodesWithZeroAndOneParents;