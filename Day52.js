//DAY 36 CHALLENGE 


//DOUBLY LINKED LIST 


//🚀 Day 36 - DSA Challenge

// doubly linked list 

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addAtStart(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    addAtEnd(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    addAtPosition(index, data) {
        if (index <= 0) {
            this.addAtStart(data);
            return;
        }
        if (index >= this.size) {
            this.addAtEnd(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.next;
            i++;
        }

        let prevNode = current.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = current;
        current.prev = newNode;

        this.size++;
    }

    viewForward() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + (current.next ? "->" : "");
            current = current.next;
        }
        console.log("Forward :" + result);
    }

    viewBackward() {
        let current = this.tail;
        let result = "";
        while (current) {
            result += current.data + (current.prev ? "->" : "");
            current = current.prev;
        }
        console.log("Backward :" + result);
    }
}

// Testing
let double = new DoublyLinkedList();

double.addAtStart("A");
double.addAtEnd("S");
double.addAtEnd("I");
double.addAtEnd( "A");

double.viewForward();
double.viewBackward();
