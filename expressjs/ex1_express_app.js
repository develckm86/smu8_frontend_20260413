import express from "express";
const app=express();
//정적리소스 static or public(공유되는)
app.get("/",(req, res)=>{
    //res.send("hello~ expressjs");
    //console.log(process.cwd()); //node가 실행되는 root 경로
    res.sendFile(process.cwd()+"/expressjs/public/index.html");// 절대경로만 사용가능
});
//라우팅 == 동적리소스
app.get("/users",(req,res)=>{
   res.send("users");
});
app.get("/multi",(req,res)=>{
   //url 은 요청정보
    console.log(req.query) //쿼리스트링 ?a=10&b=20 파싱
    let a=req.query.a;
    let b=req.query.b;
    let c=req.query.c;
    res.send(`a*b*c=${a*b*c}`)
});



app.listen(7878,()=>{
    console.log("http://localhost:7878");
});