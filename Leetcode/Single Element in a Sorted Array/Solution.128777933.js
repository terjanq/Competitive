/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {

   return nums.reduce((prev, curr) => prev^curr, 0)
   
};