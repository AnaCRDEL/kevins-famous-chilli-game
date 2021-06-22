const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');


function drawOffice() {
    const officeImg = new Image();
    officeImg.src = 'images/background.png';
    officeImg.onload = function() {
        ctx.globalAlpha = 0.4;
        ctx.drawImage(officeImg, 0, 0, 1000, 700);
    };
};

function showScore() {
    let score = document.querySelector(".game-score");
    score.style.display = "block";
};

function startGame() {
    drawOffice();
    showScore();
    startButton.innerText = 'Restart Game';
};

if (startButton) {
    startButton.addEventListener('click', event => {
      startGame();
    });
};