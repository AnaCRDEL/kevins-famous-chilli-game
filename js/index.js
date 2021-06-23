const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
const newController = new Controller(canvas, context);


if (startButton) {
    startButton.addEventListener('click', event => {
      newController.startGame();
      startButton.innerText = 'Restart';
    });
};

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowLeft':
    case 'KeyA':
      newController.player.speed -= 4;
      break;
    case 'ArrowRight':
    case 'KeyD':
      newController.player.speed += 4;
      break;
  };
  newController.player.move();
  newController.updateCanvas();
});

document.addEventListener('keyup', (e) => {
  newController.player.speed = 0;
});