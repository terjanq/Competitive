/**
 * @param {number} n
 * @return {boolean}
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