/**
 * @param {number[][]} M
 * @return {number}
 */


function TreeNode(){
    this.parent = null;
    this.rank = 0;
}

function Find(x){
    if(x.parent === null) return x;
    x.parent = Find(x.parent);
    return x.parent;
}

function Union(x, y){
    let xRoot = Find(x);
    let yRoot = Find(y);
    
    if(xRoot.rank < yRoot.rank)
        xRoot.parent = yRoot;
    else if(xRoot.rank > yRoot.rank)
        yRoot.parent = xRoot
    else if(xRoot !== yRoot){
        xRoot.parent = yRoot;
        yRoot.rank++;
    }
}

var findCircleNum = function(M) {
    let n = M.length;
    let nodes = new Array(n);
    for(let i=0; i<n; i++) nodes[i] = new TreeNode();
    
    for(let i=0; i<n; i++)
        for(let j=i+1; j<n; j++)
            if(M[i][j] == 1) Union(nodes[i], nodes[j]);
    
    let counter = 0;
    
    for(let i=0; i<n; i++){
        let root = Find(nodes[i]);
        if(!root.visited) {
            root.visited = 1;
            counter++;
        }
       
    }
    
    
    return counter;
        
};












