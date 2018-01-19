/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    
    var holdedTicket = 0, lastSold = -1;
    var n = prices.length;
    var dp = new Array(n + 1);
    
    if(n == 0) return 0;
    
    dp[0] = 0;
    
    
    for(var i=1; i<n; i++){
        if(prices[holdedTicket] > prices[i]) holdedTicket = i;
        
        if(prices[i] - prices[holdedTicket] > fee && lastSold == -1){
            dp[i] = prices[i] - prices[holdedTicket] - fee;
            lastSold = holdedTicket = i;
        }
        
        else
            if(Math.max(dp[lastSold] + prices[i] - prices[lastSold], 
                        dp[lastSold] + prices[i] - prices[holdedTicket] - fee) > dp[i-1]){
                dp[i] = Math.max(dp[lastSold] + prices[i] - prices[lastSold], 
                        dp[lastSold] + prices[i] - prices[holdedTicket] - fee);
                   lastSold = holdedTicket = i;
            }
            else dp[i] = dp[i-1];
    }
    
    
    return dp[n-1];
    
    
    
};