const path = require('path');
const { merge } = require('webpack-merge');
const baseOption = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseOption,{
    entry: path.resolve(__dirname, "../src/main.jsx"),
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].client.js",
	},
	plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../src/index.html"),
            filename: "index.html",
			inject:'body',
			scriptLoading: 'defer'
        })
    ],
	resolve: {
		extensions: ['.js', '.jsx'],
	}
})