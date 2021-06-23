class Background {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.posX = 0;
        this.posY = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        const img = new Image();
        img.addEventListener('load', () => {
            this.img = img;
        });
        img.src = 'images/background.png';
    }

    draw() {
        this.context.globalAlpha = 0.4;
        this.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    };
}