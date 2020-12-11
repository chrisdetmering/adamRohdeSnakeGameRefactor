let apple;
let heightRatio = 1;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gameOverFlag;

window.onload = () => {
   
    initGame();
    newApple();
};

function initGame(){
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.beginPath();
    
    snake.headPosition.x = 10;
    snake.headPosition.y = 10;

    ctx.fillRect(snake.headPosition.xPosition, snake.headPosition.yPosition,
        snake.dimensions.width, snake.dimensions.height);
     snake.tail.push({ x: snake.dimensions.width, y: snake.dimensions.height });

     startGame();
}

function grow() {
    snake.grow();
}

function newApple(){
    apple = {
        height : Math.floor(Math.floor(Math.random()*10)*10+10),
        width: Math.floor(Math.floor(Math.random()*15)*10+10)
    };
    ctx.fillRect(apple.width, apple.height, 5, 5);
}

function outOfBounds(){
    if (snake.headPosition.x >= 290 || snake.headPosition.x <= 5 || snake.headPosition.y >= 140 || snake.headPosition.y <= 5){
        direction = 'STOP';
        gameOver();
    }
}

function gotTheApple(){
    if (snake.headPosition.x === apple.width && snake.headPosition.y ===apple.height){
        grow();
        newApple();
        updateScore();
    }
}

function collideWithTail() {
    for (let i = 0; i < snake.length; i++){
        if (snake.headPosition.x == snake.tail[i].x & snake.headPosition.y == snake.tail[i].y){
            console.log("You ran into your own tail dummy!");
            gameOver();
        }
    }
}

function updateScore() {

}

function gameOver(){
    console.log("Game Over!!!!");
    gameOverFlag = true;
    clearInterval(myTicker);  
    gameOverModal();

    //Clear All
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
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


