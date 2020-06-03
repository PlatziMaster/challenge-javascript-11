/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {

  let parents = parentChildPairs.map(array => array[0])
  let childs = parentChildPairs.map(array => array[1])

  let zeroParents = parents.filter(item => {
    if (!childs.includes(item)) {
      return item
    }
  })

  let moreParent = childs.reduce((list, item) => {
    if (list.includes(item)) {
      delete list[childs.indexOf(item)]
    }
    return list
  }, [...childs])

  oneParent = childs.filter(item => {
    if (!moreParent.includes(item)) {
      return item
    }
  })

  return [
    [...new Set(zeroParents)],
    oneParent.sort((a, b) => a - b)
  ]
}

module.exports = findNodesWithZeroAndOneParents;