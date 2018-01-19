/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var n = nums.length;
    var dp = new Array(n+1);
    
    if(n == 0) return 0;
    if(n == 1) return nums[0];
 
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], dp[0]);
    
    for(var i=2; i<n; i++){
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    
    return dp[n-1];
};