/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n){
        count++;
        n = ((n&(n-1))>>>0);
    }
    return count;
};