//ex3_express_dept
import express from "express";
import oracledb from "oracledb";
import deptRouter from "./ex3_dept_router.js";
import router from "./ex3_dept_router.js";
const app=express();
oracledb.outFormat=oracledb.OUT_FORMAT_OBJECT;
async function initDB(){
    await oracledb.createPool({
        user:"scott",
        password:"tiger",
        connectionString:"localhost:1521/XEPDB1",
        poolMin:1,
        poolMax:5,
        poolIncrement:1,
        queueTimeout : 60000, //클라이언트가 커넥션 대기
        poolTimeout: 60 //사용자가 없을때 커넥션을 정리하기 위해 대기시간
    });
}
await initDB()

app.set("view engine","pug");
app.set("views","./views");

app.use("/dept",deptRouter);

app.get("/",(req, res)=>{
    res.render("index");
});

app.listen(7575,()=>{
    console.log("http://localhost:7575");
})

