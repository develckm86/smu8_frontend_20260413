//ex4_post
import fs from "node:fs/promises"
import http from "node:http"
const app=http.createServer(async (req,res)=>{
    const url=new URL(req.url,"http://localhost:4001");
    if(url.pathname==="/"){
        let html=await fs.readFile("./ex4_index.html")
        res.end(html)
    }else if(url.pathname==="/users"){
        let usersJson=await fs.readFile("./ex4_users.json");
        res.setHeader(
            "Content-Type",
            "application/json;charset=utf-8");
        res.end(usersJson)
    }else if(url.pathname==="/users/insert.do" &&
        req.method==="POST"){
        //searchParams : url 의 쿼리스트링만 파싱
        //let id=url.searchParams.get("id");
        //console.log(id);
        let body=""; //요청해더의 쿼리스트링 읽어오기
        req.on("data",(chunk)=>{
              body+=chunk.toString();
        });//비동기적으로 요청해더의 데이터를 불러오기
        req.on("end",()=>{
            console.log("데이터 로딩 성공",body);
            //new URL() : url에서 쿼리스트링처리
            //new URLSerchParams : 쿼리스트링만처리
            const param=new URLSearchParams(body);
            console.log(param);
            res.setHeader("Content-Type","text/html;charset=utf-8")
            let msg=`(${param.get("id")})${param.get("name")}님
             회원가입 성공`;
            res.end(msg);
        })
        //res.end("user signup"); 데이터로딩이 끝나기전에 응답
    }else if(url.pathname==="/user"){
        let id=url.searchParams.get("id");
        let usersJson=await fs.readFile("./ex4_users.json");
        const users=JSON.parse(usersJson);
        let user;
        for(let u of users){
            if(u.id==id)user=u;
        }
        let html=`
            <head><meta charset="UTF-8"></head>
            <h1>조회한 ${id} 유저</h1>
            <ul>
                <li>id: ${user.id}</li>
                <li>name: ${user.name}</li>
                <li>age: ${user.age}</li>
            </ul>
        `;
        res.end(html)
    }else{
        res.statusCode=404;
        res.end("Not Found 404");
    }
})
app.listen(4001,()=>{
    console.log("http://localhost:4001")
});

