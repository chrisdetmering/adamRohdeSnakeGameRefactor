let snake;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    initSnake();
    newApple();
};

let snaky = function () {
    snake = {
        size: 3.5,
        length: 1,
        color: 'blue',
        dimensions: { width: 7, height: 3.5 },
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

//Everything only works because of the parenthesis on line 74??

function initSnake() {
    ctx.beginPath();
    ctx.fillRect(snake.headPosition.xPosition, snake.headPosition.yPosition,
        snake.dimensions.width, snake.dimensions.height);
    snake.tail.push({ x: 5, y: 5 });
}

function update() {
    document.getElementById("x-position").textContent = "X-Pos " + snake.headPosition.x;
    document.getElementById("y-position").textContent = "Y-Pos " + snake.headPosition.y;
}
setInterval(snake.move, 500);
setInterval(update, 200);

function grow() {
    snake.grow();
}

function newApple(){
    canvas.width
    console.log(canvas.width);
    console.log(canvas.height);

    ctx.fillRect(50, 50,
        10, 5);
    console.log('stop');

}

function gameOver(){
//Todo
}

window.addEventListener("resize", () => {
   // snakeAspectRatio = window.innerHeight / window.innerWidth;
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    canvas.style.width = "100%";
    canvas.style.height = "100%";

    console.log('Canvas width =  ' + canvas.width);
    console.log('Canvas height =  ' + canvas.height);

//     if (window.innerHeight > window.innerWidth){
//         snakeDimensions = {width: snakeSize * snakeAspectRatio, 
//                          height: snakeSize};
//     }else{
//         snakeDimensions = {width: snakeSize * snakeAspectRatio, 
//             height: snakeSize};
//     }
//    return snakeDimensions;
});




//console.log("a", "97");


// function myFunction() {

//     //let objectSize = 1;

//     let myObject = {

//         objectSize: 1,

//         growObject: (num) => {

//             num += 1;
//             console.log("my object size " + (num));

//         }

//     }

    //myObject.growObject(objectSize);

    //setInterval(myObject.growObject(myObject.objectSize), 500);
//}

//myFunction();


// let myFunction = function(){

//     myOjbect = {  

//         objectSize: 1,

//         growObject: function(){

//             this.length += 1;
//             console.log("my object size " + (this.length));

//         }

//     }

// }();


//  setInterval(myOjbect.growObject, 500);