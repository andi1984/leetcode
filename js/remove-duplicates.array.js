/**
 * cf.
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let lastNum;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === lastNum) {
      // Remove this number
      nums.splice(i, 1);
      return removeDuplicates(nums);
    }

    lastNum = num;
  }

  return nums.length;
};

module.exports = removeDuplicates;
