const fs = require("fs");
const path = require("path");
const App = require('./App.jsx');
const express = require("express");
const React = require('react');
const { renderToString } = require('react-dom/server');
const { createStaticHandler, createStaticRouter, StaticRouterProvider } = require("react-router-dom/server");
const routes = require("./routes/router.jsx");
const createFetchRequest = require("./request");
async function render(req, res) {
	// express 转 fetch请求
	const fetchRequest = createFetchRequest(req);
	let context = await handler.query(fetchRequest);
	let router = createStaticRouter(
		handler.dataRoutes,
		context
	);
	res.setHeader('Content-Type', 'text/html');
	const html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
	const resHtml = html.replace("<!--target-cotent-->", renderToString(<StaticRouterProvider
		router={router}
		context={context}
	/>));
	res.send(resHtml);
}
let handler = createStaticHandler(routes);
const resolve = file => path.resolve(__dirname, file);
const app = express();

const isProd = process.env.NODE_ENV === 'production';
const serve = (path, cache) => {
	console.log(resolve(path))
	return express.static(resolve(path), {
		maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0,
	});
}

app.use("/dist", serve("../dist", true));
app.get('*', render)

app.listen(3000, () => {
	console.log('server is running on port 3000');
})