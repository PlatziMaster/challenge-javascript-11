/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {

    let zeroParents = []
    let oneParent = []
    let flag = 0, flag1=0

    //Zero parents?
    for(i=0; i<parentChildPairs.length; i++){
        for(j=0; j<parentChildPairs.length; j++){
            if(parentChildPairs[i][0] == parentChildPairs[j][1]){
                flag++
            }
            if(parentChildPairs[i][1] == parentChildPairs[j][1]){
                flag1++
            }
        }
        if (flag == 0){
            zeroParents.push(parentChildPairs[i][0])
        } else if (flag == 1) {
            oneParent.push(parentChildPairs[i][0])
        }
        if (flag1 == 1){
            oneParent.push(parentChildPairs[i][1])
        }
        flag1 = 0
        flag = 0
    }


    zeroParents = new Set(zeroParents)
    oneParent = new Set(oneParent)
    return [[...zeroParents], [...oneParent]]
}

module.exports = findNodesWithZeroAndOneParents;