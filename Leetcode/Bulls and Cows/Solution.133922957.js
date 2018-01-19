/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let dict1 = Array.from({length:10}, ()=>0);
    let dict2 = Array.from({length:10}, ()=>0);
    const c0 = '0'.charCodeAt(0);
    const n = secret.length;
    let toInt = (c) => c.charCodeAt(0) - c0;
    
     let bulls = 0, cows = 0;
    
    for(let i=0; i<n; i++){
        if(guess[i] == secret[i]) bulls++;
        else{
            dict1[toInt(guess[i])]++;
            dict2[toInt(secret[i])]++;
        }
    }
    
   
    for(let i=0; i<10; i++){
        cows += Math.min(dict1[i], dict2[i]);
    }
    
    return `${bulls}A${cows}B`;
    
};