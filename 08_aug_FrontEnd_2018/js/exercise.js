window.onload = () => {
    let text = document.querySelector('#text');
    let count = document.querySelector('#count');
    let result = document.querySelector('#result');

    count.addEventListener('click', event => {
        let count = {}
        let str = text.value;
        str = str.replace(/[^A-z]/g, '').toLowerCase().split('');
        console.log(str);
        str.forEach(element => {
            if ( count[element] ) {
                count[element]++;
            }else {
                count[element] = 1;
            }
        });
    })
}

document.querySelector('input').addEventListener('change', function(e){
    
})