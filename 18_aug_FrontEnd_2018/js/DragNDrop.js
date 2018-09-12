function dragStart(event){
    try{
        event.dataTransfer.setData('text/plain', event.target.id);
    }
    catch(error){
        event.dataTransfer.setData('text', event.target.id);
    }
}

function dropped(event){
    let id;
    cancel(event)

    try{
        id = event.dataTransfer.getData('text/plain');
    }catch(err){
        id = event.dataTransfer.getData('text');
    }

    event.target.appendChild(document.getElementById(id))
}

function cancel(event){
    if( event.preventDefault ) event.preventDefault();
    if (event.stopPropagation) event.stopPropagation();
    return false;
}

let img = document.getElementById('snapshot');
img.addEventListener('dragstart', dragStart, false);

let target = document.getElementById('target__container');
target.addEventListener('drop', dropped, false)
target.addEventListener('dragover', cancel, false)
target.addEventListener('dragenter', cancel, false)