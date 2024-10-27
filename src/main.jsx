const ReactDOM = require('react-dom/client');
const App = require('./APP.jsx');
const React = require('react');
console.log(1);

const domNode = document.getElementById('root');
console.log(ReactDOM.hydrate);

ReactDOM.hydrate(<APP />, domNode);