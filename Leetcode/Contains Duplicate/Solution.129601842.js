/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var set = new Set();
    for(var el of nums){
        if(set.has(el)) return true;
        set.add(el);
    }
    
    return false;
};