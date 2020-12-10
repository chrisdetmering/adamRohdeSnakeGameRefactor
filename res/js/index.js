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

function initSnake() {
    ctx.beginPath();
    ctx.fillRect(snake.headPosition.xPosition, snake.headPosition.yPosition,
        snake.dimensions.width, snake.dimensions.height);
    snake.tail.push({ x: snake.dimensions.width, y: snake.dimensions.height });
}

let snaky = function () {
    snake = {
        size: 5,
        length: 1,
        color: 'blue',
        dimensions: { width: 5, height: 5 },
        headPosition: { x: 10, y: 10 },
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
            collision();
            gotTheApple();
        }
    }
}();
setInterval((direction) => { 
        snake.move(direction);
}, 250);

function grow() {
    snake.grow();
}

function newApple(){
    console.log('New apple game on');
    apple = {
        height : Math.floor(Math.floor(Math.random()*10)*10+10),
        width: Math.floor(Math.floor(Math.random()*15)*10+10)
    };

    ctx.fillRect(apple.width, apple.height,
        5, 5);
}

function collision(){
    if (snake.headPosition.x >= 290 || snake.headPosition.x <= 5 || snake.headPosition.y >= 140 || snake.headPosition.y <= 5){
        direction = 'STOP';
        console.log("game over");
    }
}

function gotTheApple(){
    if (snake.headPosition.x === apple.width && snake.headPosition.y ===apple.height){
        grow();
        newApple();
    }
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


//Works
// myFunction = function(){
    
//     myObject = {  

//         objectSize: 1,

//         growObject: function(){

//             this.length += 1;
//             console.log("my object size " + (this.length));

//         }
        
//     }

// }();
// setInterval(myObject.growObject, 1000);

//Does not work.  
// function myFunction(){
    
//     myObject = {  

//         objectSize: 1,

//         growObject: function(){

//             this.length += 1;
//             console.log("my object size " + (this.length));

//         }
        
//     }

// };

// setInterval(myFunction().myObject.growObject, 1000);

//Works


//Does not work.  

// myFunction = function(){
    
//     myObject = {  
        
//         objectSize: 1,
        
//         growObject: function(){
            
//             this.length += 1;
//             console.log("my object size " + (this.length));
            
//         }
        
//     }
    
// };

// setInterval(myObject.growObject, 1000);