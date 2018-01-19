/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = nums.length;
    
    for(let i=0; i<n; i++){
        let current = nums[i];
        if(current > 0 && current <= n && current != i+1 && nums[current-1] != current){
            [nums[nums[i]-1], nums[i]]= [nums[i], nums[nums[i]-1]]; //swap(current, nums[curent-1]);
            i--; //after swap, we could swap the value again, but in total there will be at least O(n) additional swaps
        }
    }

    let result = 1;
    while(nums[result - 1] == result) result++;
    
    return result;
        
    
};