/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    
    //if n is odd, n+1 or n-1 is divided by 4; We want to choose the one who can be dividded
    var count = 0;
   
    if(n == 1) return 0;
    
    while(n>3){
        if(n%2 == 0) n/=2
        else
            if((n+1)%4 == 0) n++;
            else n--;
        count++;
    }
    
    
   
    if(n == 2) return count + 1;
    if(n == 3) return count + 2;
    
};