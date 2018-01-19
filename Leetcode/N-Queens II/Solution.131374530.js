/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let arr = Array.from(Array(n), (a, i) => i);    
    
    
    function* permutations(k){
        if(k == n){
            yield arr;
            return;
        }
        for(let i=k; i<n; i++){
            [arr[i], arr[k]] = [arr[k],arr[i]];
            if(isCorrect(arr, k+1)) yield *permutations(k+1);
            [arr[i], arr[k]] = [arr[k],arr[i]];
        }
    }
    let perms = permutations(0);
    let counter = 0;
    
    for(let perm of perms){
        counter++;
          
    }
    
    
    function isCorrect(arr, k){
        let set1 = new Set();
        let set2 = new Set();
        // console.log(arr, k);
        for(let i=0; i<k; i++){
            if(set1.has(arr[i]+i)) return false;
            if(set2.has(arr[i]- i)) return false;
            set1.add(arr[i]+i);
            set2.add(arr[i]-i);
        }
        return true;
    }
    return counter;
};