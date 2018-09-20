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

let gravity = 1;
let friction = 0.99;

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

addEventListener('click', () => {
    init()
})

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colorArray[Math.floor(Math.random() * colors.length)];
}

function getDistance (x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}


function Circle(x, y, /* dx, dy, */ radius, color) {
    this.x = x;
    this.y = y;
    // this.dx = dx;
    // this.dy = dy;
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
        c.stroke();
        c.closePath()
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
        // if (this.y + this.radius + this.dy > canvas.height) {
        //     this.dy = -this.dy * friction;
        // } else {
        //     this.dy += gravity;
        // }

        // if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
        //     this.dx = -this.dx;
        // }

        // this.y += this.dy
        // this.x += this.dx
        this.draw()
    }
}


// let circleArray = [];
// var ball;
// var ballArray = [];
let circle1, circle2
function init() {
    // circleArray = [];
    // for (let i = 0; i < 1000; i++) {
    //     let radius = Math.random() * 3 + 1;
    //     let x = Math.random() * (innerWidth - radius * 2) + radius;
    //     let y = Math.random() * (innerHeight - radius * 2) + radius;
    //     let dx = (Math.random() - 0.5) * 2;
    //     let dy = (Math.random() - 0.5) * 2;
    //     circleArray.push(new Circle(x, y, dx, dy, radius))
    // }

    // ballArray = [];

    // for (let i = 0; i < 500; i++) {
    //     let radius = randomIntFromRange(8, 20);
    //     let x = randomIntFromRange(radius, canvas.width - radius)
    //     let y = randomIntFromRange(0, canvas.height - radius)
    //     let dx = randomIntFromRange(-2, 2)
    //     let color = randomColor(colorArray)
    //     ballArray.push(new Ball(x, y, dx, 2, radius, color))
    // }


    //collision
    circle1 = new Circle(300, 300, 100, 'black');
    circle2 = new Circle(undefined, undefined, 30, 'red');
}


// Moving circles

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    // ball.update();

    // for (let ball of ballArray) {
    //     ball.update()
    // }

    //collision
    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) <= circle1.radius + circle2.radius){
        circle1.color = 'red';
    }
    else {
        circle1.color = 'black';
    }
}
init()
animate();
