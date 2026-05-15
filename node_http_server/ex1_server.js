//ex1_server
import http from "node:http"
const server=http.createServer((req,res)=>{
    res.end(`
        <head><meta charset="UTF-8"></head>
        <h1>nodejs server 안녕</h1>
    `);
});
server.listen(3000);

