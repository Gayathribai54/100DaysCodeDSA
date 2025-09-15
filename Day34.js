//🚀 Day 34 - DSA Challenge

class Node{
    constructor(data){
          this.data=data;
          this.next=null;
    }
}

class linkedList{
    constructor(data){
        this.head=null;
        this.tail=null;
    }

    insertAtBeginning(data){
        let newNode= new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }
    insertAtEnd(data){
        let newNode= new Node(data);
        if(this.head===null){
           this.head=newNode; 
           return;
        }
        let current=this.head;
        while(current.next!==null){
            current=current.next;
        }
        current.next=newNode;
    }

    deleteByName(value) {
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

let list=new linkedList()

list.insertAtBeginning("Perfect");
list.insertAtEnd("shape of  you");
list.insertAtEnd("Believer");
list.printList();
list.deleteByName("Believe");
list.deleteAtGivenPosition(2);
list.printList();