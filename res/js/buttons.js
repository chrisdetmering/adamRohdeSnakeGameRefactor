let direction;

document.getElementById("game-container").addEventListener("click", () => {
    direction = 'STOP';

    
    
});

document.getElementById("up-button").addEventListener("click", () => {
    direction = 'UP';
    
    
    

});

document.getElementById("down-button").addEventListener("click", () => {
    direction = 'DOWN';
    
    


});
document.getElementById("left-button").addEventListener("click", () => {
    direction = 'LEFT';
    
    


});
document.getElementById("right-button").addEventListener("click", () => {
    direction = 'RIGHT';
    
    

});

document.getElementById("grow-button").addEventListener("click", () => {
    console.log("Grow");
    grow();
});

