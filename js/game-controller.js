class Background {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.posX = 0;
        this.posY = 0;
        const img = new Image();
        img.onload = () => {
            this.img = img;
        };
        img.src = './images/background.png';
    };

    draw() {
        this.context.globalAlpha = 0.4;
        this.context.drawImage(this.img, this.posX, this.posY, this.canvas.width, this.canvas.height);
    };
};

class Player {
    constructor(canvas, context, x, y, w, h) {
        this.canvas = canvas;
        this.context = context;
        this.posX = x;
        this.posY = y;
        this.width = w;
        this.height = h;
        const img = new Image();
        img.onload = () => {
            this.img = img;
        };
        img.src = './images/kevin.png';
        this.speed = 30;
    }

    draw() {
        this.context.globalAlpha = 1;
        this.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    };

    moveRight() {
        if (this.posX < this.canvas.width - this.width) {
            this.posX += this.speed;
        };
    }

    moveLeft() {
        if (this.posX > 0) {
        this.posX -= this.speed;
        };
    }

    top() {
        return this.posY;
    }

    bottom() {
        return this.posY + this.height;
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }

    checkCollision(obstacle) {
        if (this.posX < obstacle.posX + obstacle.width &&
            this.posX + this.width > obstacle.posX &&
            this.posY < obstacle.posY + obstacle.height &&
            this.posY + this.height > obstacle.posY)
        return true;
    }
};


class Obstacle {
    constructor(canvas, context, x, w, h) {
        this.canvas = canvas;
        this.context = context;
        this.posX = x;
        this.posY = 0;
        this.width = w;
        this.height = h;
        const img = new Image();
        img.onload = () => {
            this.img = img;
        };
        img.src = './images/onion.png';
        this.speed = 3;
    };

    draw() {
        this.context.globalAlpha = 1;
        this.context.drawImage(this.img, this.posX, this.posY, this.width, this.height);  
    };

    move() {
        this.posY += this.speed;
    }

    top() {
        return this.posY;
    }

    bottom() {
        return this.posY + this.height;
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }
};
