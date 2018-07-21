let divInput = document.querySelector("#styling");

divInput.addEventListener("input", function (e) {
    let fontSize = document.querySelector("#size").value
    let color = document.querySelector("#color").value
    let position = document.querySelector("#position").value

    let value = e.target.value;
    let choose = document.querySelector(`#${value}`);
    
    choose.style.fontSize = fontSize;
    choose.style.color = color;
    choose.style.textAlign = position;
} );

