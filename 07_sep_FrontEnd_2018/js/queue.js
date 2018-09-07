//FIFO

class Queue {
    constructor(){
        this.tasks = [];      
    }

    dequeue(){
        return this.tasks.shift();
    }

    enqueue(task){
        this.tasks.push(task);
    }

    firstElement(){
        return this.tasks[0];
    }

    log(){
        console.log(this.tasks);
    }
}


class PQueue {
    constructor(){
        this.tasks = [];      
    }

    dequeue(){
        return this.tasks.shift();
    }

    enqueue(task){
        if (this.isEmpty()){
            this.tasks.push(task);
        } else {
            let inserted = false;

            for (let i in this.tasks){
                if ( task[1] < this.tasks[i][1] ){
                    this.tasks.splice(i, 0, task);
                    inserted = true;
                    break;
                }
            }

            if (!inserted) {

            }
        }
    }

    firstElement(){
        return this.tasks[0];
    }

    isEmpty(){
        return this.tasks.length === 0;
    }

    log(){
        console.log(this.tasks);
    }
}

let myQueue = new Queue();
myQueue.enqueue('1')
myQueue.enqueue('3')
myQueue.enqueue('5')
myQueue.enqueue('7')
myQueue.log()
console.log(myQueue.firstElement());
myQueue.dequeue()
console.log(myQueue.firstElement());
myQueue.log()