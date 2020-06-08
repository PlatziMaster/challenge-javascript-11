/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    let parents = new Set(parentChildPairs.map(array => array[0]))
    let childs = parentChildPairs.map(array => array[1])
    let grandPa = [];
    let divorceChilds = new Set();
    parents.forEach(parent => {
        if(childs.indexOf(parent) === -1){
            grandPa.push(parent)
        }
    })
    childs.forEach((child, index) => {
        if(childs.indexOf(child) === index) {
            divorceChilds.add(child)
        }else if (divorceChilds.has(child)) {
            divorceChilds.delete(child)
        }
    })
    return [grandPa, [... divorceChilds].sort((a, b) => a - b)]
}

module.exports = findNodesWithZeroAndOneParents;