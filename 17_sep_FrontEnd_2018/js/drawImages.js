let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext('2d');
window.onload = function () {

    let img = new Image();
    img.onload = function(){
        drawImage(img);
    }
    img.src = 'image.png';
}

function drawImage(img){
    let destX = 10;
    let destY = 20;

    let destWidth = 212;
    let destHeight = 212;

    context.drawImage(img, destX, destY, /* destWidth, destHeight */)

}

function showCanvasAsImage(){
    let dataUrl = canvas.toDataURL();
    window.open(dataUrl, 'Canvas As Image', 'width=300, height=300'); 
}