let wrapper = $('#wrapper')
let arr = [];
for (let i = 1; i <= 150; i++){
    arr.push(i);
}

function createNumbers(arr){
    wrapper.html('')
    for (let item of arr){
        let div = document.createElement('div');
        div.textContent = item;
        wrapper.append(div);
    }
    let divs = document.querySelectorAll('#wrapper div')
    divs.forEach(item => {
    item.addEventListener('click', (e) => {
        index = arr.indexOf(parseInt(e.target.textContent));
        e.target.remove();
        arr.splice(index, 1);
        createNumbers(arr);
    })
})
}
createNumbers(arr);

function compareDescending(){
    arr.sort(function(a, b){
        return a - b;
    })
    createNumbers(arr.reverse());
}


function compareAscending(){
    arr.sort(function(a, b){
        return a - b;
    })
    createNumbers(arr);
}

$('#byAscending').on('click', compareAscending);
$('#byDescending').on('click', compareDescending);

function shuffle() {
    for(let i = 0; i < arr.length; i++){
        let current = Math.floor(Math.random() * i + 1);
        [arr[i], arr[current]] = [arr[current], arr[i]];
    }
  
    createNumbers(arr);
}
$('#shuffle').on('click', shuffle)