
//🚀 Day 37 - DSA Challenge


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

    addSongAtStart(data) {
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

    addSongAtEnd(data) {
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

    addSongAtPosition(index, data) {
        if (index <= 0) {
            this.addSongAtStart(data);
            return;
        }
        if (index >= this.size) {
            this.addSongAtEnd(data);
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



    deleteSongAtStart() {
        if (this.head === null) {
            console.log("list is empty");
            return;
        }

        const deleteData = this.head.data;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return deleteData;
    }


    deleteSongAtEnd() {
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
        }
         this.size --;
    }



    deleteSongAtPosition(index) {
        if (index < 0 || index >= this.size) {
            console.log("invalid index");
            return;
        }
        if (index == 0) {
            this.deleteSongAtStart();
            return;
        }
        if (index == this.size - 1) {
            this.deleteSongAtEnd();
            return;
        }
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }


        let deletedData = current.data;
        let prevNode = current.prev;
        let nextNode = current.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.size--;
        return deletedData;

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

double.addSongAtStart("SongA");    // SongA
double.addSongAtEnd("SongB");      // SongA → SongB
double.addSongAtEnd("SongC");      // SongA → SongB → SongC
double.addSongAtPosition(1, "SongX"); // SongA → SongX → SongB → SongC
double.viewForward();              // ✅ SongA → SongX → SongB → SongC

double.deleteSongAtStart();        // removes SongA → SongX → SongB → SongC becomes SongX → SongB → SongC
double.deleteSongAtEnd();          // removes SongC → SongX → SongB
double.deleteSongAtPosition(1);    // removes SongB → SongX
double.viewForward();              // ✅ SongX
double.viewBackward();             // ✅ SongX
