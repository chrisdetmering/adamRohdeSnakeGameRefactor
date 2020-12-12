let apple;
let heightRatio = 1;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gameOverFlag;

window.onload = () => {
   
    initGame();
   
};

function initGame(){
    gameOverFlag = false;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.beginPath();
    
    snake.headPosition.x = 10;
    snake.headPosition.y = 10;

    ctx.fillStyle = 'blue';
    ctx.fillRect(snake.headPosition.xPosition, snake.headPosition.yPosition, snake.dimensions.width, snake.dimensions.height);
    snake.tail.push({ x: snake.dimensions.width, y: snake.dimensions.height });

     newApple();
     startGame();
}

function grow() {
    snake.grow();
}

function newApple(){
    let key = "generatePosition";
    switch (key) {
        case "generatePosition":
            apple = {
                x : Math.floor(Math.floor(Math.random()*13) * 10 + 10), //Should be 300 small for testing..
                y: Math.floor(Math.floor(Math.random()*14)*10 + 10)  //should be 150, small for testing
            }; 
            console.log('1 - generate apple');     
            key = "check";

        case "check":
            let badApple = false;
            for (let i = 0; i < snake.length; i++){
                if (apple.x == snake.tail[i].x && apple.y == snake.tail[i].y){
                    console.log('apple on the tail, apple on the tail, apple on the tail!!!');                  
                    badApple = true;
                }
            }
            if (!badApple) {
                console.log('2 - apple check good');
                key = "create";
            }else{
                console.log('999 - bad apple');
               // key = "generatePosition";
                newApple();
                break;
            }
        case "create":
            console.log('3 - creating apple');
            ctx.fillStyle = 'green';
            ctx.fillRect(apple.x, apple.y, 5, 5);
    }
}

function newAppleChecker(){
    for (let i = 0; i < snake.length; i++){
        if (apple.x == snake.tail[i].x && apple.y == snake.tail[i].y){
            console.log("wrong spot fool");
            //apple.x;
           // apple.y;
        }
    }
}

function outOfBounds(){
    if (snake.headPosition.x >= 300 || snake.headPosition.x <= 0 || snake.headPosition.y >= 150 || snake.headPosition.y <= 0){
        direction = 'STOP';
        gameOver();
    }
}

function ateTheApple(){
    if (snake.headPosition.x === apple.x && snake.headPosition.y ===apple.y){
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
//Todo
}

function gameOver(){
    snake.tail.length = 1;
    snake.length = 1;
    gameOverFlag = true;
    clearInterval(myTicker);  
    gameOverModal();

    //Clear All
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// window.addEventListener("resize", () => {

// });


