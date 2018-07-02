// Calculates the average of the student
let average = function(){
    let sum = 0;
    let count = 0;    
    for (let key in this.mark){
        sum += this.mark[key];
        count++;
    }
    return (sum / count);
}

//  Creating Students as objects
let wayne = {           
    name: 'Wayne Rooney',
    mark: {
        'day1': 4,
        'day2': 0,
        'day3': 5,
        'day4': 5,
        'day5': 4
    },
    average,
}
let alex = {           
    name: 'Alex Ferguson',
    mark: {
        'day1': 5,
        'day2': 4,
        'day3': 5,
        'day4': 5,
        'day5': 4
    },
    average,
}
let owen = {           
    name: 'Owen Hargreaves',
    mark: {
        'day1': 4,
        'day2': 3,
        'day3': 5,
        'day4': 0,
        'day5': 4
    },
    average,
}
let rio = {           
    name: 'Rio Ferdinand',
    mark: {
        'day1': 4,
        'day2': 3,
        'day3': 0,
        'day4': 5,
        'day5': 4
    },
    average,
}
let michael = {           
    name: 'Michael Carrick',
    mark: {
        'day1': 4,
        'day2': 3,
        'day3': 5,
        'day4': 4,
        'day5': 4
    },
    average,
}
let wes = {           
    name: 'Wes Brown',
    mark: {
        'day1': 1,
        'day2': 3,
        'day3': 2,
        'day4': 3,
        'day5': 4
    },
    average,
}
let cristiano = {           
    name: 'Cristiano Ronaldo',
    mark: {
        'day1': 5,
        'day2': 4,
        'day3': 5,
        'day4': 5,
        'day5': 5
    },
    average,
}
let nani = {           
    name: 'Luis Nani',
    mark: {
        'day1': 4,
        'day2': 3,
        'day3': 5,
        'day4': 3,
        'day5': 4
    },
    average,
}
let patrice = {           
    name: 'Patrice Evra',
    mark: {
        'day1': 4,
        'day2': 3,
        'day3': 5,
        'day4': 5,
        'day5': 2
    },
    average,
}
let jaba = {           
    name: 'Jaba Lipartia',
    mark: {
        'day1': 0,
        'day2': 0,
        'day3': 0,
        'day4': 0,
        'day5': 0
    },
    average,
}

// Saving students in Array
let studentsArray = [wayne, alex, owen, rio, michael, wes, cristiano, nani, patrice, jaba]


// Date
// creating divs with the text of Days inside #dates div
function generateDays(start, num){
    for (let i = 0; i < num; i++){
        if (startDate.getDay() == 1 || startDate.getDay() == 3 || startDate.getDay() == 6){
            let dates = document.querySelector("#dates");
            let date = document.createElement("div");
            let arr = String(startDate).split(' ')
            let text = `${arr[0]} ${arr[1]} ${arr[2]}`
            date.textContent = text;
            dates.appendChild(date);        
        } 
        startDate.setDate(startDate.getDate()+1)
    }
}
let startDate = new Date('2018-04-30');
generateDays(startDate, 10)

// creating divs with students names + appending the #names div
function addStudentsNames(arr){
    let names = document.querySelector('#names');
    for (let student of arr){
        let name = document.createElement('div');       
        name.textContent = student.name;
        names.appendChild(name);
    }
}
addStudentsNames(studentsArray)


// adding students marks to #values div
function addStudentsMarks(arr){
    let parent = document.querySelector('#values');

    for (let stud of arr){
        let marks = document.createElement("div");
        marks.setAttribute('class', 'marks-wrapper');
        parent.appendChild(marks);
        for (let key in stud.mark){
            let marksValue = document.createElement("div");
            marksValue.textContent = stud.mark[key];
            marks.appendChild(marksValue);
        }
    }
}

addStudentsMarks(studentsArray)


// adding students averages in the table
function addAverages(arr){
    let parent = document.querySelector("#average");    
    for (let name of arr){
        let div = document.createElement('div');
        div.setAttribute('class', 'average');
        div.textContent = name.average();
        parent.appendChild(div);        
    }
}
addAverages(studentsArray);

function changeAverages (arr){
    let average = document.querySelectorAll(".average");
    let arr0 = [];
    for (let item of average){
        arr0.push(item);
    }
    // console.log(arr0);
    let arr1 = [];
    for (let k = 0; k < arr.length; k++){
        arr1[k] = arr[k].average()
    }
    // console.log(arr1);
    
    for (let i = 0; i < arr1.length; i++){
        arr0[i].textContent = arr1[i].toFixed(2); 
    }
}
// changeAverages(studentsArray)


