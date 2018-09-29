// --------------- Functions ----------------
function createLayout() {
    let userInputs;

    if (previous) {
        userInputs = JSON.parse(localStorage.getItem('inputs'));

        canvas.width = userInputs.width;
        canvas.height = userInputs.height;

        apQuantity = userInputs.quantity;
        snakeLength = userInputs.snakeLength;
        speed = userInputs.speed
        previous = false;
    }
    else {
        userInputs = getUserInputs();

        canvas.width = isNaN(userInputs.width) || userInputs.width < 300 ? 600 : userInputs.width;
        canvas.height = isNaN(userInputs.height) || userInputs.height < 250 ? 400 : userInputs.height;

        apQuantity = isNaN(userInputs.quantity) || userInputs.quantity < 1 ? 1 : userInputs.quantity;
        snakeLength = isNaN(userInputs.snakeLength) || userInputs.snakeLength < 4 ? 4 : userInputs.snakeLength;
    }

    // creating apple
    for (let i = 0; i < apQuantity; i++) {
        let apple = new Apple(10, 10)
        appleArray.push(apple);
    }

    // creating snake
    let x = 10;
    let y = (10 - ((canvas.height / 2) % 10)) + canvas.height / 2;
    let width = 10;
    let height = 10;
    for (let i = 0; i < snakeLength; i++) {
        snake.insertLast([x, y], 2, width, height);
        x += width;
    }

    // hiding inputs block and revealing canvas
    let display = document.querySelector('#inputs')
    display.style.display = 'none';
    canvas.style.display = 'block';

    snake.createSnake();

    animate();
}

// getting user's inputs from html using "Module Pattern";
function getUserInputs() {
    // getting selected option
    let gameLevel = document.querySelector('select').options.selectedIndex
    speed = 0;
    // defining the level of the speed. the less the number, the faster the game
    switch (gameLevel) {
        case 0:
            speed = 5;
            break;
        case 1:
            speed = 3.5;
            break;
        case 2:
            speed = 2;
            break;
    }
    let width = parseInt(document.querySelector('#width').value);
    let height = parseInt(document.querySelector('#height').value);
    let quantity = parseInt(document.querySelector('#quantity').value);
    let speedForLevel = parseInt(document.querySelector('#speed').value);
    let snakeLength = parseInt(document.querySelector('#length').value);
    // if speed for level is input, speed is going to change depended on it
    if (!isNaN(speedForLevel)) {
        speed /= speedForLevel;
    }

    // storing the inputs
    localStorage.setItem('inputs', JSON.stringify({
        speed,
        width,
        height,
        quantity,
        snakeLength
    }))

    return {
        speed,
        width,
        height,
        quantity,
        snakeLength
    }
}

function selfEating(last) {
    snake.foreach((part) => {
        if (part !== last) {
            if (part.coords[0] === last.coords[0]
                && part.coords[1] === last.coords[1]) {
                cancelAnimationFrame(gameLoop);
                lose()
            }
        }
    })
}

function collisionBounds(last) {
    // checking collision with bounds
    let condition = last.coords[1] + last.height > canvas.height + 1 ||
        last.coords[1] < 0 ||
        last.coords[0] + last.width > canvas.width + 1 ||
        last.coords[0] < 0;


    // making snake move;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (state === 'down') snake.moveDown();
    else if (state === 'right') snake.moveRight();
    else if (state === 'left') snake.moveLeft();
    else if (state === 'up') snake.moveUp();

    // drawing apples after ctx.clearRect
    for (let item of appleArray) {
        item.draw();
    }

    if (condition) {
        cancelAnimationFrame(gameLoop)
        lose()
    }
}

function growing(last) {
    // Eating and growing
    appleArray.forEach((apple, index) => {
        // if snakes head's coords are equal to apple coords
        if (apple.coords[0] === last.coords[0]
            && apple.coords[1] === last.coords[1]) {
            switch (state) {
                case 'down':
                    snake.insertFirst([last.coords[0], last.coords[1] + last.height], last.speed, last.width, last.height)
                    break;
                case 'up':
                    snake.insertFirst([last.coords[0], last.coords[1] - last.height], last.speed, last.width, last.height)
                    break;
                case 'right':
                    snake.insertFirst([last.coords[0] + last.width, last.coords[1]], last.speed, last.width, last.height)
                    break;
                case 'left':
                    snake.insertFirst([last.coords[0] - last.width, last.coords[1]], last.speed, last.width, last.height)
                    break;
            }

            // deleting current and creating new apple
            appleArray.splice(index, 1);
            appleArray.push(new Apple(apple.width, apple.height))
            score += 10;

            // High score
            let highest = localStorage.getItem('highScore');
            if (score > highest || !highest) {
                localStorage.setItem('highScore', JSON.stringify(score));
            }
        }
    })
}

function getRandomArr(snake, appleArray) {
    let x = Math.floor(Math.random() * canvas.width - 10);
    let y = Math.floor(Math.random() * canvas.height - 10);

    let coords = [x, y]

    // if they are not, making x and y divided by 10
    if (x % 10 !== 0 && y % 10 === 0) {
        x = (10 - x % 10) + x;
        coords = [x, y];
    }
    else if (x % 10 === 0 && y % 10 !== 0) {
        y = (10 - y % 10) + y;
        coords = [x, y];
    }
    else {
        x = (10 - x % 10) + x;
        y = (10 - y % 10) + y;
        coords = [x, y];
    }

    snake.foreach((part) => {
        if (coords[0] === part.coords[0] &&
            coords[1] === part.coords[1]) {
            coords = getRandomArr(snake, appleArray)
        }
    })

    appleArray.forEach(apple => {
        if (coords[0] === apple.coords[0] &&
            coords[1] === apple.coords[1]) {
            coords = getRandomArr(snake, appleArray);
        }
    })

    return coords;
}

function lose() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let highest = JSON.parse(localStorage.getItem('highScore'))
    ctx.font = "40px Arial";
    ctx.fillStyle = 'blue'
    if (score < highest) {
        ctx.fillText(`Your score is ${score}`, canvas.width / 2 - 140, canvas.height / 2)
    }
    else {
        ctx.fillText(`New High Score ${score}`, canvas.width / 2 - 160, canvas.height / 2)
    }

    startOver()
}

function startOver() {
    let button = document.createElement('button');
    button.setAttribute('id', 'startOver');
    button.textContent = 'Start Over';
    document.body.appendChild(button);

    button.addEventListener('click', (event) => {
        snake = new SnakeList();
        apQuantity = 5;
        snakeLength = 3;
        speed = 0;
        appleArray = [];
        state = 'down';
        score = 0;
        count = 0;

        canvas.style.display = 'none';
        button.remove();
        let display = document.querySelector('#inputs')
        display.style.display = 'block';
    })
}