let direction;


const scoreDisplay = document.getElementById("score");
const highScore = document.getElementById("high-score");

document.onkeydown = function (e){
    e.preventDefault(); 
    if (e.key ==  " "){
        direction = 'STOP';
    }

    if (e.key == 'ArrowUp'){

        direction = 'UP';
    }
    if (e.key == 'ArrowDown'){

        direction = 'DOWN';
    }

    if (e.key == 'ArrowLeft'){

        direction = 'LEFT';
    }

    if (e.key == 'ArrowRight'){

        direction = 'RIGHT';
    }
    if (gamOverModal == true && e.key == " ") {
        hideGameOverModal();
    }
};

let gamOverModal = null;
document.getElementById("close-gameover-modal").addEventListener("click", () => {
    hideGameOverModal();
});

function hideGameOverModal(){
    document.getElementById("game-over").style.display = "none";
    gamOverModal = null;
    initGame();
}

function showGameOverModal() {
     document.getElementById("game-over").style.display = "block";
     gamOverModal = true;
} 

 