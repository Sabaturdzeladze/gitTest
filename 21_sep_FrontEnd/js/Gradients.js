window.onload = () => {
    let canvas = document.querySelector('canvas')
    let ctx = canvas.getContext('2d');

    let borderColor = '#cBcBcB';

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    // ctx.beginPath();
    // let gradient = ctx.createLinearGradient(centerX, 20, centerX, 200);

    // gradient.addColorStop(0, '#fff')
    // gradient.addColorStop(1, '#ddd')
    // ctx.fillStyle = gradient;
    
    // ctx.rect(20, 20, canvas.width - 40, canvas.height - 30)
    // ctx.fill()
    // ctx.strokeStyle = borderColor;
    // ctx.stroke();
    // ctx.closePath();

    ctx.beginPath();
    let gradient = ctx.createRadialGradient(centerX, centerY / 1.2, 20, 100, 50, 10)
    gradient.addColorStop(0, 'seagreen');
    gradient.addColorStop(1, 'red');

    ctx.fillStyle = gradient;
    ctx.arc(centerX, centerY / 1.2, 20, 0, 2 * Math.PI, false);
    ctx.fill()
    ctx.stroke()
    
}