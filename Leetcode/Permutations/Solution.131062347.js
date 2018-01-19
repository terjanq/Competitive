/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    
    
    permutation([], nums.length);
    
    function permutation(temp, k){
        if(k==0) result.push(temp.slice());
        else{
            for(let i=0; i<k; i++){
                temp.push(nums[i]);
                [nums[i], nums[k-1]] = [nums[k-1], nums[i]];
                permutation(temp, k-1);
                temp.pop();
                [nums[i], nums[k-1]] = [nums[k-1], nums[i]];
            }
        }
    }
    
    return result;
};