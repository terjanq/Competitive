/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    var n1 = s1.length, n2 = s2.length;
    
    var dp = new Array(n1 + 1);
    for(var i=0; i<n1+1; i++) dp[i] = (new Array(n2+1)).fill(0);
    
    
    for(var i=n1-1; i>=0; i--) dp[i][n2] = dp[i+1][n2] + s1.charCodeAt(i);
    for(var i=n2-1; i>=0; i--) dp[n1][i] = dp[n1][i+1] + s2.charCodeAt(i);
    
    for(var i=n1-1; i>=0; i--)
        for(var j=n2-1; j>=0; j--){
            if(s1[i] == s2[j]) 
                dp[i][j] = dp[i+1][j+1];
            else
                dp[i][j] = Math.min(s1.charCodeAt(i) + dp[i+1][j], s2.charCodeAt(j) + dp[i][j+1]);
        }
    
    
    return dp[0][0];
};