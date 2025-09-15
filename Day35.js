


//Day 35 doubly linked list

class Node{
    constructor(data){
        this.data=data
        this.prev=null,
        this.next=null
    }

}
class DoublyLinkedList{
    constructor(){
        this.head=null,
        this.tail=null,
        this.size=0
    }
    addAtPhotoStart(data){
         const newNode= new Node(data);
         if(!this.head){
            this.head=newNode;
         }
         else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
         }
    }
    addAtPhotoEnd(data){
         const newNode=new Node(data);
         if(!this.tail){
            this.head=this.tail=newNode;
         }
         else{
            newNode.prev=this.tail;
            this.tail.next=newNode;
            this.tail=newNode
         }
    }
     
    viewForward(){
        let current=this.head;
        let result="";
        while(current){
            result+=current.data+(current.next?"->":"");
            current=current.next;
        }
        console.log("Forward :" + result)
    }

    viewBackward(){
        let current=this.tail;
        let result="";
        while(current){
            result+=current.data+(current.prev?"->":"");
            current=current.prev;
        }
        console.log("Backward :" + result)
    }

}


let double= new DoublyLinkedList();

double.addAtPhotoEnd("P1");
double.addAtPhotoEnd("p2");
double.addAtPhotoStart("P0");
double.viewForward()
double.viewBackward()