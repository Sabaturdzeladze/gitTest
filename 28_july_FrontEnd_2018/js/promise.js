window.onload = () => {
    let usersEndPoint = `https://jsonplaceholder.typicode.com/users`

fetch(usersEndPoint, {
    method: `get`,
})
.then( response => {
    if (response.status == 200){
        return response.json();
    }
} )
.then( usersList => {
    document.body.innerHTML = usersList.map( user => {
        // onclick="showDetails(${user.id})
        return `<div data-user-id="${user.id}"">
            <h2>${user.name} <small>id : ${user.id}</small></h2>
        </div>`;
    } ).join('')
    let users = document.querySelectorAll(`[data-user-id]`);
    users.forEach( user => {user.addEventListener('click', (event) => {
        console.log(`I am an event ${event.target}`);
        let userDiv = event.target;
        if (userDiv.tagName.toLowerCase() !=`div`){
            while ( userDiv.tagName.toLowerCase() != `div`){
                userDiv = userDiv.parentNode
            }
        }
        let userId = user.dataset.userId;
        showDetails(userId)
        console.log(userDiv.dataset);
        
    } )
} )
})
.catch( err => console.log(`Error - ${err.message}`) )


function showDetails(userId) {
   fetch(`${usersEndPoint}/${userId}`, {
       method: "get"
   })
   .then((response) =>{
       if(response.status === 200){
           return response.json();
       }
   })
   .then(userDetail => {
        document.body.innerHTML = `
        <div class="user__detail--item">   
            <h2>${userDetail.name}</h2>
            <h3>home - ${userDetail.home}</h3>
            <h3>phone - ${userDetail.phone}</h3>
            <h3>email - ${userDetail.email}</h3>
        </div>
        `
        
   })
   .catch((error) => {
       console.log(`Error  - ${error.message}`)
   })
    }
}