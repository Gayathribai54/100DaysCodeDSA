//DAY 50 DSA CHALLENGE 


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

    reversing() {
        let prev = null;
        let current = this.head;
        this.tail = this.head;

        while (current != null) {
            let forward = current.next;
            current.next = prev;
            prev = current;
            current = forward;
        }
        this.head = prev;
    }



    


}



let list = new LinkedList();
list.insertAtBegining(5);
list.insertAtBegining(4);
list.insertAtBegining(3);
list.insertAtBegining(2);
list.insertAtBegining(1);
list.reversing();
list.printList();