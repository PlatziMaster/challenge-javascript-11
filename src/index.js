/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const takeRepited = (number, arrayChild, comparison) => {
  let count = 0
  arrayChild.map(current => {
    if (current === number) return ++count
  })
  if (count > comparison) {
    return ''
  }
  return number
}

const findArrays = (parentChildPairs) => () => {
  let arrayParent = []
  let arrayChild = []
  let array = []
  parentChildPairs.map((current, index) => {
    arrayParent = arrayParent.concat(current[0])
    arrayChild = arrayChild.concat(current[1])
  })
  arrayParent = arrayParent.filter(onlyUnique)
  arrayParent = arrayParent.filter(number => takeRepited(number, arrayChild, 0))
  arrayChild = arrayChild.filter(number => takeRepited(number, arrayChild, 1))
  arrayChild = arrayChild.sort((a, b) => a - b)
  array = array.concat([arrayParent])
  array = array.concat([arrayChild])

  return array
}

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  const result = findArrays(parentChildPairs)
  return result()
}

module.exports = findNodesWithZeroAndOneParents;
