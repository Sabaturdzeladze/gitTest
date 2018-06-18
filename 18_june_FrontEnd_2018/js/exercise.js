let input = Number(prompt("Enter natural number"));
// debugger
function isPrime (n){
    let b = 0;
    if (n % 1 == 0){
        for (let i=0; i <= n; i++){
            if (n % i == 0){
                b++;
            }
            if (b > 2){
                break;
            }
        }
    }
    if (b == 2){
        return true;
    }
    else{
        return false;
    }
}

function showPrime (n){
    for (let i = 0; i < n; i++){
        if (isPrime(i)){
            console.log(i);
        }
    }
}
isPrime(input);
// debugger
showPrime(input);