//ex4_userRouter
import express from "express";
const router=express.Router();
// "/user"
router.get("/",(req, res)=>{
    let id=req.query.id
    res.send(`<h1>user 페이지 id=${id}</h1>`)
});
// "/user/123"
router.get("/:id",(req, res)=>{
    let id=req.params.id;
    let page=req.query.page;
    res.send(`<h1>user/123 페이지 id=${id},page=${page}</h1>`)
});
router.post("/",(req,res)=>{
    console.log(req.body,"회원가입성공");
    res.redirect("/")
});
router.put("/",(req,res)=>{
    console.log(req.body,"회원수정성공");
    res.redirect("/")
});
//요청해더 본문에 json으로 데이터 전송
router.use(express.json());
router.delete("/",(req,res)=>{
    console.log(req.body,"회원삭제성공");
    res.redirect("/")
})

export default router;