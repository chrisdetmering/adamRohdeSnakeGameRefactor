let direction;
let run;

document.getElementById("game-container").addEventListener("click", () => {
    direction = 'STOP';
    

    
    
});

document.getElementById("up-button").addEventListener("click", () => {
    run = 'running';
    direction = 'UP';
    
    
    

});

document.getElementById("down-button").addEventListener("click", () => {
    run = 'running';
    direction = 'DOWN';
    
    


});
document.getElementById("left-button").addEventListener("click", () => {
    run = 'running';
    direction = 'LEFT';
    
    


});
document.getElementById("right-button").addEventListener("click", () => {
    direction = 'RIGHT';
    run = 'running';
    
    

});

document.getElementById("grow-button").addEventListener("click", () => {
    console.log("Grow");
    grow();
});

function update() {
    document.getElementById("x-position").textContent = "X-Pos " + snake.headPosition.x;
    document.getElementById("y-position").textContent = "Y-Pos " + snake.headPosition.y;
}
setInterval(update, 200);


document.onkeydown = function (e){

    if (e.key ==  " "){
        direction = 'STOP';
    }

    if (e.key == 'ArrowUp'){
        run = 'running';
        direction = 'UP';
    }

    if (e.key == 'ArrowDown'){
        console.log("down");
        run = 'running';
        direction = 'DOWN';
    }

    if (e.key == 'ArrowLeft'){
        run = 'running';
        direction = 'LEFT';
    }

    if (e.key == 'ArrowRight'){
        run = 'running';
        direction = 'RIGHT';
    }
};




