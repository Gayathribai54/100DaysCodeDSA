

 //Day 39 challenge 💥




class Node{
    constructor(data){
        this.data= data;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
        this.current=null;
    }

    OpenNewTabEnd(data){

        const newNode = new Node(data);
        if(this.head===null){
            this.head=this.tail=this.current=newNode;
        }
        else{
            newNode.prev= this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
            newNode.next=null;
        }
        this.size++;
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

    

    openNewTabAtPosition(index, data) {
        if (index <= 0) {
            this.addAtStart(data);
            if (!this.current) this.current = this.head;
            return;
        }
        if (index >= this.size) {
            this.OpenNewTabEnd(data);
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


    deleteAtEnd() {
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



    closeTabAtPosition(index) {
        if (index < 0 || index >= this.size) {
            console.log("invalid index");
            return;
        }
        if (index == 0) {
            this.deleteAtStart();
            return;
        }
        if (index == this.size - 1) {
            this.deleteAtEnd();
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




    moveNextTabForward(){
        if(!this.current){
            return null;
        }
        this.current = this.current.next ? this.current.next : this.head;
        return this.current;
    }

    moveNextTabBackward(){
        if(!this.current){
            return null;
        }
        this.current = this.current.prev ? this.current.prev : this.tail;
        return this.current;
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


//testing 

const browserTabs = new DoublyLinkedList();

browserTabs.OpenNewTabEnd("Google");
browserTabs.OpenNewTabEnd("YouTube");
browserTabs.OpenNewTabEnd("GitHub");
browserTabs.openNewTabAtPosition(1, "LinkedIn");

browserTabs.viewForward();           // Google → LinkedIn → YouTube → GitHub
browserTabs.closeTabAtPosition(2);   // Remove YouTube
browserTabs.viewForward();           // Google → LinkedIn → GitHub

console.log(browserTabs.moveNextTabForward().data); // LinkedIn
console.log(browserTabs.moveNextTabBackward().data); // Google

browserTabs.viewBackward();  