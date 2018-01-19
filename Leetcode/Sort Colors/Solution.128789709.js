/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function swap(a, b){
    [a, b] = [b, a];
}
var sortColors = function(nums) {
    
    var arr = new Array(3);
    arr.fill(0);
    
    for(var i=0; i<nums.length; i++)
        arr[nums[i]]++;
    var I = 0;
    
    while(arr[0]--) nums[I++] = 0;
    while(arr[1]--) nums[I++] = 1;
    while(arr[2]--) nums[I++] = 2;
    
    
    
};