/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) 
    return helper(nums2, 0, nums2.length, nums1, 0, nums1.length);
  else
    return helper(nums1, 0, nums1.length, nums2, 0, nums2.length);
  
  // len1 <= len2
  function helper(nums1, i, len1, nums2, j, len2){
    // console.log(nums1.slice(i,i+len1), nums2.slice(j,j+len2));
    // console.log(i, len1, j,len2);
    
    if(len1 == 0){
      let temp = nums2.slice(j, j+len2);
      let a = Math.floor((temp.length - 1)/2);
      let b = Math.floor(temp.length/2);
      
      return (temp[a] + temp[b])/2.0;
    }
    if(len1 == 1){
      // console.log(nums1.slice(i,len1), nums2.slice(j,len2));
      let temp = nums2.slice(j, j+len2);
      temp.push(nums1[i]);
      temp.sort((a,b)=>a-b);
      let a = Math.floor((temp.length - 1)/2);
      let b = Math.floor(temp.length/2);
      
      return (temp[a] + temp[b])/2.0;
    }
    if(len1 == 2){
      let temp = nums2.slice(j, j+len2);
      temp.push(nums1[i], nums1[i+1]);
      temp.sort((a,b)=>a-b);
      let a = Math.floor((temp.length - 1)/2);
      let b = Math.floor(temp.length/2);
      
      return (temp[a] + temp[b])/2.0;
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
};

