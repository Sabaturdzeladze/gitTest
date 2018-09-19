window.onload = function () {
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext('2d');

    // Pixel Methods
    // getImageData(x, y, width, height)
    // createImageData(width, height)
    // putImageData(imgData, dx, dy, x, y, width, height)


    let img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 150, 125, 300, 250);
        grayScale();
    }
    img.src = 'image.png';

    function grayScale() {
        let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = (pixels.data);
        
        for (let i = 0; i < data.length; i += 4) {
            // console.log(`Red - ${data[i]}; Green - ${data[i + 1]}; Blue ${data[i+2]}`);
            const grey = data[i] * 0.4 + data[i + 1] * 0.49 + data [i + 2] * 0.11;
            data[i] = grey;
            data[i + 1] = grey;
            data [i + 2] = grey;
        }

        ctx.putImageData(pixels, 0, 0)
    }
}