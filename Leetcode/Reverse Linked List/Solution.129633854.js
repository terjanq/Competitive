


var reverseList = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    
    
    let tail = new ListNode(0);
    let cur = head;
    
    while(cur){
        let p = cur.next;
        cur.next = tail.next;
        tail.next = cur;  
        cur = p;
        
    }

    return tail.next;

};




