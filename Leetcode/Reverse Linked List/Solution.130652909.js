


var reverseList = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    
    
    let prev = head;
    let cur = head.next;
    head.next = null;
    
    
    
    while(cur.next != null){
       let next = cur.next;
       cur.next = prev;
       prev = cur;
       cur = next;
    }
    
    cur.next = prev;
    
    // while(cur != null){
    //     console.log(cur.val);
    //     cur = cur.next;
    // }

    

    return cur;

};




