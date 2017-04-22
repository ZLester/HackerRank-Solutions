function insert(head, data) {
    let newNode = new Node(data);

    if (head === null) {
        return newNode;
    }

    let node = head;
    while (node.next) {
        node = node.next;
    } 
    node.next = newNode;

    return head;
}
