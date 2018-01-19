/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let set = new Set();
    let result = [];
    let n = nums.length;
    
    helper(0);
    
    function helper(k){
        if(k==n-1) {
            set.add(nums.toString());
            return;
        }
        
        for(let i=k; i<n; i++){
            [nums[i], nums[k]] = [nums[k], nums[i]];
            helper(k+1);
            [nums[i], nums[k]] = [nums[k], nums[i]];
        }
    }
    
    for(let s of set)
        result.push(s.split(",").map(a=>Number(a)));
    
    return result;
    
};