class Solution {
public:
    string longestPalindrome(string s) {
        string s1 = longestEvenPalindrome(s);
        string s2 = longestOddPalindrome(s);
        
        return (s1.size() > s2.size()? s1 : s2);
        
    }
    
    string longestOddPalindrome(string &s){
        int longestPalindromeLength = 0;
        string longestPalindrome = "";
        for(int i=0; i<s.size(); i++){
            int currentPalindrome = 0;
            int j=0;
            for(j; i-j >= 0 && i+j < s.size(); j++){
                if(s[i-j] == s[i+j]) ++currentPalindrome;
                else { 
                    break;
                }
            }
            if(currentPalindrome > longestPalindromeLength){
                        longestPalindromeLength = currentPalindrome;
                        longestPalindrome = s.substr(i-j+1, currentPalindrome*2 -1);
            }
            
        }
        
        return longestPalindrome;
    }
    
    string longestEvenPalindrome(string &s){
        int longestPalindromeLength = 0;
        string longestPalindrome = "";
        for(int i=1; i<s.size(); i++){
            int currentPalindrome = 0;
            int j=0;
            for(j; i-j-1 >= 0 && i+j < s.size(); j++){
                if(s[i-j-1] == s[i+j]) ++currentPalindrome;
                else {
                    
                    break;
                }
            }
             if(currentPalindrome > longestPalindromeLength){
                        longestPalindromeLength = currentPalindrome;
                        longestPalindrome = s.substr(i-j, currentPalindrome*2);
            }
            
        }
        
        return longestPalindrome;
        
    }
};