let sentence = /\w[.?!](\s|$)/mig
let letter = /[\w]/mig
let word = /\w[\s]/mig
let line = /\r?\n/mg

let button = document.querySelector('button')
button.addEventListener('click', function(e){
    let textarea = document.querySelector('textarea');
    let arr = textarea.textContent.match(sentence);
    console.log(`sentence: ${arr.length}`);

    let letters = textarea.textContent.match(letter)
    console.log(`letters: ${letters.length}`);

    let words = textarea.textContent.match(word)
    console.log(`Words: ${words.length}`);

    let lines = textarea.textContent.match(line)
    console.log(`Lines: ${lines.length}`);
})