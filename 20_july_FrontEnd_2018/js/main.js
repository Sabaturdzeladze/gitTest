let wrapper = document.body.firstElementChild;

let children = Array.from(wrapper.children);
children.forEach(function(element) {
  for (let i = 0; i < children.length; i++) {
    let div = document.createElement("div");
    element.appendChild(div);
  }
});

children.forEach( function (element) {
    let child = Array.from(element.children)
    child[2].style.backgroundColor = "red";
    child[3].style.backgroundColor = "red";
} )

function yellow(){
    children[2].style.backgroundColor = "yellow"
    children[3].style.backgroundColor = "yellow"
}

yellow()

function diagonal (){
    debugger
    let chidElements1 = Array.from(children[2].children)
    let chidElements2 = Array.from(children[3].children)
    chidElements1[2].style.backgroundColor = "yellow";
    chidElements2[3].style.backgroundColor = "yellow";
}

diagonal()