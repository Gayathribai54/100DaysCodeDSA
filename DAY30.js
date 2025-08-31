// 🚀 Day 30 - DSA Challenge

// Hey Students 

// Today’s challenge continues with Linked Lists 

// Problem Statement

// Implement the following operations on a Singly Linked List:
// ⿡ Insert a node at the end
// ⿢ Insert a node at the beginning
// ⿣ Delete a node from the beginning
// ⿤ Delete a node from the end


//📢 Day 29 - DSA Challenge


// Problem Statement

// Implement a Linked List with the following operations:
// 1. Insert a node at any given position
// 2. Delete a node from any given position
// 3. Print the entire linked list

//delete operations 

class Node{
    constructor(data){
       this.data=data;
       this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insertAtBegining(data){
        const newNode = new Node(data);
        if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
    }
    insertAtEnd(data){
        const newNode=new Node(data);
         if(this.head===null){
            this.head=newNode;
            this.tail=newNode;
         }
         this.tail.next=newNode;
         this.tail=newNode;
    }
    deleteFromBeginning(){
        if(this.head===null){
            console.log("list is empty");
            return;
        }
        this.head=this.head.next;
        if(this.head===null){
            this.tail=null;
        }
    }
    deleteFromEnd(){
        if(this.head===null){
            console.log("list is empty");
            return;
        }
        if(this.head.next===null){
            //only one node
            this.head=null;
            this.tail=null;
            return;
        }
        let current=this.head;
        while(current.next!==this.tail){
            current=current.next;
        }
        current.next=null;
        this.tail=current;

    }
    printList(){
        let result="";
        let temp=this.head;
        while(temp!==null){
            result+=temp.data+"->";
            temp=temp.next;
        }
        result+="null";
        console.log(result);
    }
}

let list=new LinkedList();

list.insertAtBegining(5);
list.insertAtEnd(10);
list.insertAtEnd(20);
list.deleteFromEnd();
list.deleteFromBeginning();

list.printList();