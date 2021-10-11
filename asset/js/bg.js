class Background {
    constructor(bg){
        this.bg = bg;
        this.currentImage = 0;
        this.x = 0;
        this.width = GAME_WIDTH;
        this.height = GAME_HEIGHT;
    }

    update() {
        // this.x -= GAME_SPEED / 2;
        // if (this.x <= -GAME_WIDTH){
        //     this.x = 0;
        // }
    }

    clear() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, this.width, this.height);
    }

    draw() {
        this.clear();
        ctx.drawImage(this.bg[this.currentImage], 0, 0, this.width, this.height);
        // ctx.drawImage(this.bg[this.currentBackground], this.x + this.width, 0, this.width, this.height);
    }
}