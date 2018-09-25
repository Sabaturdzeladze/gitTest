class Snake {
    constructor(coords, next = null, x, y, speed, radius) {
        this.coords = coords;
        this.next = next;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.radius = radius;
    }

    draw() {
        ctx.beginPath();
        // ctx.
    }
}

class SnakeList {
    constructor() {
        this.head = null;
    }

    insertFirst(coords) {
        this.head = new Snake(coords, this.head);
    }

    clear() {
        this.head = null;
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
}

module.exports = { Snake, SnakeList }; 