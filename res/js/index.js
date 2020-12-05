let snake;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    updateSnake();
};

let i = 0;
snake = {
    size: 3.5,
    color: 'blue',
    dimensions: {width: 3.5, height: 3.5},
    headPosition: {x: 5, y: 5},
    tail: [],
    move: function(){
        switch (direction) {
            case "STOP":
                ctx.fillRect(snake.headPosition.x, snake.headPosition.y, 
                    snake.dimensions.width, snake.dimensions.height);
                console.log('stop');
                break;
            case "UP":      
                snake.headPosition.y -= snake.dimensions.height + snake.size;
                ctx.fillRect(snake.headPosition.x, snake.headPosition.y, 
                    snake.dimensions.width, snake.dimensions.height);
                break;
            case "DOWN":
                snake.headPosition.y += snake.dimensions.height + snake.size;
                ctx.fillRect(snake.headPosition.x, snake.headPosition.y, 
                    snake.dimensions.width, snake.dimensions.height);
                break;
            case "LEFT":
                snake.headPosition.x -= snake.dimensions.width + snake.size;
                ctx.fillRect(snake.headPosition.x, snake.headPosition.y, 
                    snake.dimensions.width, snake.dimensions.height);
                break;
            case "RIGHT":
                snake.headPosition.x += snake.dimensions.width + snake.size;
                ctx.fillRect(snake.headPosition.x, snake.headPosition.y, 
                    snake.dimensions.width, snake.dimensions.height);
                break;
        }
    }, 
    pushTail: function(){
        switch (direction) {
            case "STOP":
                console.log('stop');
                break;
            case "UP":      
                snake.tail.push({x: snake.headPosition.x, y: snake.headPosition.y});
                break;
            case "DOWN":
                snake.tail.push({x: snake.headPosition.x, y: snake.headPosition.y});
                break;
            case "LEFT":
                snake.tail.push({x: snake.headPosition.x, y: snake.headPosition.y});
                break;
            case "RIGHT":
                snake.tail.push({x: snake.headPosition.x, y: snake.headPosition.y});
                break;
        }
        console.log('This is the tail ' + snake.tail); 
    }
}

function updateSnake(){
    console.log(snake.tail);
    ctx.beginPath();
    ctx.fillRect(snake.headPosition.xPosition, snake.headPosition.yPosition, 
                    snake.dimensions.width, snake.dimensions.height);
    console.log(snake);
}

function update(){
    document.getElementById("x-position").textContent = snake.headPosition.x;
    document.getElementById("y-position").textContent = snake.headPosition.y;
}


setInterval(snake.move, 500);