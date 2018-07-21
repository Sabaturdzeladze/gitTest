function time() {
  let hours = document.querySelector("#hours");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let date = new Date();
  hours.textContent = date.getHours();
  minutes.textContent = date.getMinutes();
  seconds.textContent = date.getSeconds();
}

let input = document.querySelector("#inp");
let result = 0;
input.addEventListener("input", event => {
  result = parseInt(event.target.value);
  changeTime(result)
});


function changeTime(second = 3) {
    let date = new Date();
    let rame = setInterval(() => {
    time();
    if (parseInt(seconds.textContent) - parseInt(date.getSeconds()) == second ){
        clearInterval(rame)
    }
  }, 1000);
}
