/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sell1 = 0, sell2 = 0, buy1 = Number.MIN_SAFE_INTEGER, buy2 = Number.MIN_SAFE_INTEGER;
    for(let price of prices){
        buy1 = Math.max(buy1, -price);
        sell1 = Math.max(sell1, buy1 + price);
        buy2 = Math.max(buy2, sell1 - price);
        sell2 = Math.max(sell2, buy2 + price);
    }
    
    
    return sell2;
};