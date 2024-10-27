const ReactDOM = require('react-dom/client');
const App = require('./APP.jsx');
const React = require('react');

const domNode = document.getElementById('root');
debugger
ReactDOM.hydrateRoot(domNode,<App></App>);
