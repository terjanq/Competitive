/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    var prefix = nums[0];
    var maxSum = nums[0];
    
    for(var i=1; i<nums.length; i++){
        prefix = Math.max(prefix + nums[i], nums[i]);
        maxSum = Math.max(maxSum, prefix);
    }
    

    
    return maxSum;
    
    
    
};