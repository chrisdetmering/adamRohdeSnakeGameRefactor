let direction;

document.getElementById("game-container").addEventListener("click", () => {
    direction = 'STOP';

    snake.move(direction);
    snake.pushTail(direction);
});

document.getElementById("up-button").addEventListener("click", () => {
    direction = 'UP';
    
    
    snake.move(direction);
    snake.pushTail(direction);

});

document.getElementById("down-button").addEventListener("click", () => {
    direction = 'DOWN';
    
    snake.move(direction);
    snake.pushTail(direction);


});
document.getElementById("left-button").addEventListener("click", () => {
    direction = 'LEFT';
    
    snake.move(direction);
    snake.pushTail(direction);


});
document.getElementById("right-button").addEventListener("click", () => {
    direction = 'RIGHT';
    
    snake.move(direction);
    snake.pushTail(direction);


});