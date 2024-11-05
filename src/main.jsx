const { hydrateRoot } = require('react-dom/client');
import {
	createBrowserRouter,
    RouterProvider
} from "react-router-dom";
const routes = require("./routes/router.jsx")
let router = createBrowserRouter(routes);
const App = require('./App.jsx');
const React = require('react');

// hydrateRoot(document.getElementById('root'),<App/>);
hydrateRoot(document.getElementById('root'),<RouterProvider router={router} />);
