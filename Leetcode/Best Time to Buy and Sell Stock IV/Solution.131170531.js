/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if(k == 0) return 0;
    if(k > prices.length/2 + 2) k = Math.floor(prices.length/2 + 2);
        
    let sells = Array.from(Array(k+1), () => 0);
    let buys = Array.from(Array(k+1), () => Number.MIN_SAFE_INTEGER);
    
    for(let price of prices){
        for(let i=1; i<=k; i++){
            buys[i] = Math.max(buys[i], sells[i-1] - price);
            sells[i] = Math.max(sells[i], buys[i] + price);
            if(sells[i] == 0) break;
            
        }
    }
    
    
    return sells[k];
};