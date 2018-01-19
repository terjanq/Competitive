/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.carr = nums;
    this.temp = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.temp = Array.from(this.carr);
    return this.temp;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    this.temp = Array.from(this.carr);
    for(let i=0; i<this.temp.length; i++){
        let idx = rand(i, this.temp.length-1);
        [this.temp[idx], this.temp[i]] = [this.temp[i], this.temp[idx]];
    }
    return this.temp;
    
};

function rand(a, b){
    return Math.floor(Math.random()*(b-a+1) + a);
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */