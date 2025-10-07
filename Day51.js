//DAY 51 CHALLENGE 


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAtNodeEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    insertAtBegining(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }


    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    



    middle() {
        if (!this.head) {
            console.log("List is empty");
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log("Middle:", slow.data);
        return slow;
    }


}



let list = new LinkedList();
list.insertAtBegining(60);
list.insertAtBegining(50);
list.insertAtBegining(40);
list.insertAtBegining(30);
list.insertAtBegining(20);
list.insertAtBegining(10);
list.printList();
list.middle();