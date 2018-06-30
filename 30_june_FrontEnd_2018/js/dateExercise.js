function getSecondsTo() {
    let day = new Date();
    let nextDay = new Date();
    nextDay.setDate(day.getDate()+1);
    nextDay.setHours(0,0,0,0);

    return Math.floor((nextDay.getTime() - day.getTime())/1000);
}
console.log(getSecondsTo());
