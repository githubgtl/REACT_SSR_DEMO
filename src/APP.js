const React = require('react');
const {useState} = React
console.log(useState, typeof useState);

function App() {
    // let count = 1
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <div>{count}</div>
        </div>
    );
}

module.exports = App
