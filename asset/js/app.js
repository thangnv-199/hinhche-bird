const app = {

    init: function() {
        backgrounds
        // const birdIndex = this.getStorageData('bird');
        const backgroundIndex = this.getStorageData('background');
        const pipeIndex = this.getStorageData('pipe');
        this.background = new Background(backgrounds);
        this.base = new Base();
        this.bird = new Bird(birds);
        this.butterfly = new Butterfly(butterflys);
        this.pipe = new Pipe(pipes[pipeIndex]);
        this.check = false;
        this.score = 0;
        this.hightScore = this.getStorageData('hightscore');
        this.counter = this.getStorageData('counter');
    },

    listenerEvent: function() {

        

        canvas.addEventListener('click', () => {
            if (this.status !== 'running' || !this.status) return;
            flySound.play();
            this.bird.flying();
        })

        document.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                if (this.status !== 'running' || !this.status) return;

                this.background.currentImage++;
                if (this.background.currentImage === this.background.bg.length) {
                    this.background.currentImage = 0;
                }

                flySound.play();
                this.bird.flying();
            }

            else if (e.key === 'Enter') {
                switch (this.status) {
                    case 'running' :
                        this.stop();
                        break;
                    case 'pause' :
                        this.start();
                        break;
                    case 'end' :
                        return;
                        break;
                }
            }
        })

        startButton.addEventListener('click', () => {
            sideRight.classList.add('--hide');
            currentScore.classList.remove('--hide');
            this.init();
            this.start();
        })

        reloadButton.addEventListener('click', () => {
            window.location.reload();
        })

        birdSelect.forEach((bird, index) => {
            bird.addEventListener('click', () => {
                birdSelect.forEach(i => { i.classList.remove('selected') })
                bird.classList.add('selected');
                flappyBirdStorage.set('bird', index);
            })
        })

        bgSelect.forEach((bg, index) => {
            bg.addEventListener('click', () => {
                bgSelect.forEach(i => { i.classList.remove('selected') })
                bg.classList.add('selected');
                // ctx.drawImage(backgrounds[index], 0, 0, GAME_WIDTH, GAME_HEIGHT);
                flappyBirdStorage.set('background', index);
            })
        })

        pipeSelect.forEach((pipe, index) => {
            pipe.addEventListener('click', () => {
                pipeSelect.forEach(i => { i.classList.remove('selected') })
                pipe.classList.add('selected');
                flappyBirdStorage.set('pipe', index);
            })
        })
        
        this.setGameInfo();
    },

    setGameInfo: function() {

        this.status = null;

        birdSelect[this.getStorageData('bird')].classList.add('selected');
        pipeSelect[this.getStorageData('pipe')].classList.add('selected');

        hightScore.innerHTML = this.getStorageData('hightscore');
        counter.innerHTML = this.getStorageData('counter');
    },

    getStorageData: function(key) {
        return flappyBirdStorage.get(key) || 0;
    },

    checkGameOver() {
        if (this.bird.y >= MAX_BOTTOM) {
            dieSound.play();
            this.endGame();
        } 

        else if (
            (
                this.bird.x + BIRD_WIDTH - GAME_WIDTH >= this.pipe.x &&
                this.bird.x - GAME_WIDTH < this.pipe.x + PIPE_WIDTH
            ) && (
                this.bird.y + 5 < this.pipe.y - PIPE_SPACE ||
                this.bird.y + BIRD_HEIGHT > this.pipe.y + 5
            )
        ) {
            hitSound.play();
            this.endGame();
        }

        if (this.bird.x - GAME_WIDTH > this.pipe.x + PIPE_WIDTH) {
            this.check = true;
        } else {
            if (this.check) {

                
                
                this.score++;
                this.check = false;
                currentScore.innerHTML = this.score;
                scoreSound.play();

                if (this.score % 10 === 0) {
                    GAME_SPEED = GAME_SPEED_DEFAULT + this.score / 10;
                    this.butterfly.currentImage++;
                    if (this.butterfly.currentImage === this.butterfly.butterfly.length) {
                        this.butterfly.currentImage = 0;
                    }
                }
            }
        }
    },

    draw: function() {
        this.background.draw();
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();
        this.butterfly.draw();
    },

    update: function() {
        this.background.update();
        this.pipe.update();
        this.base.update();
        this.bird.update();
        this.checkGameOver()
    },

    endGame: function() {
        if (this.score > this.hightScore){
            hightScore.innerHTML = this.score;
            flappyBirdStorage.set('hightscore', this.score);
        }
        this.counter++;
        counter.innerHTML = this.counter;
        flappyBirdStorage.set('counter', this.counter);

        gameoverContainer.classList.remove('--hide');
        this.status = 'end';
        clearInterval(this.loop)
    },

    start: function() {
        this.status = 'running';
        this.loop = setInterval(() => {
            console.log('Game is running!')
            this.update();
            this.draw();
        }, CURRENT_GAME_FRAME)
    },

    stop: function() {
        this.status = 'pause';
        clearInterval(this.loop)
    },

}
app.listenerEvent();