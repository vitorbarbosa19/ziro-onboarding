const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						],
						plugins: [
							'@babel/transform-runtime',
							'@babel/plugin-proposal-class-properties'
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'raw-loader']
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ]
}

if (process.env.NODE_ENV !== 'production') {
	const { backendUrl, clientList, representatives, hunters } = require('./credentials')
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				BACKEND_URL: JSON.stringify(backendUrl),
				CLIENT_LIST: JSON.stringify(clientList),
				REPRESENTATIVES: JSON.stringify(representatives),
				HUNTERS: JSON.stringify(hunters)
			}
		})
	)
}

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
				CLIENT_LIST: JSON.stringify(process.env.CLIENT_LIST),
				REPRESENTATIVES: JSON.stringify(process.env.REPRESENTATIVES),
				HUNTERS: JSON.stringify(process.env.HUNTERS),
				NODE_ENV: JSON.stringify('production')
			}
		})
	)
}

module.exports = config
