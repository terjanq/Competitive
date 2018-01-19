/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index = m + n, i = m-1, j = n-1;
    
    while(index--){
        if((i>=0 && nums1[i] > nums2[j]) || j<0)
            nums1[index] = nums1[i--];
        else
            nums1[index] = nums2[j--];
    }
};