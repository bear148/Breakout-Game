import {detectCollision} from "./collisionDetection.js";

export default class Brick2 {
	constructor(game, position) {
		this.image = document.getElementById("brick2");
		this.position = position;
		this.game =  game;
		this.width = 80;
		this.height = 24;
		this.hit = false;
		this.hits = 0;
		this.markedForDeletion = false;
	}

	update() {
		if(detectCollision(this.game.ball, this)) {
			this.game.ball.speed.y = -this.game.ball.speed.y;
			this.markedForDeletion = true;
			this.game.score++;
			this.game.score++;
		};
	}

	draw(ctx) {
		ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}
}