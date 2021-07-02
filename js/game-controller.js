class Background {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.posX = 0;
        this.posY = 0;
        this.score = 0;
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

    checkCollision(object) {
        if (this.posX + 80 < object.posX + object.width &&
            this.posX + 80 + 90 > object.posX &&
            this.posY + 150 < object.posY + object.height &&
            this.posY + 150 + 60 > object.posY)
        return true;
    }
};


class Ingredients {
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
        const imgSrc = ['./images/onion.png', './images/pepper.png', './images/beans.png'];
        img.src = imgSrc[Math.floor(Math.random() * imgSrc.length)];
        this.speed = 4;
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

class Obstacles {
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
        const imgSrc = ['./images/jello.png', './images/dundie-award.png', './images/beet.png'];
        img.src = imgSrc[Math.floor(Math.random() * imgSrc.length)];
        this.speed = 4;
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

class PowerUp {
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
        img.src = './images/michael-parkour.png';
        this.speed = 5;
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

class SuperObstacles {
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
        img.src = './images/photocopier.png';
        this.speed = 5;
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