function LinkedList () {
    let head = null;
    let length = 0;

    let Node = function(value){
        this.value = value;
        this.next = null;
    }

    this.length = () => length;
    this.head = () => head;

    // Node add
    this.add = (value) => {
        let node = new Node(value)
        if (!head) {
            head = node;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length++;
    }

    // Node Remove
    this.remove = (value) => {
        let current = head;
        let prevNode = null;

        if ( current.value === value){
            head = current.next;
        }

        while (current.value !== value) {
            prevNode = current;
            current = current.next;

            prevNode.next = current.next;
        }

        length--;
    }

    this.isEmpty = () => head === null;

    this.indexOf = (value) => {
        let current = head;
        let index = -1;

        while (current){
            index++
            if (current.value === value){
                return index;
            }
            current = current.next;
        }

        return -1;
    }

    this.valueAt = (index) => {
        let current = head;
        let count = 0;

        while (current) {
            if (index == count){
                return current.value;
            }
            count++;
            current = current.next;
        }

        return null;
    }

    this.insertAt = (index, value) => {
        let current = head;
        let count = 0;
        let prevNode = null;

        while (current) {
            if (index === count){
                let newNode = new Node(value);
                newNode.next = current;
                prevNode.next = newNode;
                length++;
                return;
            }
            prevNode = current;
            current = current.next;

            count++;
        }


        head = new Node(value);
    }

    this.removeAt = (index) => {
        let current = head;
        let count = 0;
        debugger
        while (current) {
            count++;
            if (index === count){
                current.next = current.next.next
                length--;
                return;
            }
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)
list.add(4)
console.log(list.valueAt(2))
list.insertAt(2, 6)
console.log(list.valueAt(2))
list.removeAt(2)
console.log(list.valueAt(2))
console.log(list.head())

