window.onload = function() {
    let canvas = document.querySelector("#myCanvas");
    let context = canvas.getContext('2d')

    context.strokeStyle = 'red';
    context.lineWidth = 10;

    context.beginPath(); // begin painting
    context.moveTo(150, 20);
    context.lineTo(75, 200);
    context.lineTo(225, 200);
    context.lineTo(150, 20);
    
    // context.lineJoin = 'miter';
    context.lineTo(250, 20);
    context.lineCap = 'round';
    
    context.fillStyle = 'black';
    context.fill()  // styles just now with black background

    context.closePath();
    context.stroke()
    
}