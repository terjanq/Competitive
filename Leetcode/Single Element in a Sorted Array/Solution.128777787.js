/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var x = 0;
    for(var i=0; i<nums.length; i++){
        x^=nums[i];
    }
    return x;
};