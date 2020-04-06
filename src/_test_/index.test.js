const findNodesWithZeroAndOneParents = require("../index");

describe('ZeroAndOneParents', () => {
  it('Should returns two collections ', () => {
    expect(findNodesWithZeroAndOneParents([
      [1, 3], [2, 3], [3, 6], [5, 6], [5, 7],
      [4, 5], [4, 8], [4, 9], [9, 11]
    ]).length).toBe(2);
    expect(findNodesWithZeroAndOneParents([
      [1, 6], [1, 7], [1, 7], [2, 6], [2, 7], [3, 2], [3, 4],
      [4, 8], [5, 8], [6, 9], [6, 10], [7, 11], [8, 11], [8, 12]
    ]).length).toBe(2)
  })

  it('Should returns two collections ', () => {
    expect(findNodesWithZeroAndOneParents([
      [1, 3], [2, 3], [3, 6], [5, 6], [5, 7],
      [4, 5], [4, 8], [4, 9], [9, 11]
    ])).toEqual([
      [1, 2, 4],
      [5, 7, 8, 9, 11]
    ]);

    expect(findNodesWithZeroAndOneParents([
      [1, 6], [1, 7], [1, 7], [2, 6], [2, 7], [3, 2], [3, 4],
      [4, 8], [5, 8], [6, 9], [6, 10], [7, 11], [8, 11], [8, 12]
    ])).toEqual([
      [1, 3, 5],
      [2, 4, 9, 10, 12]
    ]);
  })
});