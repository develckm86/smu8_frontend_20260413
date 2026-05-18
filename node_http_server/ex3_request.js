import http from "node:http"
import fs from "node:fs/promises"

const app=http.createServer(async (req,res)=>{
    let url=new URL(req.url,"http://localhost:4000");
    console.log(url);
    // res.setHeader("Content-Type","text/html;charset=utf-8")
    // res.end("<h1>요청정보~</h1>");
    if(url.pathname==="/"){ //홈페이지
        const html=await fs.readFile("./ex3_index.html");
        res.end(html);
    }else if(url.pathname==="/sum.do"){
        //파라미터는 무조건 문자열
        let a=url.searchParams.get("a");
        let b=url.searchParams.get("b");
        a=Number(a);
        b=Number(b);
        res.end(`<h1>a+b=${a+b}</h1>`)
    }else if(url.pathname==="/users"){ //users 페이지
        res.setHeader("Content-Type", "application/json;charset=utf-8")
        const users=[{name:"경민"},{name: "코딩"}];
        res.end(JSON.stringify(users))
    }else{ //존재하지않음!
        res.statusCode=404;
        res.end("not found 404")
    }
})
app.listen(4000,()=>{
    console.log("http://127.0.0.1:4000");
});