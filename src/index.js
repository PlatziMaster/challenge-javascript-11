/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    let parents = []
    let childs = []
    for( let i = 0; i < parentChildPairs.length; i++){
        if(!parents.includes(parentChildPairs[i][0])){
            parents.push(parentChildPairs[i][0])
        }
        childs.push(parentChildPairs[i][1])
    }
    //Zero parents
    for( let i = 0; i < parentChildPairs.length; i++){
        if(parents.includes(parentChildPairs[i][1])){
            let elementToRemove= parents.indexOf(parentChildPairs[i][1])
            parents.splice(elementToRemove, 1)
        }
    }
    let zeroParentsArray = parents
    zeroParentsArray.sort((a, b) => a - b )
    //One parent
    let oneParentArray = childs.filter(function(value){
        return childs.indexOf(value) === childs.lastIndexOf(value) 
    })
    oneParentArray.sort((a, b) => a - b )
    
    return arrays = [zeroParentsArray, oneParentArray]
}

module.exports = findNodesWithZeroAndOneParents;