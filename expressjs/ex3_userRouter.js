import express from "express";
const router=express.Router();
//"users/"
router.get("/",(req, res)=>{
    res.send("users HOME")
});
//....

export default router;
//router 를 모듈로 사용하겠다 (default 오직 한개만 반환되는 것 =>이름 변경가능)