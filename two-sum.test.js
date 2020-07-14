const twoSum = require("./two-sum");

test("leetcode example", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([1, 3, 4, 2], 7)).toEqual([1, 2]);
});
