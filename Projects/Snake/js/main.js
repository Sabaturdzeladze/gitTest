// let game = require('./snake.js');
// let SnakeList = game.SnakeList;
// let Snake = game.Snake;

// #region Classes
class Apple {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.coords = getRandomArr(snake, appleArray);
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.coords[0], this.coords[1], this.width, this.height);
    }

}

// #region snake.js
class Snake {
    constructor(coords, next = null, speed, width, height) {
        this.coords = coords;
        this.next = next;
        this.speed = speed;
        this.width = width;
        this.height = height;
    }
}

class SnakeList {
    constructor() {
        this.head = null;
    }

    insertLast(data, speed, width, height) {
        let last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Snake(data, null, speed, width, height);
        } else {
            // The chain is empty!
            this.head = new Snake(data, null, speed, width, height);
        }
    }

    insertFirst(coords, speed, width, height) {
        this.head = new Snake(coords, this.head, speed, width, height)
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    size() {
        let counter = 0;
        let part = this.head;

        while (part) {
            part = part.next;
            counter++;
        }
        return counter;
    }

    removeFirst() {
        if (!this.head) return;

        if (!this.head.next) {
            this.head = null;
            return;
        }
        this.head = this.head.next;
    }

    draw(part) {
        ctx.beginPath();
        ctx.fillStyle = 'black'
        ctx.fillRect(part.coords[0], part.coords[1], part.width, part.height);
        ctx.closePath();
    }

    foreach(fn) {
        let part = this.head;
        let current = 0
        while (part) {
            fn(part, current);
            current++;
            part = part.next;
        }
    }

    reverseForEach(fn) {
        let array = []
        this.foreach((part) => {
            array.push(part);
        })
        array = array.reverse();
        array.forEach((element) => {
            fn(element);
        })
    }

    createSnake() {
        // foreach
        this.foreach((part) => {
            this.draw(part);
        })
    }

    moveDown() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.removeFirst()
        let last = this.getLast();
        this.insertLast([last.coords[0], last.coords[1] + last.height], last.speed, last.width, last.height);
        this.createSnake()
    }

    moveRight() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.removeFirst()
        let last = this.getLast();
        this.insertLast([last.coords[0] + last.width, last.coords[1]], last.speed, last.width, last.height);
        this.createSnake()
    }

    moveUp() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.removeFirst()
        let last = this.getLast();
        this.insertLast([last.coords[0], last.coords[1] - last.height], last.speed, last.width, last.height);
        this.createSnake()
    }

    moveLeft() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.removeFirst()
        let last = this.getLast();
        this.insertLast([last.coords[0] - last.width, last.coords[1]], last.speed, last.width, last.height);
        this.createSnake()
    }
}
// #endregion

// #endregion
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let snake = new SnakeList();
let apQuantity = 5;

let appleArray = [];

for (let i = 0; i < apQuantity; i++) {
    let apple = new Apple(10, 10)
    appleArray.push(apple);
}

// create snake, 5 rectangles;
let x = 100;
let y = 100;
for (let i = 0; i < 4; i++) {
    snake.insertLast([x, y], 2, 10, 10);
    y += 10;
}
snake.createSnake();
let state = 'down';


// game

let count = 0;
function animate() {
    let gameLoop = requestAnimationFrame(animate);
    let last = snake.getLast();

    snake.foreach((part) => {
        if (part !== last) {
            if (part.coords[0] + part.width === last.coords[0] + last.width
                && part.coords[1] + part.width === last.coords[1] + last.width) {
                cancelAnimationFrame(gameLoop);
            }
        }
    })
    appleArray.forEach((apple, index) => {
        if (apple.coords[0] + apple.width === last.coords[0] + last.width
            && apple.coords[1] + apple.width === last.coords[1] + last.width) {
            switch (state) {
                case 'down':
                    snake.insertFirst([last.coords[0], last.coords[1] + last.height], last.speed, last.width, last.height)
                    break;
                case 'up':
                    snake.insertFirst([last.coords[0], last.coords[1] - last.height], last.speed, last.width, last.height)
                    break;
                case 'right':
                    snake.insertFirst([last.coords[0] + last.width, last.coords[1]], last.speed, last.width, last.height)
                    break;
                case 'left':
                    snake.insertFirst([last.coords[0] - last.width, last.coords[1]], last.speed, last.width, last.height)
                    break;
            }

            appleArray.splice(index, 1);
            appleArray.push(new Apple(apple.width, apple.height))
        }
    })


    // speed of the game (fps = fps / speed)
    if (++count < 5) {
        return;
    }
    count = 0;


    // problem
    let condition = last.coords[1] + last.height > canvas.height + 1||
    last.coords[1] /* - last.height */ < 0 || 
    last.coords[0] + last.width > canvas.width + 1||
    last.coords[0] /* - last.width */ < 0;
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (state === 'down') snake.moveDown();
    else if (state === 'right') snake.moveRight();
    else if (state === 'left') snake.moveLeft();
    else if (state === 'up') snake.moveUp();
    
    
    for (let item of appleArray) {
        item.draw();
    }
    if (condition) {
        console.log(last.coords[1] + last.height, canvas.height);
        cancelAnimationFrame(gameLoop)
    }
}


// Events
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' && (state !== 'down' && state !== 'up')) {
        state = 'down';
    }
    else if (event.key === 'ArrowRight' && (state !== 'right' && state !== 'left')) {
        state = 'right';
    }
    else if (event.key === 'ArrowLeft' && (state !== 'right' && state !== 'left')) {
        state = 'left';
    }
    else if (event.key === 'ArrowUp' && (state !== 'down' && state !== 'up')) {
        state = 'up';
    }
})
animate();


function getRandomArr(snake, appleArray) {
    let x = Math.floor(Math.random() * canvas.width - 10);
    let y = Math.floor(Math.random() * canvas.height - 10);

    let coords = []

    if (x % 10 === 0 && y % 10 === 0) {
        coords = [x, y];
    }
    else if (x % 10 !== 0 && y % 10 === 0) {
        x = (10 - x % 10) + x;
        coords = [x, y];
    }
    else if (x % 10 === 0 && y % 10 !== 0) {
        y = (10 - y % 10) + y;
        coords = [x, y];
    }
    else {
        x = (10 - x % 10) + x;
        y = (10 - y % 10) + y;
        coords = [x, y];
    }

    snake.foreach((part) => {
        if (coords[0] + 2 * part.width === part.coords[0] &&
            coords[1] + 2 * part.height === part.coords[1]) {
            coords = getRandomArr(snake, appleArray)
        }
    })

    appleArray.forEach(apple => {
        if (coords[0] + 2 * apple.width === apple.coords[0] &&
            coords[1] + 2 * apple.height === apple.coords[1]) {
            coords = getRandomArr(snake, appleArray);
        }
    })

    return coords;
}