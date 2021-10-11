class Pipe {
    constructor(pipe){
        this.pipe = pipe;
        this.x = 0;
        this.y = Math.floor(Math.random() * LIMIT) + PIPE_Y_START;
        this.width = PIPE_WIDTH;
        this.height = PIPE_HEIGHT;
        this.space = PIPE_SPACE;
    }
    update() {
        this.x -= GAME_SPEED;
        if (this.x <= -GAME_WIDTH - this.width){  
            this.x = 0;
            this.y = Math.floor(Math.random() * LIMIT) + PIPE_Y_START;
        }    
    }

    draw() {
        ctx.drawImage(this.pipe[0], this.x + GAME_WIDTH, this.y - this.height - this.space);
        ctx.drawImage(this.pipe[1], this.x + GAME_WIDTH, this.y);
    }
}