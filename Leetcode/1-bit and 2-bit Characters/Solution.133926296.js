/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {

    if(bits.length == 0) return false;
    if(bits.length == 1) return true;
    let oneLength = 0;
    
    let i = bits.length - 2;
    
    while(i >= 0 && bits[i--] == 1) oneLength++;
    
    return oneLength%2 == 0;
    
    
};