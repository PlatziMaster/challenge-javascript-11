let arr = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [9, 11]
]
/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */


let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};



let findParents = (parentChildPairs) => {
    let parents = new Set();
    let count = 0;
    for (let i = 0; i < parentChildPairs.length; i++) {
        for (let j = 0; j < parentChildPairs.length; j++) {
            if (parentChildPairs[i][0] === parentChildPairs[j][1]) {
                count++
            }
        }
        if (count === 0) {
            parents.add(parentChildPairs[i][0])
        }
        count = 0

    }
    return parents
}


let findChildrens =(parentChildPairs)=>{
    let childrens = new Set();
    let count2 = 0;
    for (let i = 0; i < parentChildPairs.length; i++) {
        for (let j = 0; j < parentChildPairs.length; j++) {
            if (parentChildPairs[i][1] === parentChildPairs[j][1]) {
                count2++
            }
        }        
        if (count2>0 && count2 < 2) {
            childrens.add(parentChildPairs[i][1])
        }
        count2 = 0
        
    };
    return childrens
}

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    // ------------------parents 
    let parents = findParents(parentChildPairs)
    // ------------------childrens
    let childrens = findChildrens(parentChildPairs)
    let result = [bubbleSort([...parents]), bubbleSort([...childrens])]
    return result

}

module.exports = findNodesWithZeroAndOneParents;