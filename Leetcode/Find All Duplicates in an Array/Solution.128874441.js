/**https://leetcode.com/static/images/icons/terminal.png
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var out = [];
    
    for(var i=0; i<nums.length; i++){
        var el = nums[i] - 1;
        if(el != i && el >= 0) {
            if(nums[el] == el+1) {
                nums[i] = -100;
                out.push(el+1);
            }
            else{
                [nums[el], nums[i]] = [nums[i], nums[el]];
                i--;
            }
        }
    }
    
    return out;
};