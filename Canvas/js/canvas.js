let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, 0.5)'
// c.fillRect(100, 100, 100, 100) // creating rectangle
// c.fillStyle = 'rgba(0, 0, 255, 0.5)'
// c.fillRect(400, 100, 100, 100) // creating rectangle
// c.fillStyle = 'rgba(0, 255, 0, 0.5)'
// c.fillRect(300, 300, 100, 100) // creating rectangle

// // creating lines
// c.beginPath() // starting path
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = 'blue'; // coloring lines
// c.stroke(); // to show drawn lines

// // Arc / Circle
// // c.beginPath(); // seperating lines, if not used lines would touch circle;
// // c.arc(300, 300, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = 'red';
// // c.stroke();


// // circles
// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let red = Math.random() * 255;
//     let green = Math.random() * 255;
//     let blue = Math.random() * 255;
//     let opa = Math.random()
//     c.beginPath(); 
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${opa})`;
//     c.stroke();
// }

let mouse = {
    x: undefined,
    y: undefined
}

let maxRadius = 40;
let minRadius = 2;

let colorArray = ['#010A26', '#011640', '#B6D6F2', '#FFFFFF', '#E83338']

// window.addEventListener('mousemove', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;

// })

// window.addEventListener('resize', function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     init();
// })


function Ball(x, y, dy, radius, color) {
    this.x = x;
    this.y = y;
    // this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // this.minRadius = radius;
    // this.color = colorArray[Math.floor(Math.random() * (colorArray.length))];
    this.color = color;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = `blue`;
        c.fillStyle = this.color;
        c.stroke();
        c.fill(); // circle color
    }

    this.update = function () {
        // #region bouncing and hovering
        // if (this.x > innerWidth - this.radius || this.x - this.radius < 0) {
        //     this.dx = -this.dx;
        // }

        // if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        //     this.dy = -this.dy
        // }
        // this.x += this.dx;
        // this.y += this.dy;

        // //interactivity
        // if (mouse.x - this.x < 50 && mouse.x - this.x > -50
        //     && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        //     if (this.radius < maxRadius) {
        //         this.radius += 1;
        //     }
        // } else if (this.radius > this.minRadius) {
        //     this.radius -= 1;
        // }
        // #endregion

        if (this.y + this.radius > canvas.height){
            this.dy = -this.dy;
        }
        this.y += this.dy 
        this.draw()
    }
}


let circleArray = [];
var ball;
function init() {
    ball = new Ball(canvas.width / 2, canvas.height / 2, 2, 30, 'red')
    // circleArray = [];
    // for (let i = 0; i < 1000; i++) {
    //     let radius = Math.random() * 3 + 1;
    //     let x = Math.random() * (innerWidth - radius * 2) + radius;
    //     let y = Math.random() * (innerHeight - radius * 2) + radius;
    //     let dx = (Math.random() - 0.5) * 2;
    //     let dy = (Math.random() - 0.5) * 2;
    //     circleArray.push(new Circle(x, y, dx, dy, radius))
    // }
}


// Moving circles

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    ball.update();
    
}
init()
animate();