//미들웨어를 이용해서 라우터를 분리
import express from "express";
// import router from "./ex3_userRouter.js"
import userRouter from "./ex3_userRouter.js"
//export default 는 이름을 바꿀수 있다.

const app=express();

app.get("/",(req,res)=>{
    res.send("user 라우팅 분리");
});
app.use("/users",userRouter)
// /users/ 조회,등록,수정, 상세조회 ... 페이지를 분리
app.listen(8787,()=>{
    console.log("http://localhost:8787");
})
