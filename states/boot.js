import Phaser from "phaser";

export default class BootState extends Phaser.State {

	preload(){
		this.load.image('ship', 'images/ship.png');
	}

	create() {
		this.stage.backgroundColor =  "#ff0000"; // red 
		let ship = game.add.sprite(0, 0, 'ship');
	}

	render(){
		//this.state.start("Level1");
	}
}

