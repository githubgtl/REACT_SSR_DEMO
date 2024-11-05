const React = require("react");
const App = require("../APP.jsx")
const Test = require("../components/test.jsx")
const { json, useLoaderData } = require("react-router-dom");

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/test",
    element: <Test />
  }
];

module.exports = routes;