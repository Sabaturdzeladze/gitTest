let count = 0;
function createCalendar(year, month) {
    let date = new Date(year, month)
    let day = date.toString().split(" ")[0].toUpperCase();
    let weekDays = document.querySelectorAll("th");
    let weekNums = document.querySelectorAll("td");
    let lastDay = new Date(year, month + 1, 0)
    if (count != 0){
        weekNums.forEach( (element) => {
            element.textContent = "";
        } )
    }
    // weekDays.every(function (element, index) {
    for(let k = 0; k < weekDays.length; k++){
        if (day.includes(weekDays[k].textContent) ){
            weekNums[k].textContent = date.getDate();
            for (let i = k; i < weekNums.length; i++){
                if (parseInt(weekNums[i].textContent) == lastDay.getDate()){
                    break;
                }
                date.setDate(date.getDate() + 1)
                weekNums[i + 1].textContent = date.getDate();
            }
            // debugger
            count++;
            break;
        }
    };
}

createCalendar(2018, 6);