const path = require('path');
const { merge } = require('webpack-merge');
const baseOption = require('./webpack.config.base');

module.exports = merge(baseOption,{
    entry: path.resolve(__dirname, "../src/server.jsx"),
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].server.js",
		library: {
			type:'commonjs2'
		},
	},
	target: "node",

	resolve: {
		extensions: ['.js', '.jsx'],
	}
})