class Controller {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.background = new Background(this.canvas, this.ctx);
        this.player = new Player(this.canvas, this.ctx, 350, 400, 240, 300);
        this.score = document.querySelector(".game-score");
        this.currentScore = this.score.innerText;
    };
    showScore() {
        this.score.style.display = "block";
    };
    updateScore() {

    };
    startGame() {
        this.updateCanvas();
        this.showScore();
        this.updateScore();
    };

    updateCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.background.draw();
        this.player.draw();
        requestAnimationFrame(this.updateCanvas.bind(this));
    };
};
