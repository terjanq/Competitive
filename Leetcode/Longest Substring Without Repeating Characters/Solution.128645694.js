/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     if(s.length == 0) return 0;
    var currentLength = 1;
    var maxLength = 1;
    var chars = new Array(300);
    chars.fill(0);
    var i=0;
    var j=1;
    chars[s[0].charCodeAt(0)]++
    
  
   while(j<s.length){
  
        while(j<s.length && chars[s[j].charCodeAt(0)] == 0){
            currentLength++;
            chars[s[j].charCodeAt(0)]++;
            j++;
        }

        maxLength = Math.max(maxLength, currentLength); 
        
        if(j<s.length){
            currentLength++;
            chars[s[j].charCodeAt(0)]++;
            j++;
        }


        while(i<j && chars[s[i].charCodeAt(0)] != 2){
            chars[s[i].charCodeAt(0)]--;
            i++;
            currentLength--;
        }
        if(i<s.length){
            chars[s[i].charCodeAt(0)]--;
            currentLength--;
            i++;
        }
   }
        
    
    return maxLength;
    
 
    
};