/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length;
    let low = 0;
    let high = n-1;
    
    for(let i=0; i<=high; i++){
        if(nums[i] == 0 && low < i){
            [nums[i], nums[low]] = [nums[low], nums[i]];
            i--;
            low++;
        }
        else if(nums[i] == 2 && high > i){
            [nums[i], nums[high]] = [nums[high], nums[i]];
            i--;
            high--;
        }
    }
};