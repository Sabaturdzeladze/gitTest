// Canvas declaration
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// #region Global Variables
let gameLoop;
let snake = new SnakeList(); // Classes.js
let apQuantity = 5;
let snakeLength = 4;
let speed = 5;
let appleArray = [];
let state = 'right';
let score = 0;
let count = 0;
let previous = false;
// #endregion

// game
function animate() {
    gameLoop = requestAnimationFrame(animate);

    // snake's head
    let last = snake.getLast();

    selfEating(last);
    growing(last);


    // speed of the game (fps = fps / speed)
    if (++count < speed) {
        return;
    }
    count = 0;

    collisionBounds(last);
}


// #region ----------------- Events -----------------
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' && (state !== 'down' && state !== 'up')) {
        state = 'down';
    }
    else if (event.key === 'ArrowRight' && (state !== 'right' && state !== 'left')) {
        state = 'right';
    }
    else if (event.key === 'ArrowLeft' && (state !== 'right' && state !== 'left')) {
        state = 'left';
    }
    else if (event.key === 'ArrowUp' && (state !== 'down' && state !== 'up')) {
        state = 'up';
    }
})

document.querySelector('#start').addEventListener('click', createLayout)

document.querySelector('#previous').addEventListener('click', (event) => {
    let storage = JSON.parse(localStorage.getItem('inputs'));

    if (!storage || !(storage.width) || !(storage.height) || !(storage.quantity) || !(storage.snakeLength)) {
        alert('No previous data!');
    }
    else {
        previous = true;
        createLayout();
    }
})
// #endregion