const fs = require("fs");
const path = require("path");
const App = require('./src/serverApp');
const express = require("express");
const { renderToString } = require('react-dom/server');

function render(req, res){
    res.setHeader('Content-Type', 'text/html');
	// console.log(App)

	const html = `
	<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
			<script src="./dist/main.client.js" defer></script>
		</head>
		<body>
			<div id="root">${renderToString(App)}</div>
		</body>
		</html>
	`
	
    res.send(html);
}

const resolve = file => path.resolve(__dirname, file);
const app = express();

const isProd = process.env.NODE_ENV === 'production';
const serve = (path, cache) =>
	express.static(resolve(path), {
		maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0,
});
  
app.use("/dist", serve("./dist", true));
app.get('*', render)

app.listen(3000, () => {
    console.log('server is running on port 3000');
})