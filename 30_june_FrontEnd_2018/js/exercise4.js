function subArrayZero(arr){
    let sum = 0;
    let mySet = new Set();

    for( let num of arr ){
        debugger
        sum += num;
        if( mySet.has(sum)){
            return true;
        }
        mySet.add(sum)
    }
    return false
}

alert(subArrayZero([-5, 12, 4, -7, 2, 1, 8]))
alert(subArrayZero([3,-2,-6,2,1,-2]))