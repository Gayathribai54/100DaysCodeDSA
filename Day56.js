

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop(element) {
        return this.items.pop(element);
    }
    peek() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }

}

class DailyTemperature {
    constructor(temp) {
        this.temp = temp;
        this.result = new Array(temp.length).fill(0);
        this.stack = new Stack();
    }
    calculate() {
        for (let i = 0; i < this.temp.length; i++) {
            while (!this.stack.isEmpty() && this.temp[i] > this.temp[this.stack.peek()]) {
                const prevIndex = this.stack.pop();
                this.result[prevIndex] = i - prevIndex;
            }
            this.stack.push(i)
        }
        return this.result;
    }
    display() {
        console.log("Temperatures:", this.temp)
        console.log("Days to wait for warmer temp:", this.result)
    }

}


const day1 = new DailyTemperature([73, 74, 75, 71, 69, 72, 76, 73]);
day1.calculate();
day1.display();

const day2 = new DailyTemperature([30, 40, 50, 60]);
day2.calculate();
day2.display();



//output
// Temperatures: [
//   73, 74, 75, 71,
//   69, 72, 76, 73
// ]
// Days to wait for warmer temp: [
//   1, 1, 4, 3,
//   2, 1, 0, 0
// ]
// Temperatures: [ 30, 40, 50, 60 ]
// Days to wait for warmer temp: [ 1, 1, 1, 0 ]