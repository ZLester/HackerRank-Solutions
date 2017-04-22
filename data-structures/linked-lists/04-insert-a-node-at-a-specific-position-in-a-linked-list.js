function insert(head, data, position) {
    const newNode = new Node(data);

    if (head === null || position === 0) {
        newNode.next = head;
        return newNode;
    }

    let node = head;
    let i = 0;
    while (i !== position - 1) {
        node = node.next;
        i++;
    }
    
    let temp = node.next;
    node.next = newNode;
    newNode.next = temp;
    
    return head;
}
