/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0) return 0;
    let sq = 1;
    
    while(sq*sq <= x) sq++;
    
    return --sq;
};