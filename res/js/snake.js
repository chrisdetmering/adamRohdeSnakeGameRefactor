let snake;

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
            if (snake.length > 0){
                switch (direction) {

                    case "STOP":
                        break;
    
                    case "UP":
                        ctx.clearRect(snake.tail[snake.tail.length - snake.length].x, snake.tail[snake.tail.length - snake.length].y,
                            snake.dimensions.width + 0.1, snake.dimensions.height + 0.1);
                        //--------------
                        snake.headPosition.y -= snake.dimensions.height + snake.size;
                        ctx.fillStyle = 'blue';
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
                        ctx.fillStyle = 'blue';
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
                        ctx.fillStyle = 'blue';
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
                        ctx.fillStyle = 'blue';
                        ctx.fillRect(snake.headPosition.x, snake.headPosition.y,
                            snake.dimensions.width, snake.dimensions.height);
                        //----------------
                        snake.tail.push({ x: snake.headPosition.x, y: snake.headPosition.y });
                        break;
                }
            } 
            //Tail Maintenance
            if (snake.tail.length > (snake.length + 1)){
                snake.tail.splice(snake.tail.length - (snake.length + 1), 1);
            }
            outOfBounds();
            collideWithTail();
            ateTheApple();
        }
    }
}();

function startGame(){
    myTicker = setInterval((direction) => { 
            snake.move(direction);
    }, 200);
}

