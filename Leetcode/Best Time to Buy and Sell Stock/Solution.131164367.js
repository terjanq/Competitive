/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if(prices.length == 0) return 0;
    
    let min = prices[0];
    let cash = 0;
    
    for(let price of prices){
        min = Math.min(min, price);
        cash = Math.max(price - min, cash);
    }
    
   
    
    
    return cash;
    
};