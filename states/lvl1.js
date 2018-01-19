import Phaser from "phaser";

export default class Level1State extends Phaser.State {
	create() {
		let ship = game.add.sprite(0, 0, 'ship');
	}
}