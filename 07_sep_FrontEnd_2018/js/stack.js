/* 
    push/pop/peek
*/

class Stack {
    constructor (){
        this.tasks = {};
        this.length = 0;
    }

    push(task){
        this.tasks[this.length] = task;
        this.length++;
    }

    pop(){
        if (length) return undefined;
        this.length--;
        let task = this.tasks[this.length];
        delete this.tasks[this.length];
        return task;
    }

    isEmpty(){
        return length === 0;
    }

    size(){
        return this.length;
    }

    peek(){
        return this.tasks[this.length - 1];
    }

    forEach(fn){
        for (let item in this.tasks){
            fn(this.tasks[item], item, this.tasks);
        }
    }

}

let myStack = new Stack();
myStack.push('Hello');
myStack.push('World');
myStack.push('!...');

console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.isEmpty());
myStack.forEach((str, index, tasks) => console.log());
