//day 27 challenge 





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

    insertAtHead(data) {
        const newNode = new Node(data);
        if (!this.head) {                 // empty list
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        console.log(`Insert ${data} at head → ${this.printList()}`);
    }

    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) {                 // empty list
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        console.log(`Insert ${data} at tail → ${this.printList()}`);
    }

    insertAtPosition(data, position) {
        if (position < 1) {
            console.log("❌ Invalid position (positions start at 1).");
            return;
        }

        const newNode = new Node(data);

        // Case 1: Insert at head (pos = 1)
        if (position === 1) {
            newNode.next = this.head;
            this.head = newNode;
            if (!this.tail) this.tail = newNode;  // if list was empty
            console.log(`Insert ${data} at position ${position} → ${this.printList()}`);
            return;
        }

        let current = this.head;
        let count = 1;

        // Traverse to node before the desired position
        while (current !== null && count < position - 1) {
            current = current.next;
            count++;
        }

        if (current === null) {
            console.log("invalid position");
            return;
        }

        newNode.next = current.next;
        current.next = newNode;

        if (newNode.next === null) {  // if inserted at end
            this.tail = newNode;
        }

        console.log(`Insert ${data} at position ${position} → ${this.printList()}`);
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        return result + "null";
    }
}

let list = new LinkedList();
list.insertAtHead(10);      
list.insertAtTail(20);      
list.insertAtPosition(15,2);
list.insertAtPosition(5,1); 
list.insertAtPosition(25,5);
list.insertAtPosition(100,10);
