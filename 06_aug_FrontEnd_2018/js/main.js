$(document).ready(function(){
    // $('h1').myPlugin();
    // $('h1').myPlugin2();
    $('h1').styleElement({
        text: 'Hello World',
        color: 'green',
        fontSize: '30px',
        backgroundColor: '#ccc'

    })
    
    // Worker
    let worker = new Worker('js/work.js');
    worker.postMessage('Hello My Worker');
    worker.addEventListener('message', (event) => {
        console.log(event.data);
        worker.terminate();
        
    })
})

