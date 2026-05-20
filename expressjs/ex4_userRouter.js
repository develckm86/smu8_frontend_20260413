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

export default router;