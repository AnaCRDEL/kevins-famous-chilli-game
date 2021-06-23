class Player {
    constructor(canvas, context, x, y, w, h) {
        this.canvas = canvas;
        this.context = context;
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        this.speed = 0;
        const img = new Image();
        img.addEventListener('load', () => {
            this.img = img;
        });
        img.src = 'images/kevin.png';
    }

    draw() {
        this.context.globalAlpha = 1;
        this.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    };

    move() {
        this.posX += this.speed;
    };
};