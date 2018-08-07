if (localStorage.getItem('users') !== null){
    let json = JSON.parse(localStorage.getItem('users'))
    json.forEach(element => {
        generate(element);
    })
    
    addEvents();

}else {
fetch('https://jsonplaceholder.typicode.com/users')
.then( response => response.json() )
.then( json => {
    localStorage.setItem('users', JSON.stringify(json));
    json.forEach(element => {
        generate(element);
    });

    addEvents();

} )
.catch( err => console.log(err) );

}

// generate html
function generate(element){
    let wrapper = document.createElement('div');
    
    let remove = document.createElement('span');
    remove.textContent = 'remove';
    let edit = document.createElement('i');
    edit.textContent = 'edit';
    
    let name = document.createElement('h2');
    name.textContent = element.name
    let eMail = document.createElement('p');

    eMail.textContent = element.email;
    document.body.appendChild(wrapper);
    wrapper.appendChild(name);
    wrapper.appendChild(eMail);
    wrapper.appendChild(remove);
    wrapper.appendChild(edit);
}

// remove 
function removeEvent(e) {
    let arr = JSON.parse(localStorage.getItem('users'))
    let firstChildElem = e.target.parentElement.firstChild
    let index = arr.map(function(e) { return e.name; }).indexOf(firstChildElem.textContent);
    
    arr.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(arr));
    
    e.target.parentElement.remove();
}

// edit
function editEvent(e){
    let arr = JSON.parse(localStorage.getItem('users'))
    let firstChildElem = e.target.parentElement.firstChild
    let index = arr.map(function(e) { return e.name; }).indexOf(firstChildElem.textContent);
    let newName = prompt("Enter Name");
    let newEmail = prompt("Enter email");
    arr[index].name = newName;
    arr[index].email = newEmail;
    localStorage.setItem('users', JSON.stringify(arr));

    firstChildElem.textContent = newName;
    firstChildElem.nextSibling.textContent = newEmail;   
}


function addEvents(){
    let remove = document.querySelectorAll('span')
    remove.forEach(element => {
        element.addEventListener('click', removeEvent)
    })
    let edit = document.querySelectorAll('i')
    edit.forEach(element => {
        element.addEventListener('click', editEvent)
    });
}