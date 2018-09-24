let game = require('./snake.js');
let SnakeList = game.SnakeList;
let Snake = game.Snake;

window.onload = () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    canvas.style.width = innerWidth / 2;
    canvas.style.height = innerHeight / 2;


}