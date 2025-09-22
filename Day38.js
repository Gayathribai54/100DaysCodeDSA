

//🚀 Day 38 - DSA Challenge

//doubly linked list 



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
        this.current = null;
    }



    addAction(data) {
        const newNode = new Node(data);

        // If we are not at the tail (because of Undo), clear forward history
        if (this.current && this.current !== this.tail) {
            let temp = this.current.next;
            while (temp) {
                let next = temp.next;
                temp.prev = temp.next = null;
                temp = next;
            }
            this.current.next = null;
            this.tail = this.current;
        }

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.current = this.tail; // move current to latest action
    }




    deleteActionAtEnd() {
        if (this.tail === null) {
            console.log("list is empty");
            return;
        }

        if (this.tail.prev === null) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            if (this.current && this.current.next === null) {
                this.current = this.tail;
            }
        }
        this.size--;
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



    undo() {
        if (this.current === null) {
            console.log("nothing to undo");
        }
        else if (this.current.prev !== null) {
            this.current = this.current.prev;
            console.log(this.current.data)
        }
        else {
            this.current = null;
            console.log('no current action')
        }
    }

    redo() {
        if (this.current === null && this.head !== null) {
            this.current = this.head;
            console.log(this.current.data)
        }
        else if (this.current.next !== null) {
            this.current = this.current.next;
            console.log(this.current.data)
        }
        else {
            console.log("no action to redo")
        }
    }






}

// Testing
let double = new DoublyLinkedList();
double.addAction("type A");
double.addAction("type B");
double.addAction("type C");
double.undo();
double.redo();
double.deleteActionAtEnd();
double.viewForward();
double.viewBackward();