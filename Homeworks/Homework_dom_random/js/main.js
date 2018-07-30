function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function changeColor(){
    let num = randomNum(1, 20);
    console.log(num);
    let divs = document.querySelectorAll(".wrapper div");
    divs.forEach(element => {
        if (parseInt(element.textContent) == num){
            if (!element.id) {
                element.id = "id1";
            }
            else if (element.id =="id1"){
                element.id = "id2";
            }
            else if(element.id =="id2"){
                element.id = "id3";
            }
            else if (element.id == "id3"){
                element.removeAttribute("id");
            }
        }
    });
}

document.querySelector("button").addEventListener("click", changeColor);