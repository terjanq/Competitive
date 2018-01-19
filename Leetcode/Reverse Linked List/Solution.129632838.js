function ListNode(val){
    this.val = val;
    this.next = null;
}


var reverseList = function(head) {
    if(!head) return null;
   
    var tail = new ListNode(0), temp;
 
    (function dfs(node){
        if(node.next) {
            dfs(node.next);
            temp.next = node;
            temp = temp.next;
            node.next = null;
        }
        else { tail = node; temp = tail }
    })(head);

    return tail;

};




