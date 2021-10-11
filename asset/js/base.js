class Base {
    constructor(){
        this.x = 0;
        this.height = BASE_HEIGHT;
        this.startY = BASE_Y;
        this.image = new Image();
        this.image.src = './asset/img/base.png';
    }

    update() {
        this.x -= GAME_SPEED;
        if (this.x <= -GAME_WIDTH){
            this.x = 0;
        }
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.startY, GAME_WIDTH, this.height);
        ctx.drawImage(this.image, this.x + GAME_WIDTH, this.startY, GAME_WIDTH, this.height);
    }
}