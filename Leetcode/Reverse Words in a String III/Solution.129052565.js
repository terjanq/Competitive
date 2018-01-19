/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var out = "";
    var i = 0;

    var tmp = "";
    while(i<s.length){
        tmp = "";
        while(s[i] != " " && i<s.length){
            tmp += s[i];
            i++;
        }
        i++;
        out += tmp.split("").reverse().join("") + " ";
    }
    
    
    
    return out.trim();
};