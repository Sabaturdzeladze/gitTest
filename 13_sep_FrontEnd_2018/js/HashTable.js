class HashTable {
    constructor() {
        this.table = new Array(255);
    }
    add(value) {
        this.table[this.hash(value, 255)] = value;
    }
    check(value) {
        return !!this.table[this.hash(value, 255)]
    }
    hash(value, max) {
        let num = 0;
        for (let i = 0; i < value.length; i++) {
            num += value.charCodeAt(i) * i;
        }
        return num % max;
    }
    remove(value) {
        if (!this.check(value)) return undefined;
        let key = this.hash(value, 255)
        delete this.table[key];
    }
}

let hTable = new HashTable();
console.log(hTable.add('HashTables Examples aoiasecusbecaslnec'));
console.log(hTable.table[67]);
hTable.remove('HashTables Examples aoiasecusbecaslnec');
console.log(hTable.table[67]);
