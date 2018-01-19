/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var rotate = function(nums, k) {
    let n = nums.length;
    if(n < 2) return ;
    k %= n;
    if(k == 0) return;
    
    
    function inPlaceSolution(){
        

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
    }
    
    function oneLineSolution(){
        [].unshift.apply(nums, nums.splice(-k));
    }
    
    function additionalSpaceSolution(){
        var removed = nums.slice(-k);
        let _n = n - k;
        for(let i = _n - 1; i>=0; i--)
            nums[i+k] = nums[i];
        
        for(let i = 0; i<k; i++)
            nums[i] = removed[i];
        
    }
    
    function reverseSolution(){
        //reverse All;
        let i = 0, j = n-1;
        while(i<j){
            [nums[i], nums[j]] = [nums[j],nums[i]];
            i++; j--;
        }
        //reverse first k
        i = 0; j = k-1;
        while(i<j){
            [nums[i], nums[j]] = [nums[j],nums[i]];
            i++; j--;
        }
        
        //reverse last n-k
        i = k; j = n-1;
        while(i < j){
            [nums[i], nums[j]] = [nums[j],nums[i]];
            i++; j--;
        }
    }
    
    //inPlaceSolution();
    // oneLineSolution();
    //additionalSpaceSolution();
    reverseSolution();
};

function gcd(a, b){
        if(b == 0) return a;
        return gcd(b, a%b);
}
       