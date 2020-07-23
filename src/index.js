/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    const zeroParents = []
    const oneParent = []
    const hashParents = {}

    for (let parentChildPair of parentChildPairs) {
        const parent = parentChildPair[0];
        const son = parentChildPair[1];

        if (hashParents[son]) {
            hashParents[son]++
        } else {
            hashParents[son] = 1
        }

        if (!hashParents[parent]) {
            hashParents[parent] = 0
        }

    }

    for (let num in hashParents) {
        if(hashParents[num] === 0) {
            zeroParents.push(Number(num))
            continue
        }

        if(hashParents[num] === 1) {
            oneParent.push(Number(num))
            continue
        }
    }

    return [zeroParents, oneParent]
}

module.exports = findNodesWithZeroAndOneParents;
