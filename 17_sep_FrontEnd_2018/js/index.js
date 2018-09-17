/* 

if (Modernizr.canvas) {
    supported
} else {
    // bad
}

*/

window.onload = function() {
    let canvas = document.querySelector("#myCanvas");
    let context = canvas.getContext('2d')
    
    context.fillStyle = 'red';
    context.strokeStyle='black';
    
    // fillRect(x, y, width, height);
    // context.fillRect(10, 20, 200, 100);
    context.rect(10, 20, 200, 100);
    context.fill()
    context.stroke()
    
}