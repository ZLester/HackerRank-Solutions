function deleteNode(head, position) {
    if (position === 0) {
        if (head !== null) {
            head = head.next;
        }
        return head;
    }

    let i = 0;
    let node = head;
    while (i !== position - 1) {
        node = node.next;
        i++;
    }
    node.next = node.next.next;
    
    return head;
}
