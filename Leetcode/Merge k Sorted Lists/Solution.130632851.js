/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length == 0) return [];
    
    return helper(lists);
    function helper(lists){
        if(lists.length == 1) return lists[0];
        let temp = [];
        
        for(let i = 0; i+1<lists.length; i+=2){
            
                let lnode = new ListNode(0);
                let p = lnode;
                while(lists[i] != null && lists[i+1] != null){
                    // console.log(lists[i].val, lists[i+1].val);
                    if(lists[i].val < lists[i+1].val) {
                        p.next = lists[i];
                        lists[i] = lists[i].next;
                         p=p.next;
                    }
                    else{
                        p.next = lists[i+1];
                        lists[i+1] = lists[i+1].next;
                         p=p.next;
                    }  
                 
                }
            if(lists[i] == null) p.next = lists[i+1];
            else if(lists[i+1] == null) p.next = lists[i];
            
            temp.push(lnode.next); 
           
        }
         if(lists.length %2) temp.push(lists[lists.length-1]);
        return helper(temp);
    }
};