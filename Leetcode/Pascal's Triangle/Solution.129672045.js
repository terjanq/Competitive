/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0) return [];
    let arr = [[1]];
    arr.back = () => arr[arr.length-1];
    numRows--;
    while(numRows--){
        let last = arr.back(), n = arr.back().length;
        arr.push(new Array(n + 1));
        arr.back()[0] = 1;
        arr.back()[n] = 1;
        
        for(let i=1; i<n; i++)
            arr.back()[i] = last[i] + last[i-1];
    }
    
    return arr;
};