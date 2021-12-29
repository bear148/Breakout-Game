import { detectCollision } from "./collisionDetection.js";

export default class Ball {
	constructor(game) {
		this.image = document.getElementById("ball");
		this.position = {
			x: 5,
			y: 400
		};
		this.speed = {
			x: 4, y: -2
		};
		this.size = 16;
		this.gameWidth = game.gameWidth;
		this.gameHeight = game.gameHeight;
		this.game = game;
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
	}

	update(dt) {
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;

		// Wall Detection
		if(this.position.x + this.size > this.gameWidth || this.position.x < 0) {
			this.speed.x = -this.speed.x;
		}

		// Top Wall
		if(this.position.y < 0) {
			this.speed.y = -this.speed.y;
		}
		// Bottom
		if(this.position.y + this.size > this.gameHeight) {
			this.game.lives--;
		}

		// Paddle Collision
		if(detectCollision(this, this.game.paddle)){
			this.speed.y = -this.speed.y;
			this.position.y = this.game.paddle.position.y - this.size;
		}
	}

	reset() {
		this.position = { x: 10, y: 400 };
		this.speed = { x: 4, y: -2 };
	}
}