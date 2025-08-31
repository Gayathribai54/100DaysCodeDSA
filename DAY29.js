//📢 Day 29 - DSA Challenge


// Problem Statement

// Implement a Linked List with the following operations:
// 1. Insert a node at any given position
// 2. Delete a node from any given position
// 3. Print the entire linked list

//delete operations 

class node{
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
    insertAtPosition(data,pos){
        if(pos<1){
            console.log("invalid position");
            return;
        }
        let temp=this.head;
        while(temp!==null){
            if(temp.data===data){
                console.log("duplicate entries not allowed");
                return;
            }
            temp=temp.next;
        }
        const newNode=new node(data);
        if(pos===1){
            newNode.next=this.head;
            this.head=newNode;
            if(this.tail===null){
                this.tail=newNode;
            }
            return;
        }
        let current=this.head;
        let count=1;
        while(current!==null&& count<pos-1){
            current=current.next;
            count++
        }
        if(current===null){
            console.log("invalid position");
            return;
        }
        newNode.next=current.next;
        current.next=newNode;
        if(newNode.next===null){
            this.tail=newNode;
        }
    }
    deleteElement(index){
         if(index===0){
            this.head=this.head.next;
            return;
         }
         let current=this.head;
         let previous=null;
         let count=0;


        while(current && count<index){
            previous=current;
            current=current.next;
            count++;
        }


       if(current){
        previous.next=current.next;
       }


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

console.log("Insert 10 at position 1");
list.insertAtPosition(10, 1);

console.log("Insert 20 at position 2");
list.insertAtPosition(20, 2);

console.log("Insert 30 at position 2");
list.insertAtPosition(30, 2);

console.log("Delete node at position 1");
list.deleteElement(0);

console.log("Final Linked List:");
list.printList();