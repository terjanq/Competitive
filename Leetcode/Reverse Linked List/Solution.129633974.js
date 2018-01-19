


var reverseList = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    
    
    let tail = new ListNode(0);
    let cur = head;
    let temp;
    
    while(cur){
        temp = cur.next;
        cur.next = tail.next;
        tail.next = cur;  
        cur = temp;
        
    }

    return tail.next;

};




