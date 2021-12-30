import Paddle from './paddle.js'; // Get Paddle Class ! MAKE SURE THAT IN HTML FILE, THE JS FILE IS LINKED LIKE THIS 	<script type="module" src="src/main.js"></script>
import InputHandler from './input.js';
import Ball from './ball.js';
import { buildLevel, level1, level2, level3, level4 } from './levels.js';
import { randInt } from './randInt.js';

const GAMESTATE = {
	PAUSED: 0,
	RUNNING: 1,
	MENU: 2,
	GAMEOVER: 3,
	NEWLEVEL: 4,
	WIN: 5
}

export default class Game {
	constructor(gameWidth, gameHeight) {
		this.gameWidth = gameWidth;
		this.gameHeight = gameHeight;
		this.gamestate = GAMESTATE.MENU;
		this.paddle = new Paddle(this);
		this.ball = new Ball(this);
		this.gameObjects = [];
		this.bricks = [];
		this.lives = 1;
		this.levels = [level1, level2, level3, level4];
		this.currentLevel = 0; // First entry in index.
		this.score = 0;
		this.showScore = false;
		this.scoreX = 10;
		this.version = "v4.2.0";
		this.author = "Michael S.";
		this.year = "2022";
		this.levelsPassed = 0;
		this.finished = false;
		new InputHandler(this.paddle, this);
	}
 
	start() { 
		if(this.gamestate !== GAMESTATE.MENU && this.gamestate !== GAMESTATE.NEWLEVEL) return;
		this.bricks = buildLevel(this, this.levels[this.currentLevel]);
		this.ball.reset();
		this.showScore = true;
		this.gameObjects = [
			this.ball,
			this.paddle
		];
		this.gamestate = GAMESTATE.RUNNING;
	}

	update(deltaTime) {
		if(this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER || this.gamestate === GAMESTATE.WIN) {
			this.showScore = false;
			return;
		}
		if(this.levelsPassed == 4) {
			this.finished = true;
		}
		
		if(this.bricks.length === 0 && this.finished != true) {
			this.currentLevel++;
			this.levelsPassed++;
			if(this.levelsPassed >= 4) {
				this.gamestate = GAMESTATE.WIN;
				this.finished = true;
			} else {
				this.gamestate = GAMESTATE.NEWLEVEL;
				this.start();
			}
		}

		if(this.score > 9) {
			this.scoreX = 20;
		}

		[...this.gameObjects, ...this.bricks].forEach(object => object.update(deltaTime));
		this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
	}

	draw(ctx) {
		[...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx));
		if(this.gamestate === GAMESTATE.PAUSED) {
			ctx.rect(0,0,this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,0,0,0.5)";
			ctx.fill();
			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
		}
		if(this.gamestate === GAMESTATE.MENU) {
			ctx.rect(0,0,this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,0,0,1)";
			ctx.fill();
			ctx.font = "12px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(this.author, 28, 21);
			ctx.fillText(this.version, 16, 10);
			ctx.fillText(this.year, 13, 32);
			ctx.font = "30px Arial";
			ctx.fillText("Press Space To Start!", this.gameWidth / 2, this.gameHeight / 2);
		}
		if(this.lives === 0) {
			this.gamestate = GAMESTATE.GAMEOVER;
			ctx.rect(0,0,this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(100,0,0,1)";
			ctx.fill();
			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("GAME OVER!", this.gameWidth / 2, this.gameHeight / 2);
		}
		if(this.finished === true) {
			this.gamestate = GAMESTATE.WIN;
			let finalscore = "Score: " + this.score; 
			ctx.rect(0,0,this.gameWidth, this.gameHeight);
			ctx.fillStyle = "rgba(0,100,100,1)";
			ctx.fill();
			ctx.font = "30px Arial";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("YOU WIN! :D", this.gameWidth / 2, this.gameHeight / 2);
			ctx.fillText(finalscore, 400, 450);
		}
		if(this.showScore) {
			ctx.font = "30px Arial";
			ctx.fillStyle = "black";
			ctx.textAlign =  "center";
			ctx.fillText(this.score, this.scoreX, 25);
		}
	}

	togglePause() {
		if(this.gamestate == GAMESTATE.PAUSED) {
			this.gamestate = GAMESTATE.RUNNING;
		} else {
			this.gamestate = GAMESTATE.PAUSED;
		}
	}
}