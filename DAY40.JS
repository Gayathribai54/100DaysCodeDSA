//DAY 40 DSA CHALLENGE 💥



class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.current=null;
        this.size=0;
    }


    postTweet(data){
        const newNode= new Node(data);
        if(this.head===null){
            this.head=this.tail=newNode;
        }
        else{
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.size++;
    }


    deleteOldestTweet(){
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


    deleteAtStart() {
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


    
    deleteTweetAtIndex(index){
        if (index < 0 || index >= this.size) {
            console.log("invalid index");
            return;
        }
        if (index == 0) {
            this.deleteAtStart();
            return;
        }
        if (index == this.size - 1) {
            this.deleteOldestTweet();
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
        let result = [];
        let temp = this.head;
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" → "));
    }

    viewBackward() {
        let result = [];
        let temp = this.tail;
        while (temp) {
            result.push(temp.data);
            temp = temp.prev;
        }
        console.log(result.join(" → "));
    }


}


//TESTING 

const tweet= new DoublyLinkedList();
tweet.postTweet("hello");
tweet.postTweet("DSA Day 40");
tweet.postTweet("linked lists are fun");
tweet.viewForward();
tweet.deleteTweetAtIndex(1);
tweet.viewForward();
tweet.deleteOldestTweet();
tweet.viewForward();
tweet.viewBackward();