//ex2_server_review
//const http=require("http");
import http from "node:http";
//서버 :웹앱
//서버로 요청(event)이오면 처리하는 콜백함수
const app=http.createServer((request,response)=>{
    response.end("hello~ node");
});
app.listen(3001,()=>{
    console.log("서버시작했습니다~!!");
    console.log("http://localhost:3001")
})