/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    var prefix = 0;
    var i = 0;
    var j = 0;
    var maxSum = Number.MIN_SAFE_INTEGER;
    
    for(i=0; i<nums.length; i++){
        prefix += nums[i];
        maxSum = Math.max(prefix, maxSum);
        if(prefix <= 0) {
            prefix = 0;
            j = i+1;
        }
    }
    

    
    return maxSum;
    
    
    
};