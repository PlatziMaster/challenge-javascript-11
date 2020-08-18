/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    var arrayParents = [], arrayChilds = [],slicer = [], zeroParents = [], oneParents = [], finalArray= []
    for ( var pair = 0; pair < parentChildPairs.length; pair++){
        slicer.push(parentChildPairs[pair])
        var indexNumber = slicer[pair]
        var parentNumber = indexNumber[0]
        var childNumber = indexNumber[1]
        arrayParents.push(parentNumber) 
        arrayChilds.push(childNumber) 
    }//Si p no aparece en ch = no tiene papá
    var indexNumberofZeros = -1
    for (var p = 0; p < arrayParents.length; p++){ //indexParents
        var parentValue = arrayParents[p]
        var zeroP = 0
        for (var ch = 0; ch < arrayChilds.length; ch++){//indexChilds
            var childValue = arrayChilds[ch]
            if (parentValue == childValue){
                zeroP++
            }
        }if (zeroP == 0 && !(parentValue == zeroParents[indexNumberofZeros])) {
            zeroParents.push(parentValue)
            indexNumberofZeros ++
        }
    }
    // si H aparece 1 vez es one Parent
    for (let ch1 =0; ch1 < arrayChilds.length; ch1++ ){
        var times = 0
        for (let ch2 = 0; ch2 < arrayChilds.length; ch2++){
            if (arrayChilds[ch1]==arrayChilds[ch2])
            times ++
        }if (times == 1){
            oneParents.push(arrayChilds[ch1])
        }
    } 
    const ascendente = (a,b) => a -b    
    zeroParents.sort(ascendente)
    finalArray.push(zeroParents)
    oneParents.sort(ascendente)
    finalArray.push(oneParents)
    return finalArray
}

module.exports = findNodesWithZeroAndOneParents;