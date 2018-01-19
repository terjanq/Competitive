/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lengthA = 0, lengthB = 0;
    let it1 = headA, it2 = headB;
    while(it1 != null) {
        it1 = it1.next;
        lengthA++;
    }
    
    while(it2 != null){
        it2 = it2.next;
        lengthB++;
    }
    
    if(lengthA > lengthB){
        [lengthA, lengthB] = [lengthB, lengthA];
        [headA, headB] = [headB, headA];
    }
    
    let diff = lengthB - lengthA;
    it1 = headA; it2 = headB;
    
    while(diff--){
        it2 = it2.next
    }
    
    while(it1 !== it2){
        it1 = it1.next;
        it2 = it2.next;
    }
    
    return it1;
    
};