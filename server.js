const fs = require("fs");
const path = require("path");
const App = require('./dist/main');
const express = require("express");
const { renderToString } = require('react-dom/server');
function render(req, res){
    res.setHeader('Content-Type', 'text/html');
    const app = RenderMarkUp(renderToString(App));
    res.send(app);
}

const RenderMarkUp = (content)=>{
    console.log(content);
    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root">${content}</div>
    </body>
    </html>`
}
const resolve = file => path.resolve(__dirname, file);
const app = express();

const isProd = process.env.NODE_ENV === 'production';
const serve = (path, cache) =>
    express.static(resolve(path), {
      maxAge: cache && isProd ? 1000 * 60 * 60 * 24 * 30 : 0,
    });
  
  // 以dist文件开启服务,服务映射的路径为/dist
app.use("/dist", serve("./dist", true));
// app.use("/public", serve('./public', true));
app.get('*', render)

app.listen(3000, () => {
    console.log('server is running on port 3000');
})