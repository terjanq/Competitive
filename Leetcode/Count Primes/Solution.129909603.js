/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n<2) return 0;
    
    let primesCount = 0;
    let primesTab = (new Array(n)).fill(1);
    
    primesTab[0] = 0;
    primesTab[1] = 0;
    
    
    for(let j = 2; j*j <n ; j++){
        if(primesTab[j]){
            for(let i=2; j*i < n; i++)
                primesTab[j*i] = 0;
        }
    }

    for(let i = 0; i < n; i++){
        if(primesTab[i]) primesCount++;
    }
    
    
    return primesCount;
    
    
};

