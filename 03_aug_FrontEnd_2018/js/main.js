$(document).ready( function() {

    $('#loadBtn').click(function(){

        // $('#myDiv').load('templates/template.html #small');

        // $('#myDiv').load('templates/template.html', function(response, status, xhr){

            // let xhr = new XMLHttpRequest()

            // Fetch API

            // console.log(xhr);

            // console.log(status);

            // console.log(response);

        //     if( status === 'error'){
        //         alert(xhr.statusText);
        //     }

        let url = 'https://jsonplaceholder.typicode.com/users'

        // $.getJSON(url, function(data){
        //     console.log(data);
        //     $("#myDiv").append( data.map(el => {
        //         return `<h1>${el.name}</h1>`;
        //     }).join(''))            
        // })


        // Ajax Call
        // Ajax Calls = .load(), .get(), .getJSON(), .post(), .ajax()
        // JSON, XML, HTML

        $.ajax({
            url, 
            data: null,
            method: 'get',
            dataType: 'json',
            success(data, status, xhr){
                // console.log(data);
                $("#myDiv").append( data.map(el => {
                    return `<h1>${el.name}</h1>`;
                }).join(''));
            },
            error(xhr, status, error){
                console.log(error);
            }
        })

        // })
        // let request;

        // if( window.XMLHttpRequest ) {
        //     request = new XMLHttpRequest();
        // } else if( window.ActiveXObject ){

        // }

        // request.addEventListener('progress', progressFunc);
        // request.addEventListener('load', completed)
        // request.addEventListener('error', errorFunc);
        // request.addEventListener('abort', cancelFunction)

        // request.onreadystatechange = function(){
        //     if( request.readyState == XMLHttpRequest.DONE){
        //         console.log(request.responseText); 
        //     }
        //     else {
        //         console.log("Request - ", request.readyState);
        //     }
        // }

        // function progressFunc(){
        //     console.log('Progress Function')
        // }
        // function errorFunc(){
        //     console.log('Error Function')
        // }
        // function cancelFunction(){
        //     console.log('Cancel Function')
        // }
        // function completed(){
        //     console.log('Completed Function')
        // }

        // request.open("GET", 'templates/template.html', true)
        // request.send(null);
    });

});