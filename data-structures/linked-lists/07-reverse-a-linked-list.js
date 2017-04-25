function reverseLinkedList(head) {
    let prev = null;
    let next = null;
    let node = head;

    while (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    
    return prev;
}
