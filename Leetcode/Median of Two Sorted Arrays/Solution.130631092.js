/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2){
  
  if(nums1.length == 0 || nums2.length == 0){
      let temp = (nums1.length == 0? nums2: nums1);
      let a = Math.floor((temp.length - 1)/2);
      let b = Math.floor(temp.length/2);    
      return (temp[a] + temp[b])/2.0;
    }
  
  if(nums1.length > nums2.length) 
    return helper(nums2, 0, nums2.length, nums1, 0, nums1.length);
  else
    return helper(nums1, 0, nums1.length, nums2, 0, nums2.length);
  
  // len1 <= len2
  function helper(nums1, i, len1, nums2, j, len2){
  
    if(len1 == 1){
      let temp = [];
      let a = Math.floor((len2 - 1)/2) + j;
      temp.push(nums1[i], nums2[a]);
      if(len2 > 1) {
        temp.push(nums2[a+1]);
        if(len2 % 2) temp.push(nums2[a-1]);
      }
      
      temp.sort((a,b)=>a-b);
      return findMedianSortedArrays([], temp);
    }
    if(len1 == 2){
      let temp = [];
      let a = Math.floor((len2 - 1)/2) + j;
      temp.push(nums1[i], nums1[i+1], nums2[a], nums2[a+1]);
      if(len2 > 2){
         temp.push(nums2[a-1]);
         if(len2 % 2 == 0) temp.push(nums2[a+2]);
      } 
      
      temp.sort((a,b)=>a-b);
      return findMedianSortedArrays([], temp);
    }
    
    let a = Math.floor((len1-1)/2) + i, 
        b = Math.floor((len2-1)/2) + j,
        c = Math.floor(len1/2) + i,
        d = Math.floor(len2/2) + j;
    
    let m1 = (nums1[a] + nums1[c])/2.0, m2 = (nums2[b] + nums2[d])/2.0;
    let cut = Math.floor((len1-1)/2);
    if(m1 < m2)
      return helper(nums1, i+cut, len1-cut, nums2, j, len2-cut);
    else
      return helper(nums1, i, len1-cut, nums2, j+cut, len2-cut);
    
  }
}


