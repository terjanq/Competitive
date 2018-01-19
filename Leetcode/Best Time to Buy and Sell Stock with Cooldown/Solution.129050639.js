/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var n = prices.length;
    
    var sell = 0, prev_sell = 0, buy = Number.MIN_SAFE_INTEGER, prev_buy;
    if(n == 1 || n == 0) return 0;
    
    
    
    // buy[i] = max(sell[i-2] - prices[i], buy[i-1]);
    // sell[i] = max(buy[i-1] + price[i], sell[i-1]);
    
    
    
    for(var i=0; i<n; i++){
        prev_buy = buy;
        buy = Math.max(prev_sell - prices[i], prev_buy);
        prev_sell = sell;
        sell = Math.max(prev_buy + prices[i], prev_sell);
    }
    
    
    return sell;
  
    
    
};