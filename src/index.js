/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    const input = parentChildPairs;
    let parents = [];
    let children = [];
    let zeroParent = [];
    let oneParent = [];

    // set parents and children in different arrays
    for (i=0; i<input.length; i++){
        parents.push(input[i][0]);
        children.push(input[i][1]);
    }

    // zero parents - number is in parents but not in children
    for(let i=0; i<parents.length; i++){
        const check = children.filter(n => n === parents[i]);
        if(check.length === 0){
            if (!zeroParent.includes(parents[i])) zeroParent.push(parents[i])        
        }
    }

    // one parent - number is just one time in children
    for(let i=0; i<children.length; i++){
        const check = children.filter(n => n === children[i]);
        if(check.length === 1){
            if (!oneParent.includes(children[i])) {
                oneParent.push(children[i]);
            }
        }
    }

    return ([zeroParent.sort((a,b) => (+a) - (+b)), oneParent.sort((a,b) => (+a) - (+b))]);   
}

module.exports = findNodesWithZeroAndOneParents;
