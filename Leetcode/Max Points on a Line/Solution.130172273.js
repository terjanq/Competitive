/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let n = points.length;
    
    if(n == 1) return 1;

    let pointHashes = new Array(n);
    for (let i=0;i<n;i++) pointHashes[i] = new Set();
    let hMap = new Map();
    let maxV = 0;
    
    function fToStr(a, b){
        
        if(a.x == b.x) return "x" + a.x.toString();
        if(a.y == b.y)  return "y" + a.y.toString();
        
        let d = a.x - b.x
        let s1 = a.y - b.y
        let s2 = a.y*d - a.x*s1;
        let minus1=true, minus2=true;
        let str = "";
        
        
        if((s1 < 0 && d < 0) || (s1 > 0 && d>0))
            minus1 = false; 
        
        
        
        if((s2 < 0 && d <0) || (s2 >0 && d > 0))
            minus2 = false;
        
        
        s1 = Math.abs(s1);
        s2 = Math.abs(s2);
        d = Math.abs(d);
        
        let gcd1 = gcd(d, s1);
        let gcd2 = gcd(d, s2);
        

        str =  (minus1? '-':'') + (s1/gcd1) +'/'+ (d/gcd1) +(minus2?'-':'+')+(s2/gcd2) + '/' + (d/gcd2);
        
        return str;
    }
    
    function gcd(a, b){
        if(b==0) return a;
        return gcd(b, a%b);
    }
    
    for(let i=0;i<n;i++)
        for(let j=i+1; j<points.length;j++){
            let s = fToStr(points[i], points[j]);
            // console.log(s);
            pointHashes[i].add(s);
            pointHashes[j].add(s);
        }
    
    // console.log(pointHashes);
    
    for(let i=0; i<n; i++)
        for(let s of pointHashes[i])
            if(!hMap.has(s)) hMap.set(s, 1);
            else hMap.set(s, hMap.get(s) + 1);
    
    // console.log(hMap);
    
    for(let [key, val] of hMap){
        maxV = Math.max(maxV, val);
    }
            
    
    return maxV;

    
};