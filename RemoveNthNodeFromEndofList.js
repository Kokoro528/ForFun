var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    for (let i = 0; i < n && fast != null; i++) {
        fast  = fast.next;
    }
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    if (slow.next != null) {
        slow.next = slow.next.next;
    }
    
    return dummy.next;
};
