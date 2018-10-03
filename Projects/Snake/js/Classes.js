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

        let current = this.head;
        while (current) {
            if (!current.next) {
                return current;
            }
            current = current.next;
        }
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
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'black';
        ctx.rect(part.coords[0], part.coords[1], part.width, part.height);
        ctx.stroke();
        ctx.fill()
        ctx.closePath();

        ctx.fillStyle = 'blue';
        ctx.font = '30px Garamond';
        ctx.fillText(`Your score is ${score}`, canvas.width / 2, 30)
    }

    // forEach for linked lists
    foreach(fn) {
        let part = this.head;
        let current = 0
        while (part) {
            fn(part, current);
            current++;
            part = part.next;
        }
    }

    createSnake() {
        // foreach
        this.foreach((part) => {
            this.draw(part);
        })
    }

    // ------------- Moving -------------
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