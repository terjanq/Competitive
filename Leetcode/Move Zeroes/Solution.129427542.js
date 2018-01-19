/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var first = null;
    var last = null;
    var zeroes;
    var i = 0;
    while(nums[i]!=0 && i<nums.length) i++;
 
    first = i;
    last = i;
    zeroes = 1;
    
    if(++i>=nums.length) return;
   
    
    for(i; i<nums.length; i++){
        if(nums[i] == 0){
            zeroes++;
            nums[last] = -i;
            last = i;
        }else{
            var nextFirst = -nums[first];
            nums[first] = nums[i];
            
            // new Empty slot
            if(last!=first) nums[last] = -i;
            last = i;
            
            first = nextFirst || i; // if nextFirst not set, pin new empty slot;
            nums[i] = 0;
        }
      
        
    }
    
    for(var j=1; j<=zeroes; j++){
        nums[nums.length - j] = 0;
    }

 
};