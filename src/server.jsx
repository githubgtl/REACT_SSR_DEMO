const fs = require("fs");
const path = require("path");
const App = require('./APP.jsx');
const express = require("express");
const React = require('react');
const { renderToString } = require('react-dom/server');

function render(req, res){
    res.setHeader('Content-Type', 'text/html');

	const html = `
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<script defer src="./main.client.js"></script>
		<div id="root">${renderToString(React.createElement(App))}</div>
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