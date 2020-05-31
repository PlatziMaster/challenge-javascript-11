/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    let foundNodes = [] ,zeroParents = [], oneParent = [];
    parentChildPairs.map((child) => {
            if(!zeroParents.includes(child[0])) {
                zeroParents.push(child[0]);
            }
            if(!oneParent.includes(child[1])) {
                oneParent.push(child[1]);
            }
    });
    oneParent.map((number, index) => {
        if(zeroParents.includes(number)) {
            zeroParents.splice(zeroParents.indexOf(number), 1);
        }
    })
    for (let i = 0; i < parentChildPairs.length; i++) {
        for (let j = 0; j < parentChildPairs.length; j++) {
            if(parentChildPairs[i][1] == parentChildPairs[j][1] && j != i) {
                if(oneParent.includes(parentChildPairs[i][1])) {
                    oneParent.splice(oneParent.indexOf(parentChildPairs[i][1]), 1);
                }
            }
        }
    }
    foundNodes.push(zeroParents.sort((a,b) => (a - b)), oneParent.sort( (a,b) => (a - b)));
    return foundNodes;
}

module.exports = findNodesWithZeroAndOneParents;