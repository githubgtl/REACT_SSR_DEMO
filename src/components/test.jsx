const React = require('react')
const {useState} = React
function test(){
    const [status,setStatus] = useState(0)
    return (<div>
        {status}
        <button onClick={status=>setStatus((pre)=>pre+1)}> + </button>
    </div>)
}
module.exports = test