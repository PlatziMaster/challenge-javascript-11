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
    for (let i = 0; i < possibleParents.length; i++){
        let number = possibleParents[i]
        nodeComparision({
            number: number,
            equal: 0,
            arrayPush: parents,
            array: parentChildPairs
        })
    }
    for(let i = 0; i <parentChildPairs.length; i++){
        let number = parentChildPairs[i][1];
        nodeComparision({
            number: number,
            equal: 1,
            arrayPush: childsWithOneParent,
            array: parentChildPairs
        })
    }
    //sort the array in order ASC
    childsWithOneParent = childsWithOneParent.sort( (a,b) => {
        return a - b;
    });
    return [parents, childsWithOneParent];
}
function nodeComparision({number: number, equal: equal, arrayPush: arrayPush, array: array}){
    let counter = 0;
    for(let j = 0; j< array.length; j++){
        if(number == array[j][1]){
            counter++;
        }
    }
    if(counter == equal){
        arrayPush.push(number);
    }
}
module.exports = findNodesWithZeroAndOneParents;