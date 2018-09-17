window.onload = function() {
    let canvas = document.querySelector("#myCanvas");
    let context = canvas.getContext('2d');
    
//    context.strokeStyle = 'seagreen';
//    context.fillStyle = 'salmon';
   
//    let text = "Hello World!";

//    context.font = '40pt Arial';
//    context.fillText(text, 50, 50);
//    context.strokeText(text, 50, 50);
    

    // let fontSize = 10;

    // for (let i = 5; i <= 25; i+=5){
    //     let text = `Text ${fontSize}`
    //     context.font = `${fontSize}px Arial`;
    //     let y = context.measureText(text).width;
    //     context.fillText(text, 0, y);

    //     fontSize += 5;
    // }

    context.font = '30pt Arial'
    context.fillText('Some Text', 100, 50);

    context.save();

    context.translate(100, 300);
    context.rotate(-0.5 * Math.PI);

    let rText = 'Rotated Text';
    context.fillText(rText, 0, 0);
    context.restore();

    let rWidth = context.measureText(rText).width;
    context.fillText(`Text Width`, 100, rWidth + 120);

}