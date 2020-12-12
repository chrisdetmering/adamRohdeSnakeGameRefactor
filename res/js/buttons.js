let direction;
let run;

const scoreDisplay = document.getElementById("score");

document.getElementById("game-container").addEventListener("click", () => {
    //direction = 'STOP';  
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


document.onkeydown = function (e){
    if (e.key ==  " "){
        direction = 'STOP';
    }

    if (e.key == 'ArrowUp'){
        run = 'running';
        direction = 'UP';
    }
    if (e.key == 'ArrowDown'){
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
    if (modal == true) {
        if (e.key == " " || e.key == "Enter") {
            hideModal();
            initGame();
        }
    }
};

var modal = null;

document.getElementById("close-Modal").addEventListener("click", () => {
    hideModal();
    initGame();
});

function hideModal(){
    document.getElementById("box").style.display = "none";
    modal = null
}

function gameOverModal() {
     document.getElementById("box").style.display = "block";
     modal = true;
} 


