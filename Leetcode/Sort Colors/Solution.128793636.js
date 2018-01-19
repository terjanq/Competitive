/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function swap(a, b){
    [a, b] = [b, a];
}
var sortColors = function(nums) {
    
    var e0 = 0;
    for (var i = 0; i<nums.length; i++){
        if(nums[i] < 1) {
            [nums[e0], nums[i]] = [nums[i], nums[e0]]; e0++
        }
    }
    
    for(var i = e0; i<nums.length; i++){
        if(nums[i] < 2){
            [nums[e0], nums[i]] = [nums[i], nums[e0]]; e0++
        }
    }

};