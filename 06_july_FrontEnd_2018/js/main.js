function showSomething(title='Untitled', width=200, height=200, items=[]){
    console.log(`${title}, ${width}, ${height}, ${items}`);
}

showSomething('title', 150, 300, ['item1', 'item2'])

let options = {
    title: "my title",
    items: ['item1', "item2"]
}

function showSomething2({title='Untitled', width=200, height=200, items=[]}){
    console.log(`${title}, ${width}, ${height}, ${items}`);
}

showSomething2(options)


// Exercise
let user = {
    name: 'John',
    years: 30
}
let {name, years: age,} = user;
let {isAdmin: isAdmin} = user;
alert(name);
alert(age);
if (isAdmin == true){
    alert("true")
}else{
    alert("false")
}