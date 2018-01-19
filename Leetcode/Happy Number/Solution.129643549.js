/**
 * @param {number} n
 * @return {boolean}
 */

/*
    The maximum sum of its digit squares is less than log10(n)*9^2,
    We are using hashtable to find cycle
    Time Complexicity O(log10(2))
    Space Complexicity O(log10(2))
    With big constants :)
*/
var isHappy = function(n) {
    let alreadyProcessed= new Set();
    
    let curNumber = n;
    let curValue = 0;
    
    while(curNumber>0) {
        curValue += (curNumber%10)**2;
        curNumber = Math.floor(curNumber/10);
    }
    curNumber = curValue;
    if(curValue == 1) return true;
    
    while(!alreadyProcessed.has(curNumber)){
        alreadyProcessed.add(curNumber);
        curValue = 0;
        while(curNumber>0) {
            curValue += (curNumber%10)**2;
            curNumber = Math.floor(curNumber/10);
        }
        if(curValue == 1) return true;
        curNumber = curValue;
    }
    
    return false;
};