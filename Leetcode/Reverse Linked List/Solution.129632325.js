function ListNode(val){
    this.val = val;
    this.next = null;
}


var reverseList = function(head) {
    if(!head) return null;
   
    
    var tail = new ListNode(0), temp;

    var h = new ListNode(1); h.next = new ListNode(2); h.next.next = new ListNode(3);
    
    head = head || h;
    
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




