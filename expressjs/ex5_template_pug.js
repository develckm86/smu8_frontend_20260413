//동적 html 렌더링 엔진 pug
import express from "express";
const app=express();
app.set("views","./expressjs/views")
app.set("view engine","pug");

app.get("/",(req, res)=>{
    res.render("index",{
        title:"안녕하세요 퍼그입니다.",
        colors :["빨강","파랑","초록","보라"]
    });
});
app.listen(5555,()=>{
    console.log("http://localhost:5555");
});