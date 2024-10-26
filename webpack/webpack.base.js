module.exports = {
    devtool: isProd ? false : "source-map",
    mode: isProd ? "production" : "development",
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[name]-bundle.js",
      publicPath: "/dist/",
    },
    module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
        exclude: /node_modules/,
      }
    ],
  },
}