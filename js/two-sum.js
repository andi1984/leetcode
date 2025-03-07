/**
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /** Approach #1: Start trying summing up index 0 with index 1, 2..., then
   * compare index 1 with 2, 3, ... etc. */
  if (!Array.isArray(nums)) {
    return [];
  }

  const maxIndex = nums.length - 1;
  let firstIndex = 0,
    secondIndex = firstIndex + 1;
  while (
    firstIndex <= maxIndex &&
    nums[firstIndex] + nums[secondIndex] !== target
  ) {
    // Increase firstIndex, reset secondIndex
    if (secondIndex === maxIndex) {
      firstIndex += 1;
      secondIndex = firstIndex + 1;
    } else {
      secondIndex += 1;
    }
  }

  return [firstIndex, secondIndex];
};

module.exports = twoSum;
