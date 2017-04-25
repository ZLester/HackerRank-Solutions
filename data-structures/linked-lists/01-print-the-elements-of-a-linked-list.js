function print(head) {
    while (head) {
        console.log(head.data);
        head = head.next;
    }
}
