let snake;
let apple;
let heightRatio = 1;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    //canvas.height = canvas.width * heightRatio;

    initSnake();
    newApple();
};

let snaky = function () {
    snake = {
        size: 5,
        length: 1,
        color: 'blue',
        dimensions: { width: 5, height: 5 },
        headPosition: { x: 5, y: 5 },
        tail: [],
        grow: function () {
            this.length += 1;
        },
        move: function () {
            switch (direction) {
                case "STOP":
                    ctx.fillRect(snake.headPosition.x, snake.headPosition.y,
                        snake.dimensions.width, snake.dimensions.height);
                    console.log('stop');
                    break;
                case "UP":
                    ctx.clearRect(snake.tail[snake.tail.length - snake.length].x, snake.tail[snake.tail.length - snake.length].y,
                        snake.dimensions.width + 0.1, snake.dimensions.height + 0.1);
                    //--------------
                    snake.headPosition.y -= snake.dimensions.height + snake.size;
                    ctx.fillRect(snake.headPosition.x, snake.headPosition.y,
                        snake.dimensions.width, snake.dimensions.height);
                    //--------------
                    snake.tail.push({ x: snake.headPosition.x, y: snake.headPosition.y });
                    break;
                case "DOWN":
                    ctx.clearRect(snake.tail[snake.tail.length - snake.length].x, snake.tail[snake.tail.length - snake.length].y,
                        snake.dimensions.width + 0.1, snake.dimensions.height + 0.1);
                    //--------------   
                    snake.headPosition.y += snake.dimensions.height + snake.size;
                    //----------------
                    ctx.fillRect(snake.headPosition.x, snake.headPosition.y,
                        snake.dimensions.width, snake.dimensions.height);
                    //----------------
                    snake.tail.push({ x: snake.headPosition.x, y: snake.headPosition.y });
                    break;
                case "LEFT":
                    ctx.clearRect(snake.tail[snake.tail.length - snake.length].x, snake.tail[snake.tail.length - snake.length].y,
                        snake.dimensions.width + 0.1, snake.dimensions.height);
                    //--------------
                    snake.headPosition.x -= snake.dimensions.width + snake.size;
                    //---------------
                    ctx.fillRect(snake.headPosition.x, snake.headPosition.y,
                        snake.dimensions.width, snake.dimensions.height);
                    //----------------
                    snake.tail.push({ x: snake.headPosition.x, y: snake.headPosition.y });
                    break;
                case "RIGHT":
                    ctx.clearRect(snake.tail[snake.tail.length - snake.length].x, snake.tail[snake.tail.length - snake.length].y,
                        snake.dimensions.width + 0.1, snake.dimensions.height);
                    //----------------
                    snake.headPosition.x += snake.dimensions.width + snake.size;
                    //----------------
                    ctx.fillRect(snake.headPosition.x, snake.headPosition.y,
                        snake.dimensions.width, snake.dimensions.height);
                    snake.tail.push({ x: snake.headPosition.x, y: snake.headPosition.y });
                    break;
            }
        }
    }
}();
setInterval((direction) => {

    snake.move(direction);
 
}, 250);

//Everything only works because of the parenthesis on line 74??

function initSnake() {
    ctx.beginPath();
    ctx.fillRect(snake.headPosition.xPosition, snake.headPosition.yPosition,
        snake.dimensions.width, snake.dimensions.height);
    snake.tail.push({ x: snake.dimensions.width, y: snake.dimensions.height });
}

function update() {
    document.getElementById("x-position").textContent = "X-Pos " + snake.headPosition.x;
    document.getElementById("y-position").textContent = "Y-Pos " + snake.headPosition.y;
}
setInterval(update, 200);


function grow() {
    snake.grow();
}

function newApple(){
    apple = {
        height : Math.floor(Math.floor(Math.random()*20)*10+5),
        width: Math.floor(Math.floor(Math.random()*30)*10+5)
    };

    ctx.fillRect(apple.width, apple.height,
        5, 5);
}

function gameOver(){
//Todo
}

window.addEventListener("resize", () => {
   // snakeAspectRatio = window.innerHeight / window.innerWidth;
    // console.log(window.innerWidth);
    // console.log(window.innerHeight/0.8);

    // if (window.innerWidth > (window.innerHeight * 0.8)){
    //     console.log("wide body");
    //     snake.dimensions.height = 5;
    //     snake.dimensions.width = (window.innerWidth/window.innerHeight) * 5;
    // }else{
    //     console.log("tall boy");
    //     snake.dimensions.height = (window.innerWidth/window.innerHeight) * 5;
    //     snake.dimensions.width = 5;
    // }

    // canvas.style.width = canvas.width;
    // canvas.style.height = canvas.height;

});



