//express 미들웨어 : 요청 이전에 실행 (java filter,interceptor)
import express from "express";
const app=express();
app.use(express.urlencoded({extended:true}))
//post로 전달된 요청해더본문의 쿼리스트링 처리!
app.use((req,res,next)=>{
    //자동로그인,검사,설정
    console.log("첫번째 use 호출");
    next();
})
app.use((req,res,next)=>{
    console.log("두번째 use 호출");
    next();
})
app.get("/",(req,res)=>{
    let path=process.cwd()+"/expressjs/public/index.html";
    res.sendFile(path);
});
//회원가입과 같은 처리하는 페이지를 action 페이지라 부름
//action 페이지는 처리만하고 응답은 다른페이지로 위임(302redirect)
app.post("/signup",(req,res)=>{
    console.log(req.query)//url?쿼리스트링
    console.log(req.body)//요청해더의 본문
    console.log(req.body.userName+" 회원가입성공");
    res.redirect("/");//statusCode 302
});

app.get("/err",(req,res)=>{
    throw new Error("강제로 에러발생");
    res.send("error page");
});
app.use((req, res)=>{
    //마지막 미들웨어는 찾는페이지가 없을때만 호출
    //404일때 호출
    res.status(404).send("Not Found 404!!!")
})
app.use((err,req,res,next)=>{ //에러발생시 실행되는 미들웨어
    console.log("에러미들웨어", err);
    res.status(500).send("error page 500!!!")
})


app.listen(7979,()=>{
    console.log("http://localhost:7979");
});
