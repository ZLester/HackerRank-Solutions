function reversePrint(head) {
    if (head === null) {
        return;
    }

    reversePrint(head.next);

    console.log(head.data);
}
