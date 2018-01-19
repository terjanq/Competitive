/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices) return 0;
    var cash = 0;
    var hold = -prices[0];
    for(let price of prices){
        cash = max(cash, price + hold);
        hold = max(hold, cash - price);
    }
    
    return cash;
};

function max(a, b){
    return a>b?a:b
}