/**
 * This function find the nodes with zero and one parents
 * @param {number[][]} parentChildPairs
 * @returns {number[][]}
 */
const findNodesWithZeroAndOneParents = (parentChildPairs) => {
    let zeroParents = parentChildPairs.flat(); // El método de flat crea una nueva matriz con los elementos de la sub-matriz concatenados en ella.
    //El método filter() crea un nuevo array con todos los elementos que cumplan la condición
    zeroParents = zeroParents.filter((item, index) => zeroParents.indexOf(item) == index); // Contador de resultados
    const parentCounter = new Array(zeroParents.length).fill(0); // Generamos el array espejo para el contador
    parentChildPairs.map(pairs =>{ // Genera nuevo array con map de elementos cuyo índice sea 1
        parentCounter[zeroParents.indexOf(pairs[1])]++; 
    });
    const result = [[],[]]; // Matríz que se llanará con el maping de los resultados
    parentCounter.map((count, index) => {
        if(count < 2) result[count].push(zeroParents[index]) // Concatena los elementos a zeroParents
    });
    return result;

}

module.exports = findNodesWithZeroAndOneParents;