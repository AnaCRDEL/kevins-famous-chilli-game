window.onload = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const background = new Background(canvas, context);
  const player = new Player(canvas, context, 350, 400, 240, 300);
  let animationId = null;
  let frames = 0;
  let ingredients = [];
  let obstacles = [];
  let powerUps = [];
  let superObstacles = [];
  let score = document.querySelector(".game-score");
  let scoreNumber = document.getElementById('current-score');
  const gameOver = new Image;
  gameOver.src = './images/game-over.png';
  let isGameOver = false;
  let isGameRunning = false;
  const gameWin = new Image;
  gameWin.src = './images/michael-win.png';

  function showScore() {
    score.style.display = "block";
  };

  function startGame() {
    if (isGameRunning === false) {
      animationId = setInterval(updateCanvas, 10);
      document.getElementById('start-button').innerText = 'Restart Game';
      showScore();
      isGameRunning = true;
    } else {
      restartGame();
    }
  }

  function restartGame() {
    clearCanvas();
    clearInterval(animationId);
    frames = 0;
    ingredients = [];
    obstacles = [];
    powerUps = [];
    superObstacles = [];  
    background.score = 0;
    scoreNumber.innerText = background.score;
    player.posX = 350;
    player.posY = 400;
    isGameOver = false;
    isGameRunning = false;
    startGame();
  }


  function createIngredient() {
    const min = Math.ceil(90);
    const max = Math.floor(910);
    const ingredientX = Math.floor(Math.random() * (max - min)) + min;
    ingredients.push(new Ingredients(canvas, context, ingredientX, 50, 40));
  }

  function updateIngredients() {
    for (let i = 0; i < ingredients.length; i += 1) {
      ingredients[i].move();
      ingredients[i].draw();
      if (ingredients[i].posY >= canvas.height) {
        ingredients.shift();
      };
    };
    if (frames % 200 === 0) {
      createIngredient();
    }
  }

  function checkCatchIngredient() {
    let caught = ingredients.some(function(ingredient) {
      return player.checkCollision(ingredient);
    });  
    if (caught) {
      ingredients.forEach((ingredient, index) => {
        ingredients.splice(index, 1);
        background.score += 1;
        scoreNumber.innerText = background.score;
      });
    };
  }

  function createObstacle() {
    const min = Math.ceil(90);
    const max = Math.floor(910);
    const obstacleX = Math.floor(Math.random() * (max - min)) + min;
    obstacles.push(new Obstacles(canvas, context, obstacleX, 50, 60));
  }

  function updateObstacles() {
    for (let i = 0; i < obstacles.length; i += 1) {
      obstacles[i].move();
      obstacles[i].draw();
      if (obstacles[i].posY >= canvas.height) {
        obstacles.shift();
      };
    };
    if (frames % 300 === 0) {
      createObstacle();
    }
  }

  function checkCatchObstacle() {
    let caught = obstacles.some(function(obstacle) {
      return player.checkCollision(obstacle);
    });  
    if (caught) {
      obstacles.forEach((obstacle, index) => {
        obstacles.splice(index, 1);
        background.score -= 1;
        scoreNumber.innerText = background.score;
      });
    };
  }

  function createPowerUp() {
    const min = Math.ceil(90);
    const max = Math.floor(910);
    const powerUpX = Math.floor(Math.random() * (max - min)) + min;
    powerUps.push(new PowerUp(canvas, context, powerUpX, 60, 70));
  }

  function updatePowerUps() {
    for (let i = 0; i < powerUps.length; i += 1) {
      powerUps[i].move();
      powerUps[i].draw();
      if (powerUps[i].posY >= canvas.height) {
        powerUps.shift();
      };
    };
    if (frames % 500 === 0) {
      createPowerUp();
    }
  }

  function checkCatchPowerUp() {
    let caught = powerUps.some(function(powerUp) {
      return player.checkCollision(powerUp);
    });  
    if (caught) {
      powerUps.forEach((powerUp, index) => {
        powerUps.splice(index, 1);
        background.score += 10;
        scoreNumber.innerText = background.score;
      });
    };
  }

  function createSuperObstacle() {
    const min = Math.ceil(90);
    const max = Math.floor(910);
    const superObstacleX = Math.floor(Math.random() * (max - min)) + min;
    superObstacles.push(new SuperObstacles(canvas, context, superObstacleX, 180, 200));
  }

  function updateSuperObstacles() {
    for (let i = 0; i < superObstacles.length; i += 1) {
      superObstacles[i].move();
      superObstacles[i].draw();
      if (superObstacles[i].posY >= canvas.height) {
        superObstacles.shift();
      };
    };
    if (frames % 600 === 0) {
      createSuperObstacle();
    }
  }

  function checkGameOver() {
    let caught = superObstacles.some(function(superObstacle) {
      return player.checkCollision(superObstacle);
    });  
    if (caught || background.score < 0) {
      isGameOver = true;
      clearInterval(animationId);
      clearCanvas();
      context.drawImage(gameOver, 0, 0, canvas.width, canvas.height);
      context.fillStyle = 'red';
      context.font = '50px Arial';
      context.fillText('GAME OVER', 400, 300);
    };
  }

  function checkWin() {
  if (background.score >= 50) {
      clearInterval(animationId);
      clearCanvas();
      context.drawImage(gameWin, 0, 0, canvas.width, canvas.height);
      context.fillStyle = 'green';
      context.font = '50px Arial';
      context.fillText('YOU DID GREAT!', 300, 50);
    };
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function updateCanvas() {
    frames += 1;
    clearCanvas();
    background.draw();
    player.draw();
    updateIngredients();
    checkCatchIngredient();
    updateObstacles();
    checkCatchObstacle();
    updatePowerUps();
    checkCatchPowerUp();
    updateSuperObstacles();
    checkGameOver();
    checkWin();
  }

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.addEventListener('keydown', (event) => {
    if (isGameOver === false && isGameRunning === true) {
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
    }
  });
}