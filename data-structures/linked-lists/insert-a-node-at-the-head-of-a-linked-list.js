function insert(head, data) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
}
