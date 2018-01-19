/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0) return 0;
    let low = 1, high = 2**16;
    let ans = (low+high) >> 1;
    
    while(low <= high){
        let x2 = ans*ans;
        if(x2 < x) low = ans + 1;
        else if(x2 > x) high = ans - 1;
        else return ans;
        ans = (low+high)>>1;
    }
    
    return ans
};