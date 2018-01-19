/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    var prefix = 0;
    var maxSum = Number.MIN_SAFE_INTEGER;
    
    for(var i=0; i<nums.length; i++){
        prefix += nums[i];
        maxSum = Math.max(prefix, maxSum);
        if(prefix < 0) {
            prefix = 0;
        }
    }
    

    
    return maxSum;
    
    
    
};