

//Position Display
const xPositionDisplay = document.getElementById("x-position");
const yPositionDisplay = document.getElementById("y-position");
xPositionDisplay.textContent = "Horizontal ";
yPositionDisplay.textContent = "Lateral ";

//Main global Variables
let snake;
let moveDirection;
let snakeAspectRatio;
let snakeSize = 2.5;
let snakeDimensions;
let snakePosition;
let dpi = window.devicePixelRatio;
let noGoZoneIndex = 0;
let noGoZone = [];


//Canvas Stuff
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


window.addEventListener("resize", () => {
    snakeAspectRatio = window.innerHeight / window.innerWidth;
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if (window.innerHeight > window.innerWidth){
        snakeDimensions = {width: snakeSize * snakeAspectRatio, 
                         height: snakeSize};
    }else{
        snakeDimensions = {width: snakeSize * snakeAspectRatio, 
            height: snakeSize};
    }
   return snakeDimensions;
});



function renderSnake() {
    snakeAspectRatio = window.innerHeight / window.innerWidth;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    ctx.beginPath();
    snakePosition = {x: 5.5, y: 5.5};
    
    snakeDimensions = {width: snakeSize * snakeAspectRatio, height: snakeSize};

    ctx.fillRect(snakePosition.x, snakePosition.y, snakeDimensions.width, snakeDimensions.height);
    xPositionDisplay.textContent = "Horizontal " + snakePosition.x;
    yPositionDisplay.textContent = "Lateral " + snakePosition.y;
}

window.onload = () => {
    renderSnake();
};


function captureNoGoZone(){
    noGoZoneIndex += 1;
    console.log(noGoZoneIndex);
    
    let coordinate = {

        lateral: snakePosition.y,
        horizontal: snakePosition.x

    };
    noGoZone[noGoZoneIndex] = coordinate;
    //noGoZone[noGoZoneIndex] = snakePosition.horizontal;
    console.log(noGoZone); 
}


function move(direction) {

    //ctx.beginPath();
    ctx.clearRect(0, 10, snakeDimensions.width, snakeDimensions.height);
    
    if (direction === undefined) {
    } else {
        moveDirection = direction;
    }
    switch (moveDirection) {
        case "stop":
            ctx.fillRect(snakePosition.x, snakePosition.y, snakeDimensions.width, snakeDimensions.height);
            break;
        case "up":      
            snakePosition.y -= snakeDimensions.height - snakeSize;
            ctx.fillRect(snakePosition.x, snakePosition.y, snakeDimensions.width, snakeDimensions.height);
            break;
        case "down":
            snakePosition.y+= snakeDimensions.height + snakeSize;
            ctx.fillRect(snakePosition.x, snakePosition.y, snakeDimensions.width, snakeDimensions.height);
            break;
        case "left":
            snakePosition.x -= snakeDimensions.width - snakeSize;
            ctx.fillRect(snakePosition.x, snakePosition.y, snakeDimensions.width, snakeDimensions.height);
            break;
        case "right":
            snakePosition.x += snakeDimensions.width + snakeSize;
            ctx.fillRect(snakePosition.x, snakePosition.y, snakeDimensions.width, snakeDimensions.height);
            break;
    }

    xPositionDisplay.textContent = snakePosition.x;
    yPositionDisplay.textContent = snakePosition.y;
}

setInterval(move, 500);


// function drawSnake() {
//     ctx.beginPath();
//     ctx.fillStyle = "#0095DD";
//     //ctx.fillRect(x, y, snakeSize, 0, Math.PI*2);
//     ctx.arc(x, y, snakeSize, 0, Math.PI * 2);
//     ctx.fill();
//     //ctx.closePath();
// }
