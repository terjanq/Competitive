/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    if(nums.length == 0) return [];
   let result = [];
   let greater = new Map();
   
   let decrs = [nums[0]];
   decrs.back = () => decrs.length > 0? decrs[decrs.length-1]: Number.MAX_SAFE_INTEGER;
   for(let i = 1; i < nums.length; i++){
       while(nums[i] > decrs.back())
           greater.set(decrs.pop(), nums[i]);
       decrs.push(nums[i]);
   }

    while(decrs.length > 0)
        greater.set(decrs.pop(), -1);
    
   
    
    for(let val of findNums) result.push(greater.get(val));
    
    return result;
};