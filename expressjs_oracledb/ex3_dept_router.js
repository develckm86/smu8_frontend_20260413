//ex3_dept_router
import express from "express";
import oracledb from "oracledb";
const router=express.Router();
router.use(express.urlencoded({extended:true}));

router.post("/modify",(req,res,next)=>{
    console.log(req.body);
    res.send("수정")
});

//app.use("/dept",deptRouter);
router.get("/",async (req, res, next)=>{
    let conn;
    try {
        conn=await oracledb.getConnection();
        const result=await conn.execute("select * from dept");
        //res.json(JSON.stringify(result.rows))
        res.render("deptList.pug",{depts:result.rows})
    }catch (e) {
        next(e);//throw e; 오류처리하는 미들웨어 호출
    }finally {
        conn?.close();
    }
});




router.get("/:deptno",async (req,res,next)=>{
    let deptno=req.params.deptno;
    let conn;
    let sql="SELECT * FROM DEPT WHERE DEPTNO=:id";
    try {
        conn=await oracledb.getConnection();
        const result=await conn.execute(sql,{id:deptno});
        //만약 조회된 내역이 없다
        if(result.rows.length===0){//조회된내역이 없다.
            res.redirect("/dept");
            return;
        }
        //res.json(JSON.stringify(result.rows))
        res.render("dept",{dept:result.rows[0]})
    }catch (e) {
       next(e);
    }finally {
       conn && conn.close()
    }


});




router.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send("<h1>서버 오류가 발생 다시시도</h1>")
});
export default router;