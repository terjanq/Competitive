function ListNode(val){
    this.val = val;
    this.next = null;
}


var reverseList = function(head) {
    if(!head) return null;
   
    var tail = new ListNode(0), temp;
 
    dfs(head);
    
    function dfs(node){
        debugger;
        if(node.next) {
            dfs(node.next);
            temp.next = node;
            temp = temp.next;
            node.next = null;
        }
        else { tail = node; temp = tail }
    }

    return tail;

};




