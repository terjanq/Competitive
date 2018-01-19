/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
   let greater = new Map();
   let decrs = [];
   decrs.back = () => decrs.length > 0? decrs[decrs.length-1]: Number.MAX_SAFE_INTEGER;
   for(let i = 0; i < nums.length; i++){
       while(nums[i] > decrs.back())
           greater.set(decrs.pop(), nums[i]);
       decrs.push(nums[i]);
   }

    while(decrs.length > 0)
        greater.set(decrs.pop(), -1);
    
   
    
    for(let i=0; i<findNums.length; i++) {
        findNums[i] = greater.get(findNums[i]);
    }
    
    return findNums;
};