class Set {
    constructor (){
        this.array = [];
    }
    has(data){   
        return this.array.includes(data);
    }
    remove(data){
        let index = this.array.findIndex((elem) => data === elem)
        this.array.splice(index, 1)
        return this;
    }
    add(data){
        if (this.array.includes(data)){
            return this;
        }
        else {
            this.array.push(data);
            return this;
        }
    }
    subSet(set){
        for (let item of set.array){
            if (!this.array.includes(item)){
                return false;
            }
        }
        return true
    }

    intersection(set){
        let arr = []
        set.array.forEach((item) => {
            if (this.array.includes(item)){
                arr.push(item)
            }
        })
        return arr;
    }
}

let set1 = new Set();
set1.add(5)
.add(5)
.add(3).add(1).remove(5);
console.log(set1.array);
console.log(set1.has(5));
let set2 = new Set();
set2.add(3).add(1);
console.log(set1.subSet(set2));
console.log(set1.intersection(set2));