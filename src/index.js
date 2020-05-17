/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    const result = [[],[]];
 
    const countOfParentsPerChild = parentChildPairs.reduce((dictionary, pair) => {
        if (dictionary[pair[1]])
            dictionary[pair[1]]++;
        else
            dictionary[pair[1]] = 1;
        return dictionary;
    }, {});

    
    const oneParentChildren = Object.keys(countOfParentsPerChild)
        .filter(child => countOfParentsPerChild[child] === 1)
        .map(childKey => parseInt(childKey));

    let zeroParentsChildren = Array.from(
        new Set(
            parentChildPairs.map(pair => pair[0])
                .filter(child => !(child in countOfParentsPerChild))
        )
    );

    result[0] = zeroParentsChildren;
    result[1] = oneParentChildren;

    return result;
}

module.exports = findNodesWithZeroAndOneParents;