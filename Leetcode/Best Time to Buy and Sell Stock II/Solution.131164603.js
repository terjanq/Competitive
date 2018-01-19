/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 0) return 0;
    
    let cash = 0, hold = -prices[0];
    
    for(let price of prices){
        cash = Math.max(cash, hold + price);
        hold = Math.max(hold, cash - price);
    }
    
    
    return cash;
};
