/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var sum = new ListNode(0);
    var current = sum;
    var leading1 = 0;
    var a = l1, b = l2;
    while(a !== null || b !== null){
        if(a) current.val += a.val;
        if(b) current.val += b.val;
        
        if(current.val > 9) {
            current.val -= 10; 
            leading1 = 1;
        }
        else{
            leading1 = 0;
        }
        
        if(a) a = a.next;
        if(b) b = b.next;
        if(leading1 || a || b) {
            current.next = new ListNode(leading1);
            current = current.next;
        }
        else{
            break;
        }
    }
    return sum;
};