
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class circularLinked {
    constructor(data) {
        this.head = null;
        this.tail = null;
    }



    AddNode(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    showNetwork() {
        let result = [];
        if (!this.head) return result;
        let current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        }
        while (current !== this.head);
        return result;
    }



    passToken(k){
        if(!this.head) return;
        let current=this.head;
        for(let i=0; i<k; i++){
            console.log("Token at:"   +   current.data);
            current=current.next;
        }
    }







}


let computers= new circularLinked()
computers.AddNode("COMPUTER A");
computers.AddNode("COMPUTER B");
computers.AddNode("COMPUTER C");
console.log(computers.showNetwork().join("->"));
computers.passToken(6)