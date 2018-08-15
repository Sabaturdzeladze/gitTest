let Task = function(data){
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user; 
    this.completed = data.completed;
}

let TaskService = (function(){
    return {
        complete(task){
            task.completed = true;
        },
        setCompleteDate(task){
            task.completeDate = new Date();
            console.log(`${task.name} completed on ${task.completeDate.toString()}`);
        },
        notifyCompletion(task, user){
            console.log(`Notifying  ${user} of the completion of ${task.name}`);
        },
        save(task){
            console.log(`saving Task: ${task.name}`);
        }
    }
})()

let TaskServiceWrapper = function (){
    let completeAndNotify = function(myTask){
        TaskService.complete(myTask)
        if ( myTask.completed ){
            TaskService.setCompleteDate(myTask)
            TaskService.notifyCompletion(myTask, myTask.user)
            TaskService.save(myTask)
        }
    }
}()

let myTask = new Task({
    name: 'MyName',
    priority: 1,
    project: 'Techub',
    user: 'Jigarsona',
    completed: false
})

// console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask);
// console.log(myTask);