/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    if(n < 2) return ;
    
    if(k >= n) k %= n;
    
    if(k == 0) return;
    
    let cycles = gcd(n, k);
    
    for(let i = 0; i<cycles; i++){
        let last = nums[i];
        nums[i] = null;
        let j = i;
        while(last != null){
            j = (j + k)%n;
            let temp = nums[j];
            nums[j] = last;
            last = temp;
        }
    }
    
    function gcd(a, b){
        if(b == 0) return a;
        return gcd(b, a%b);
    }
       
    

    
    
};