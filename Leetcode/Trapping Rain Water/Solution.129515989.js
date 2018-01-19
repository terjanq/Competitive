/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var n = height.length;
    var start = 0, end = n-1;
    
    while(height[start] <= height[start+1] && start < n - 1) start++;
    while(height[end] <= height[end-1] && end > 0) end--;
    
    if(end <= start) return 0;
    
    var sum = 0;
    
   
    
    while(start < end - 1){
         var i = start;
        // height[start] <= height[end]
        while(height[i] <= height[end] && i < end) {
            if(height[i] >= height[start]) 
                start = i;
            else
                sum += height[start] - height[i];
            i++;
        }

        //height[start] > height[end];
        start = i;
        i = end;
        while(height[i] <= height[start] && i > start){
            if(height[i] >= height[end])
                end = i;
            else
                sum+= height[end] - height[i];
            i--;
        }
        end = i;
    }
    
    return sum;
   
};