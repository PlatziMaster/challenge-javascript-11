/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {

    const parents = []
    const children = []
    
    parentChildPairs.forEach(parentChildPair => {
        parents.push(parentChildPair[0])
        children.push(parentChildPair[1])
    })

    const parentsZero = parents
        .filter(parent => !children.includes(parent))
        .filter((parent, index, array) => {
            return array.indexOf(parent) === index
        })
        .sort((a, b) => a - b)

    const parentsUnique = children
        .filter(child =>
            children.indexOf(child) === children.lastIndexOf(child))
        .sort((a, b) => a - b)

    return [parentsZero, parentsUnique]
}

module.exports = findNodesWithZeroAndOneParents;