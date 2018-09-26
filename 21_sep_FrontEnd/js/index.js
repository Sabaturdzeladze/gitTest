window.onload = () => {
    let canvas = document.querySelector('canvas')
    let ctx = canvas.getContext('2d');

    // generateImage();

    // function generateImage() {
    //     let height = canvas.height;
    //     let width = canvas.width;

    //     let pixels = ctx.createImageData(width, height);
    //     let centerX = width / 2;
    //     let centerY = height / 2;

    //     let currentPixelPos = 0;

    //     for (let y = 0; y < pixels.height; y++){
    //         for (let x = 0; x < pixels.width; x++){
    //             let xOffset = x - centerX;
    //             let yOffset = y - centerY;

    //             let d = Math.abs(xOffset) + Math.abs(yOffset);
    //             let t = Math.tan(d / 10);

    //             let r = t * 255;
    //             let g = 100 + t * 10;
    //             let b = 255 + t * 20;

    //             pixels.data[currentPixelPos++] = Math.max(0, Math.min(255, r));
    //             pixels.data[currentPixelPos++] = Math.max(0, Math.min(255, g));
    //             pixels.data[currentPixelPos++] = Math.max(0, Math.min(255, b));
    //             pixels.data[currentPixelPos++] = Math.random() * 1000;
    //         }
    //     }
    //     ctx.putImageData(pixels, 0, 0)
    // }

    let height = canvas.height;
    let width = canvas.width;
    class Ball {
        constructor(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            ctx.fillStyle = 'red';
            ctx.fill();
        }

        update() {
            this.draw();
        }
    }

    
    let ball = new Ball(100, 200, 3, 3, 30);
    ball.update();
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ball.update();
        addEventListener('keydown', (event) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            if (event.key == 'ArrowDown'){
                if (ball.y + ball.radius < height){
                    ball.y += ball.dy;
                }
            }
            else if (event.key === 'ArrowLeft'){
                if (ball.x - ball.radius > 0 ) ball.x -= ball.dx;
            }
            else if (event.key === 'ArrowRight'){
                if (ball.x + ball.radius < width) ball.x += ball.dx;
            }
            else if (event.key === 'ArrowUp'){
                if (ball.y - ball.radius > 0){
                    ball.y -= ball.dy;
                }
            }
            ball.update()
        })
    }
    animate()
}
