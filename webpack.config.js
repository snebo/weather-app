const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		clean: true,
	},
	devtool: 'eval-source-map',
	devServer: {
		watchFiles: ['src/**/*'], // this updates when anythin gchanges
	},
	plugins: [
		new HtmlWebpackPlugin({
			// link the file here
			template: './src/index.html',
		}),
		new DotenvWebpackPlugin({
			systemvars: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