//change Total average
function changeTotalAverage(){
    let average = document.querySelectorAll(".average");
    let arr0 = [];
    for (let item of average){
        arr0.push(Number(item.textContent));
    }
    debugger
    let totalAverage = document.querySelector("#total-average");
    let sum = 0;
    let count = 0;    
    for (let key of arr0){
        sum += key;
        count++;
    }
    let result = (sum / count).toFixed(2)
    totalAverage.textContent = result;
}


// Total days
function totalDays(){
    let dates = document.querySelector("#dates");
    let totalDays = document.querySelector("#total-days");
    totalDays.textContent = dates.childElementCount;
}

totalDays();


// Missed Lessons
function missedLessons(/* arr */){
    let missed = 0;
    // for (let name of arr){
    //     for (let key in name.mark){
    //         if (name.mark[key] == 0){
    //             missed++;
    //         }
    //     }
    // }
    let marks = document.querySelectorAll(".marks-wrapper div")
    let arr = [];
    let childArr = [];
    for (let item of marks){       
        arr.push(item)      
    }
    for (let i in arr){
        // debugger
        if(Number(arr[i].textContent) == 0){
            missed++;
        }
    } 

    let missedLessons = document.querySelector("#missed");
    missedLessons.textContent = missed;
}

missedLessons(/* studentsArray */);


// Total Average
function totalAverage(arr){
    let sum = 0;
    for (let name of arr){
        sum += name.average();
    }
    let average = document.querySelector("#total-average");
    average.textContent = (sum / arr.length).toFixed(2);        //rounds average to 2 decimals    
}
totalAverage(studentsArray);


// Total Students
function totalStudent(arr){
    let total = document.querySelector("#total-students");
    total.textContent = arr.length;
}
totalStudent(studentsArray)



// Events

let addDayEvent = document.querySelector("#add-day");
addDayEvent.addEventListener('click', function (){
    // let previousDay = document.querySelector("#dates:last-child");
    let previousDayDiv = document.querySelector("#dates");
    let previousDay = previousDayDiv.children[previousDayDiv.children.length - 1];
    let arr = previousDay.textContent.split(' ')
    arr = arr[2] + '-' + arr[1];
    previousDay = new Date(`2018-${arr}`);
    previousDay.setDate(previousDay.getDate() + 1)
    let count = 0;
    for (let i = 0; i < 3; i++){        // adding the next day
        if (count != 0){
            break;
        }
        if (previousDay.getDay() == 1 || previousDay.getDay() == 3 || previousDay.getDay() == 6){
            let dates = document.querySelector("#dates");               
            let date = document.createElement("div");
            let arr = String(previousDay).split(' ')    
            let text = `${arr[0]} ${arr[1]} ${arr[2]}`
            date.textContent = text;
            dates.appendChild(date);  
            count++;      
        } 
        previousDay.setDate(previousDay.getDate()+1)
    }

    // adding the grades
    for (let k = 0; k < studentsArray.length; k++) {
        studentsArray[k].mark[`${k}`] = 0;            // added new grade to all of my students (objects)  {1: 0}
        let marksWrapper = document.querySelectorAll(".marks-wrapper");
        let text = studentsArray[k].mark[`${k}`];
        let div = document.createElement("div");
        div.textContent = text;
        marksWrapper[k].appendChild(div);
    }
    console.log(studentsArray);
    
    styleZeros();
    totalDays();
    missedLessons(/* studentsArray */);
    // totalAverage(studentsArray);
    changeAverages(studentsArray)
    changeTotalAverage()
    // console.log(studentsArray[0].mark);
});


// Remove Day Event
let removeDay = document.querySelector("#remove-day");
removeDay.addEventListener('click', function(){
    let dates = document.querySelectorAll("#dates div");
    let parent = document.querySelector("#dates");
    parent.removeChild(dates[dates.length - 1]);
    let marks = document.querySelectorAll(".marks-wrapper")
    let arr = [];
    for (let item of marks){       // added marks-wrapper divs to a new arr
        arr.push(item)      
    }
    for (let i = 0; i < arr.length; i++){
        let son = arr[i].lastChild;
        arr[i].removeChild(son);    
    }
    styleZeros();
    totalDays();
    missedLessons();
    changeTotalAverage()
})


// Styling 0 valued days
function styleZeros(){
    let marks = document.querySelectorAll(".marks-wrapper div")
    let arr = [];
    let childArr = [];
    for (let item of marks){       
        arr.push(item)      
    }
    for (let i in arr){
        // debugger
        if(Number(arr[i].textContent) == 0){
            arr[i].style.backgroundColor = 'red';           
        }
    }    
}
styleZeros()
