let direction;
let run;

const scoreDisplay = document.getElementById("score");

document.getElementById("game-container").addEventListener("click", () => {
    //direction = 'STOP';  
});

// document.getElementById("up-button").addEventListener("click", () => {
//     run = 'running';
//     direction = 'UP';
// });
// document.getElementById("down-button").addEventListener("click", () => {
//     run = 'running';
//     direction = 'DOWN';
// });
// document.getElementById("left-button").addEventListener("click", () => {
//     run = 'running';
//     direction = 'LEFT';
// });
// document.getElementById("right-button").addEventListener("click", () => {
//     direction = 'RIGHT';
//     run = 'running';

// });


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
            hideGameOverModal();
            initGame();
        }
    }
};


//Game Over Modal
let modal1 = null;
document.getElementById("close-gameover-modal").addEventListener("click", () => {
    hideGameOverModal();
    initGame();
});

function hideGameOverModal(){
    document.getElementById("game-over").style.display = "none";
    modal1 = null;
}

function showGameOverModal() {
     document.getElementById("game-over").style.display = "block";
     modal1 = true;
} 


//Start Game Modal
let startGameModal = null;
document.getElementById("close-start-Modal").addEventListener("click", () => {
    hideStartGameModal();
    //initGame();
});

function hideStartGameModal(){
    document.getElementById("start-game").style.display = "none";
    startGameModal = null
}

function showStartGameModal() {
     document.getElementById("start-game").style.display = "block";
     startGameModal = true;
} 