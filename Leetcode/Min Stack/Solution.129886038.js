/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.container = [];
    this.currentMin = Number.MAX_SAFE_INTEGER;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(x<this.currentMin){
        this.container.push([x, this.currentMin]);
        this.currentMin = x;
    }
    else
        this.container.push([x]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let [val, prevMin] = this.container.pop();
    if(prevMin) this.currentMin = prevMin;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.container[this.container.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.currentMin;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */