let Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log(`Saving Task: ${this.name}`);
}

let myTask = new Task ('I have to learn JS')
myTask.complete()
myTask.save()

let decoratedMyTask = new Task('Decorated Task')

decoratedMyTask.priority = 2;
decoratedMyTask.notify = function(){
    console.log(`Notifying important people!..`);
}

decoratedMyTask.complete();
decoratedMyTask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}

decoratedMyTask.save();