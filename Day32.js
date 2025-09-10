class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class BrowserHistory {

    head = null;
    current = null;

    visit(url) {
        if (this.head === null) {
            let newNode = new Node(url);
            this.head = newNode;
            this.current = newNode;
        }
        else {
            this.current.next = null;
            let newNode = new Node(url);
            this.current.next = newNode;
            this.current = newNode;
        }
    }

    back() {
        if (this.current == this.head) {
            console.log("no previous page");
            return;
        }
        let prev = this.head;
        while (prev.next != this.current) {
            prev = prev.next;
        }
        this.current = prev;
    }

    forward() {
        if (this.current.next === null) {
            console.log("No forward page");
            return;
        }
        this.current = this.current.next;
    }
    showCurrent() {
        console.log(this.current.data);
    }


}




const New= new BrowserHistory;
New.visit("google");
New.visit("github");
New.visit("linkdin");

New.back();
New.showCurrent();

New.forward();
New.showCurrent();

New.visit("stackoverflow");
New.showCurrent();

New.back();
New.showCurrent();

New.back();
New.showCurrent();

New.back();
New.showCurrent();


New.forward();
New.showCurrent();