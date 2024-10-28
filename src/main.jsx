// const { hydrate } = require('react-dom');
const { hydrateRoot } = require('react-dom/client');

const App = require('./App.jsx');
const React = require('react');

// hydrate(<App></App>,document.getElementById('root'));
hydrateRoot(document.getElementById('root'),<App></App>);
