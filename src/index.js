/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    let uniqueItems = parentChildPairs.flat();
    uniqueItems = uniqueItems.filter((item, index) => uniqueItems.indexOf(item) == index)
    const parentsCount = new Array(uniqueItems.length).fill(0);
    parentChildPairs.map(pairs =>{
        parentsCount[uniqueItems.indexOf(pairs[1])]++;
    });
    const result = [[],[]];
    parentsCount.map((count, index) => {
        if(count < 2) result[count].push(uniqueItems[index])
    });
    return result;
}

module.exports = findNodesWithZeroAndOneParents;