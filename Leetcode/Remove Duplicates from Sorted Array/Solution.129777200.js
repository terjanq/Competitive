/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums;
    
    Object.defineProperty(nums, 'back', {get: function(){return this[this.length - 1]}});
    let lastNumber = nums[0];
    let index = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] == lastNumber) {
            if(index === 0) index = i;
            nums[i] = null;
        }
        else{
            lastNumber = nums[i];
            if(index !== 0){
                nums[i] = null;
                nums[index] = lastNumber;
                index++;
            } 
        }
    }
    
    while(nums.back === null) nums.pop();

    return nums.length;
};