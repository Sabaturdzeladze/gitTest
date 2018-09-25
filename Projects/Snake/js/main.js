// let game = require('./snake.js');
// let SnakeList = game.SnakeList;
// let Snake = game.Snake;

// #region snake.js
class Snake {
    constructor(coords, next = null, speed, width, height) {
        this.coords = coords;
        this.next = next;
        // this.x = x;
        // this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.beginPath();
        ctx.fillRect(this.coords[0], this.coords[1], this.width, this.height);
        ctx.closePath();
    }
}

class SnakeList {
    constructor() {
        this.head = null;
    }

    insertLast(data, speed, width, height) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Snake(data, null, speed, width, height);
        } else {
            // The chain is empty!
            this.head = new Snake(data, null, speed, width, height);
        }
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

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    draw(part) {
        ctx.beginPath();
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
        this.foreach((part, index) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            part.coords[1] += part.speed;
            this.createSnake()
        })
        return 'MoveDown';
    }

    moveRight() {
        const last = this.getLast();
        if (last.coords[1] <= canvas.height){
            this.foreach((part, index) => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                part.coords[0] += part.speed
                this.createSnake();
            })

        }
    }
}
// #endregion

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let snake = new SnakeList();
// create snake, 5 rectangles;
let x = 15;
let y = 15;
for (let i = 0; i < 5; i++) {
    snake.insertLast([x, y], 2, 15, 15);
    y += 16;
}
snake.createSnake();
let state = undefined;
function animate() {
    requestAnimationFrame(animate);
    
    if (snake.getLast().coords[1] + snake.getLast().height <= canvas.height ){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        state = snake.moveDown()
    }

    addEventListener('keydown', (event) => {
        // console.log(event);
        if (event.key === 'ArrowDown' || snake.getLast().coords[1]) {
            if ((state !== 'MoveDown' || state !== 'MoveUp')) {
                requestAnimationFrame(snake.moveDown)
            }
        }
        else if (event.key === 'ArrowRight') {
            if ((state !== 'MoveRight' || state !== 'MoveLeft') && state === 'MoveDown') {
                window.cancelAnimationFrame(snake.moveDown())
                requestAnimationFrame(snake.moveRight)
            }
        }
    })
}
animate();