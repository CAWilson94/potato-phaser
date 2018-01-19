var path = require('path');
var liveReloadPLugin = require('webpack-livereload-plugin');

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
	entry: './app.js',
	output: {
		filename: 'bundle.js'	
	},

	plugins: [new liveReloadPLugin()],
	module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader']},
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] }
    ]
  },

  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  }

}