const React = require('react');
const {useState} = React;

function App() {
    const [ count, setCount ] = useState(0);
	console.log("xxxx")
    return (
		<div id='root'>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
    );
}

module.exports = App
