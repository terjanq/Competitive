/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hMap = new Map();    
    
    for(let num of nums)
        hMap.set(num, hMap.get(num)+1 || 1);
    
    let entries = hMap.entries();
    // console.log(entries.next());
    let count = 0;
    
    // let {value:[key, value], done:done} = entries.next();
    
    
    var toSort = [];
    for(let [key, value] of hMap)    
       toSort.push([key, value]);
       
    
    let result = [];
    
    toSort.sort(function(a, b){return b[1] - a[1]});
    
    // console.log(debug);
    for(let i = 0; i < k; i++)
        result.push(toSort[i][0]);
    
    
    
    return result;
    
   // /*
    
    
};