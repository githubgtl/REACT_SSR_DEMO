// const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // devtool: "source-map",
    mode: "development",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].js",
      libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ],
                exclude: /node_modules/,
            }
        ],
    },
    entry: {main: "./src/App.js"},
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html",
            chunks: ["main"]
        })
    ]
}