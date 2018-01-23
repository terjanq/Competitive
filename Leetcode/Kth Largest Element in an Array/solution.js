/* ### 215. Kth Largest Element in an Array

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.


 * @param {number[]} nums
 * @param {number} k
 * @return {number}

*/

var findKthLargest = function(nums, k) {
    let tempNums = Array.from(nums);
    
    function _helper(k){
        const n = tempNums.length;
        if(n == 1) return tempNums[0];
        let pivot = tempNums[Math.floor(n/2)];
        let GR_ThanPivot = tempNums.reduce((prev, cur) => prev+= (cur > pivot), 0);
        let LS_ThanPivot = tempNums.reduce((prev, cur) => prev+= (cur < pivot), 0);
        let EQ_ToPivot   = tempNums.reduce((prev, cur) => prev+= (cur == pivot),0);
        if(GR_ThanPivot > k - 1) {
            tempNums = tempNums.filter(a => a > pivot);
            return _helper(k);
        }
        if(GR_ThanPivot + EQ_ToPivot >= k) return pivot;
        tempNums = tempNums.filter(a => a < pivot);
        return _helper(k - EQ_ToPivot - GR_ThanPivot);
    }
        
    return _helper(k);
};

/*

31/31 passed, MemoryLimit exceeded;

var findKthLargest = function(nums, k) {
    const n = nums.length;
    if(n == 1) return nums[0];
    let pivot = nums[n-1];
    let GR_ThanPivot = nums.filter(a => a > pivot);
    let LS_ThanPivot = nums.filter(a => a < pivot);
    let EQ_ToPivot = nums.reduce((prev, cur) => prev+=(cur==pivot), 0);
    if(GR_ThanPivot.length > k - 1) return findKthLargest(GR_ThanPivot, k);
    if(GR_ThanPivot.length + EQ_ToPivot >= k) return pivot;
    return findKthLargest(LS_ThanPivot, k - EQ_ToPivot - GR_ThanPivot.length);
    
};

*/
