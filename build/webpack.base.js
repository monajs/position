const path = require('path')

module.exports = {
	entry: {
		app: ['./test/index.js']
	},
	output: {
		filename: '[name].js',
		publicPath: '/',
		path: path.resolve(__dirname, '../assets')
	},

	resolve: {
		extensions: ['.js', '.json']
	},

	resolveLoader: {
		modules: ['node_modules']
	}
}
