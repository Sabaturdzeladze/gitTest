if (localStorage.getItem('users') !== null){
    let json = JSON.parse(localStorage.getItem('users'))
    json.forEach(element => {
        generate(element);
    })
    let remove = document.querySelectorAll('span')
    remove.forEach(element => {
        element.addEventListener('click', removeEvent)
    })

}else {
fetch('https://jsonplaceholder.typicode.com/users')
.then( response => response.json() )
.then( json => {
    // console.log(json);
    localStorage.setItem('users', JSON.stringify(json));
    json.forEach(element => {
        generate(element);
    });
    let remove = document.querySelectorAll('span')
    remove.forEach(element => {
        element.addEventListener('click', removeEvent)
    })
} )
.catch( err => console.log(err) );

}

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

function removeEvent(e) {
    let arr = JSON.parse(localStorage.getItem('users'))
    let index = arr.map(function(e) { return e.name; }).indexOf(e.target.parentElement.firstChild.textContent);

    arr.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(arr));

    e.target.parentElement.remove();
}

function editEvent(e){
    let arr = JSON.parse(localStorage.getItem('users'))
    let index = arr.map(function(e) { return e.name; }).indexOf(e.target.parentElement.firstChild.nextSibling.textContent);

    
}