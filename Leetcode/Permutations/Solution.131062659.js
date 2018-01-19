/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    
    
    permutation(nums.length);
    
    function permutation( k){
        if(k==0) result.push(nums.slice());
        else{
            for(let i=0; i<k; i++){
                [nums[i], nums[k-1]] = [nums[k-1], nums[i]];
                permutation(k-1);
                [nums[i], nums[k-1]] = [nums[k-1], nums[i]];
            }
        }
    }
    
    return result;
};