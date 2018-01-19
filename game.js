import 'pixi';
import 'p2';
import Phaser from 'phaser';
import BootState from './states/boot';
import Level1State from './states/lvl1';

export default class TestGame extends Phaser.Game{
	constructor() {
		super(document.innerWidth, window.innerHeight, Phaser.CANVAS, 'game', null);
		this.state.add('Boot', BootState, true);
		this.state.add('Level1', Level1State, false);
	}
}





