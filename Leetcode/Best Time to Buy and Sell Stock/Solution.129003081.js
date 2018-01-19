/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(prices.length == 0) return 0;
    
    var boughtItem = prices[0];
    var maxProfit = 0;
    
    for(var i=1; i<prices.length; i++){
        maxProfit = Math.max(prices[i] - boughtItem, maxProfit);
        boughtItem = Math.min(prices[i], boughtItem);
    }
    
    return maxProfit;
    
    
};