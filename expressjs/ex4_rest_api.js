//ex04_rest_api REST API : url과 method 로 동적리소스(라우터)의 목적을 표현(설계)
//  put  /user : 수정
//  post  /user : 등록
//  get  /user : 조회
//  get  /user?page=2 : 조회
//  get  /123/user : 상세 조회 (파라미터를 url에 포함)
//  delete  /user : 삭제
//patch, put, delete 방식은 비동기통신에서만 가능!
// /123/user : 파라미터에 url 을 포함하는 것을 서버가 지원
import express from "express";
import userRouter from "./ex4_userRouter.js";
const app=express();


app.get("/",(req, res)=>{
   res.sendFile("/expressjs/public/ex4_index.html",{root:process.cwd()})
});

app.use("/user",userRouter);
app.get("/:id/user",(req, res)=>{
    let id=req.params.id;
    res.send(`<h1>/123/user 페이지 id=${id}</h1>`)
})

app.listen(8989,()=>{
    console.log("http://localhost:8989");
})



