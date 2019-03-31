const config = require('./webpack.base')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const webpackServerConf = require('./webpack.server.js')
const webpackServer = require('webpack-dev-server')
const appConf = require('./app.conf')

config.mode = 'development'

// Enable sourcemaps for debugging webpack's output.
config.devtool = 'eval-source-map'

Object.assign(config.output, {
	filename: '[name].js',
	chunkFilename: '[id].js',
	publicPath: '/'
})

config.entry.app.unshift('webpack-dev-server/client?http://' + appConf.serverName + ':' + appConf.port + '/', 'webpack/hot/dev-server')

const appWebPath = 'http://' + appConf.serverName + ':' + appConf.port

config.plugins = (config.plugins || []).concat([
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'test/index.html'
	}),
	new webpack.HotModuleReplacementPlugin(),

	new webpack.DefinePlugin({
		DEBUG: true
	}),
	new OpenBrowserPlugin({ url: appWebPath })
])

const compiler = webpack(config)
const webServer = new webpackServer(compiler, webpackServerConf)
webServer.listen(appConf.port, appConf.serverName)
