window.onload = function () {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');
    
    const scores = [100, 40, 51, 78, 90, 85];

    const width = 50;
    let currentX = 0;
    // let currentY = 0;
    let base = 200;

    // ctx.translate(360, 200);
    // ctx.rotate(1 * Math.PI);

    ctx.fillStyle = 'seagreen';

    scores.forEach((el, index) => {
        let h = el;
        let y = canvas.height - h;

        ctx.fillRect(currentX, y, width, h)
        currentX += width + 10;

    })
    
    
}