/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    if (!nums.length) return 0;
    
    var hash = {}, maxLength = 1;
    
    var checked = new Array(nums.length);
    
    
    for(var i=0; i<nums.length; i++) {
        if(hash[nums[i]]) checked[i] = true; //if duplicates delete one;
        else hash[nums[i]] = i;
    }
    
    for(var i=0; i<nums.length; i++){
        if(!checked[i]){
            var j = nums[i]-1;
            var currLength = 1;
            while(hash[j]){
                currLength++;
                checked[hash[j]] = true;
                j--;
            }
            j = nums[i]+1;
            while(hash[j]){
                currLength++;
                checked[hash[j]] = true;
                j++;
            }
            
            maxLength = Math.max(currLength, maxLength);
            
            
        }
    }
    
    return maxLength;
};