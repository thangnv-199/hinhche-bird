class Butterfly {
    constructor(butterfly){
        this.butterfly = butterfly;
        this.currentImage = 0;
        this.width = BUTTERFLY_WIDTH;
        this.height = BUTTERFLY_HEIGHT;
    }

    update() {
        
    }

    draw() {
        ctx.drawImage(
            this.butterfly[this.currentImage], 
            GAME_WIDTH - BUTTERFLY_WIDTH - 10, 
            GAME_HEIGHT / 2 - BUTTERFLY_HEIGHT, 
            this.width, 
            this.height
        );
        ctx.fillStyle = '#fff'
        ctx.font = "12px Monospace";
        ctx.fillText(
            'A Dương bắt em đi',
            GAME_WIDTH - BUTTERFLY_WIDTH - 20, 
            GAME_HEIGHT / 2 - BUTTERFLY_HEIGHT - 10, 
        );
    }
}