/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var hash = {};
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]]) hash[nums[i]] = 0;
        else hash[nums[i]] = 1;
    }
    
    var out = [];
    
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]]) {
            out.push(nums[i]);
            if(out.length == 2) return out;
        }
    }
    
    return out;
};