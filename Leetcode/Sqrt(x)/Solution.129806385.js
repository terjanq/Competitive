/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0) return 0;
    let sq = 1;
    
    let a = 1, b = 2**16;
    let m = (a+b) >> 1;
    
    while(a <= b){
        let x2 = m*m;
        if(x2 == x) return m;
        if(x2 < x)
            a = m + 1;
        else
            b = m - 1;
        
        m = (a+b)>>1;
    }
    
    return m
};