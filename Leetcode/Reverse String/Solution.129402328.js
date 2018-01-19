/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var out = "";
    for(var i=s.length-1; i>=0; i--) out+=s[i];
    return out;

};