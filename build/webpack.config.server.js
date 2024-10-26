const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const baseOption = require('./webpack.config.base');

module.exports = merge(baseOption,{
    entry: path.resolve(__dirname, "../src/serverApp.js"),
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].server.js",
		library: {
			type:'commonjs2'
		},
	},
	target: "node",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../src/index.html"),
            filename: "index.html",
        })
    ]
})