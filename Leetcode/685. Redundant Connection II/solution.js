/** https://leetcode.com/problems/redundant-connection-ii/description/

    In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.

The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N), with one additional directed edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.

The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] that represents a directed edge connecting nodes u and v, where u is a parent of child v.

Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

 * @param {number[][]} edges
 * @return {number[]}
 */

var findRedundantDirectedConnection = function(edges) {
    const n = edges.length;
    let tree = Array.from({length: n + 1}, function(){ return {color: 0, childs: new Array(), degree: 0} });
    let hasDouble = false;
    
    edges = edges.reverse();
    
    for(let edge of  edges){
      tree[edge[0]].childs.push(edge[1]); 
      tree[edge[1]].degree++;
      if(tree[edge[1]].degree == 2) hasDouble = true;
    }

   
    let current_path = [];
    let hasCycle = false;
    
    for(let i=1; i<=n; i++) dfs(i);
    
    if(hasCycle){
        if(hasDouble){
            for(edge of edges)
                if(tree[edge[1]].degree == 2 && tree[edge[0]].cycle && tree[edge[1]].cycle) 
                    return edge;
        }
        else{
            for(edge of edges)
                if(tree[edge[0]].cycle && tree[edge[1]].cycle) 
                    return edge;
        }            
    }
    else{
        for(let edge of edges)
            if(tree[edge[1]].degree == 2) return edge;
    }
    
    
    function dfs(node){
            current_path.push(node);
            tree[node].color = 1;
            for(let child of tree[node].childs)
                if(tree[child].color == 1) mark_cycle(child);
                else if(tree[child].color == 0) dfs(child)
            tree[node].color = 2;
            current_path.pop();
        }
        
    function mark_cycle(node){
        let x;
        hasCycle = true;
        do{
           x = current_path.pop();
           tree[x].cycle = true;
        }while(x != undefined && x != node);

    }
    
   
    
};
