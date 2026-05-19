//ex4_node_server
//타입스크립트로 node 서버 만들기
import http,{Server,IncomingMessage,ServerResponse} from "node:http";
import fs from "node:fs/promises";
const app:Server=http.createServer(async (req:IncomingMessage,res:ServerResponse)=>{
    //req.url! : ts 무조건 undefined가 아니야!
    //const url=new URL(req.url!,"http://localhost:7777");
    const url=new URL( req.url || "/" ,"http://localhost:7777");
    //동적리소스의 경로 : 약속 (/, /products, /product?id=, /user)
    if(url.pathname==="/"){//라우팅
        let html:Buffer = await fs.readFile("./typescript/static/index.html");
        res.end(html);
    }else if(url.pathname==="/products"){
        res.end("products info")
    }else if(url.pathname==="/product"){
        let id:string|null=url.searchParams.get("id");
        res.end(id+": product detail")
    }else{
        res.statusCode=404;
        res.end("Not Found");
    }
});
app.listen(7777,()=>{
    console.log("http://localhost:7777")
})
