window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const background = new Background(canvas, context);
  const player = new Player(canvas, context, 350, 400, 240, 300);
  let animationId = null;
  let frames = 0;
  let obstacles = [];
  let score = document.querySelector(".game-score");
  
  function showScore() {
    score.style.display = "block";
  };

  function startGame() {
    updateCanvas();
    showScore();
  }

  function createObstacle() {
    const min = Math.ceil(90);
    const max = Math.floor(910);
    const obstacleX = Math.floor(Math.random() * (max - min)) + min;
    obstacles.push(new Obstacle(canvas, context, obstacleX, 30, 30));
  }

  function updateObstacles() {
    for (let i = 0; i < obstacles.length; i += 1) {
      obstacles[i].move();
      obstacles[i].draw();
      if (obstacles[i].posY >= canvas.height) {
        obstacles.shift();
      }
      if (player.checkCollision(obstacles[i])) {
        console.log(obstacles[i].posX)
      };
    };
    if (frames % 300 === 0) {
      createObstacle();
    }
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function updateCanvas() {
    frames += 1;
    clearCanvas();
    background.draw();
    player.draw();
    updateObstacles();
    animationId = requestAnimationFrame(updateCanvas);
  }

  document.getElementById('start-button').onclick = () => {
    startGame();
    document.getElementById('start-button').innerText = 'Restart Game';
  };

  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'ArrowLeft':
      case 'KeyA':
        player.moveLeft();
        break;
      case 'ArrowRight':
      case 'KeyD':
        player.moveRight();
        break;
    };
    updateCanvas();
  });
}
