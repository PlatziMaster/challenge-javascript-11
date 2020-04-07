/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */

const findNodesWithZeroAndOneParents = (parentChildPairs) => {
	// Parents
	let parents=[];
	parentChildPairs.map((Parents) => {
		if (!(parents.includes(Parents[0])))

			parents.push(Parents[0]);
	});

	// Childrens
	let childrends=[];
	let childrendsMoreThanOneParent =[];
	parentChildPairs.map((Childrends) => {
		if (childrends.includes(Childrends[1]))
			childrendsMoreThanOneParent.push(Childrends[1]);
		else
			childrends.push(Childrends[1]);
	});

	// Zero parents
	let zeroParents = [];
	parents.map((Parents) => {
		if (!(childrends.includes(Parents)))
			zeroParents.push(Parents);
	});	
	
	let exactlyOneParent = [];
	childrends.map((Childrends) => {
		if (!(childrendsMoreThanOneParent.includes(Childrends)))
			exactlyOneParent.push(Childrends);
	});

	// Ordenamos los arrays
	zeroParents.sort((a,b)=>a-b);
	exactlyOneParent.sort((a,b)=>a-b);

	return [zeroParents,exactlyOneParent];
	
}

module.exports = findNodesWithZeroAndOneParents;