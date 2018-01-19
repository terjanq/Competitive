/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let permutations = nextPermutation(nums.sort((a,b)=>a-b));
    let result = [];
    
    for(let perm of permutations) result.push(perm.slice());
    
    function* nextPermutation(arr){
      const n = arr.length;
      yield arr;
      while(1){
        let firstLess = n - 2;
        while(firstLess >= 0 && arr[firstLess] >= arr[firstLess+1])
          firstLess--;

        if(firstLess < 0) return;
        let firstHigher = n - 1;

        while(arr[firstLess] >= arr[firstHigher]) firstHigher--;
        [arr[firstLess], arr[firstHigher]] = [arr[firstHigher], arr[firstLess]];

        arr = arr.splice(0,firstLess+1).concat(arr.reverse());
        yield arr;
      }
    }
    
    return result;
    
};