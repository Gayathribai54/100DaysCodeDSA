

//🚀 Day 33 - DSA Challenge

//operations on singly linked list 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class linkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }


    insertAtBegining(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }

    }
    insertAtEnd(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        this.tail.next = node;
        this.tail = node;
    }

    deleteByValue(value) {
        if (this.head === null) {
            console.log("list is empty");
            return;
        }
        if (this.head.data === value) {   // fixed: handle head
            this.head = this.head.next;
            if (this.head === null) this.tail = null;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data == value) {
                if (current.next == this.tail) {
                    this.tail = current;
                    current.next = current.next.next;
                }
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    deleteAtGivenPosition(position) {
        if (this.head === null || position <= 0) {
            console.log("invalid position or empty list");
            return;
        }


        if (position === 1) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return;
        }
        let current = this.head;
        let count = 1;

        while (current !== null && count < position - 1) {
            current = current.next;
            count++;
        }
        if (current === null || current.next === null) {
            console.log("position out of range ");
            return;
        }
        if (current.next === this.tail) {
            this.tail = current;
        }
        current.next = current.next.next;
    }


    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data;
            current = current.next;
        }
        console.log(result);
    }

}


let list = new linkedList();
list.insertAtBegining("Finish Homework");  // list: Finish Homework
list.insertAtEnd("Buy Groceries");         // list: Finish Homework -> Buy Groceries
list.insertAtEnd("Morning Workout");       // list: Finish Homework -> Buy Groceries -> Morning Workout
list.deleteByValue("Buy Groceries");       // list: Finish Homework -> Morning Workout
list.deleteAtGivenPosition(2);             // list: Finish Homework
list.printList();
