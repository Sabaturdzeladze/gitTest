class Snake {
    constructor(coords, next = null) {
        this.coords = coords;
        this.next = next;
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