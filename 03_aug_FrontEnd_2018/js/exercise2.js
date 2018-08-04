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
        let index = parseInt(e.target.textContent) - 1;
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

// $('#shuffle').on('click')
$('#byAscending').on('click', compareAscending);
$('#byDescending').on('click', compareDescending);

function shuffle() {
    // var currentIndex = arr.length, temporaryValue, randomIndex;
  
    // while (0 !== currentIndex) {
  
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex -= 1;
  
    //   temporaryValue = arr[currentIndex];
    //   arr[currentIndex] = arr[randomIndex];
    //   arr[randomIndex] = temporaryValue;
    // }

    for(let i = 0; i < arr.length; i++){
        let current = Math.floor(Math.random() * i + 1);
        [arr[i], arr[current]] = [arr[current], arr[i]];
    }
  
    createNumbers(arr);
}
$('#shuffle').on('click', shuffle)