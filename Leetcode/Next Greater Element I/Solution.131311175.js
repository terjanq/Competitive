/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {

   let result = [];
   let greater = new Map();
   
   for(let i = 0; i < nums.length; i++){
       let j = 0;
       for(j=i; j < nums.length; j++){
           if(nums[j] > nums[i]) {
               greater.set(nums[i], nums[j]);
               break;
           }  
       }
       if(j == nums.length) greater.set(nums[i], -1);
       
   } 
    
    for(let val of findNums) result.push(greater.get(val));
    
    return result;
};