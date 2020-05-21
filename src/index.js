/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  let result = []
  parentChildPairs.forEach(family => {
    family.forEach((member, index) => {
      const actual = result.find((element) => {
        if(member === element.member) {
          index === 0 ? element.asParent++ : element.asChild++
          return true
        }
      })

      if(actual === undefined) {
        if (index === 0) {
          result.push({ member, asParent: 1, asChild: 0 })
        } else {
          result.push({ member, asParent: 0, asChild: 1 })
        }
      }
    })
    
  })

  let [ zeroParents, oneParents ] = [ [], [] ]
  result.forEach((member) => {
    if (member.asChild === 0) zeroParents.push(member.member)
    if (member.asChild === 1) oneParents.push(member.member)
  })

  //console.log('result :: ', result)
  // console.log('result :: ', [zeroParents, oneParents])
  return [zeroParents, oneParents]
}

module.exports = findNodesWithZeroAndOneParents;