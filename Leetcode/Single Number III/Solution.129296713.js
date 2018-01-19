/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
    var axb = nums.reduce((cur, prev) => cur^prev);
    
    var diff = axb&-axb;
    
    var out = [0, 0];
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]&diff) out[0] ^= nums[i];
    }
    
    out[1] = axb^out[0];
    
    return out;
};