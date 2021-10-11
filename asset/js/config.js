const flappyBirdStorage = storage('flappybird');

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const birdSelect = document.querySelectorAll('.bird-select');
const bgSelect = document.querySelectorAll('.bg-select');
const pipeSelect = document.querySelectorAll('.pipe-select');

const sideRight = document.querySelector('.side-right');
const gameoverContainer = document.querySelector('.gameover-container');
const scoreContainer = document.querySelector('.score-container');
const currentScore = document.querySelector('.current-score');
const hightScore = document.querySelector('.hight-score');
const counter = document.querySelector('.counter');
const buttonGroup = document.querySelector('.button-group')
const startButton = document.querySelector('.start-button');
const reloadButton = document.querySelector('.reload-button');

const flySound = document.getElementById('fly-sound');
const scoreSound = document.getElementById('score-sound');
const hitSound = document.getElementById('hit-sound');
const dieSound = document.getElementById('die-sound');

// const BEGIN_START_IMAGE = new Image();
// BEGIN_START_IMAGE.src = './asset/img/message.png';
// BEGIN_START_IMAGE.addEventListener('load', function() {
//     ctx.drawImage(BEGIN_START_IMAGE, 50, 50, GAME_WIDTH - 100, GAME_HEIGHT - 100);
// })

let GAME_SPEED = 3;
const GAME_SPEED_DEFAULT = GAME_SPEED;
const GAME_FRAME = 30;

const GAME_HEIGHT = window.innerHeight < 700 ? window.innerHeight : 700;
const GAME_WIDTH = GAME_HEIGHT / 2;

const BIRD_START_X = Math.round(GAME_WIDTH / 4 );
const BIRD_WIDTH = 44;
const BIRD_HEIGHT = 34;

const BUTTERFLY_WIDTH = 120;
const BUTTERFLY_HEIGHT = 120;

const BASE_HEIGHT = Math.round(GAME_HEIGHT / 5);
const BASE_Y = GAME_HEIGHT - BASE_HEIGHT;

const PIPE_WIDTH = 52;
const PIPE_HEIGHT = 320;
const PIPE_SPACE = Math.round((GAME_HEIGHT - BASE_HEIGHT) / 4);

const MAX_BOTTOM = GAME_HEIGHT - BIRD_HEIGHT;
const ACCELERATION = 1;
const BIRD_FLY = -13;

const CURRENT_GAME_FRAME = Math.round(1000 / GAME_FRAME);

//config position pipe random
const GAME_HEIGHT_NOT_BASE = GAME_HEIGHT - BASE_HEIGHT;
const PIPE_Y_START = GAME_HEIGHT_NOT_BASE - PIPE_HEIGHT;
const LIMIT = PIPE_SPACE + PIPE_HEIGHT - PIPE_Y_START;

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;


//Bird data

const yellowBird1 = new Image();
const yellowBird2 = new Image();
const yellowBird3 = new Image();
const yellowBird4 = new Image();
yellowBird1.src = './asset/img/bird1.png';
yellowBird2.src = './asset/img/bird2.png';
yellowBird3.src = './asset/img/bird3.png';
yellowBird4.src = './asset/img/bird4.png';

const birds = [yellowBird1, yellowBird2, yellowBird3, yellowBird4];

//Butterfly data

const butterfly1 = new Image();
const butterfly2 = new Image();
const butterfly3 = new Image();
butterfly1.src = './asset/img/butterfly1_1.png';
butterfly3.src = './asset/img/butterfly1_3.png';
butterfly2.src = './asset/img/butterfly1_2.png';

const butterflys = [butterfly1, butterfly2, butterfly3];

const butterflySay = [
    'A Dương bắt em đi',
    'Cố lên anh ư ư',
    'Ư Ư Ư Ư kimochi',
]

//background data

const background1 = new Image();
const background2 = new Image();
const background3 = new Image();
const background4 = new Image();

background1.src = './asset/img/bg1.png';
background2.src = './asset/img/bg2.png';
background3.src = './asset/img/bg3.png';
background4.src = './asset/img/bg4.png';

const backgrounds = [background1, background2, background3, background4];

//pipe data

const pipeGreenUp = new Image();
const pipeGreendown = new Image();
pipeGreenUp.src = './asset/img/pipe-green-up.png';
pipeGreendown.src = './asset/img/pipe-green-down.png';

const pipeGreen = [pipeGreenUp, pipeGreendown]

const pipeRedUp = new Image();
const pipeReddown = new Image();
pipeRedUp.src = './asset/img/pipe-red-up.png';
pipeReddown.src = './asset/img/pipe-red-down.png';

const pipeRed = [pipeRedUp, pipeReddown]

const pipes = [pipeGreen, pipeRed];