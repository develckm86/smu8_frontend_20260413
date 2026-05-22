//ex3_dept_router
import express from "express";
import oracledb from "oracledb";
const router=express.Router();
router.use(express.urlencoded({extended:true}));

router.get("/:deptno/remove",async(req, res)=>{
    let deptno=req.params.deptno;
    let sql=`DELETE FROM DEPT WHERE DEPTNO=:deptno`;
    let conn;
    try {
        conn=await oracledb.getConnection();
        const result=await conn.execute(sql,[deptno]);
        console.log(result);
        conn.commit();
        res.redirect("/dept");
    }catch (e) {
        throw e;
    }finally {
        conn && await conn.close()
    }
});


router.get("/regist",(req,res)=>{
   res.render("deptRegist");
});
router.post("/regist",async(req,res)=>{
    req.body.deptno=Number(req.body.deptno);
    console.log(req.body);
    let sql=`INSERT INTO DEPT (DEPTNO, DNAME, LOC) 
                VALUES (:deptno,:dname,:loc)`;
    let conn;
    try {
        conn=await oracledb.getConnection();
        const result=await conn.execute(sql,req.body);
        console.log(result);
        conn.commit();
        res.redirect("/dept");
    }catch (e) {
        throw e;
    }finally {
        conn && await conn.close();
    }
});


router.post("/modify",async (req,res,next)=>{
    //let deptno=req.body.deptno;
    let {deptno,dname,loc}=req.body;
    deptno=Number(deptno);
    //해당 부서가 없거나, 부서번호가 없거나, 부서이름과 위치 유효성검사
    let sql=`UPDATE DEPT SET DNAME=:dname, LOC=:loc WHERE DEPTNO=:deptno`;
    let conn;
    try {
        conn=await oracledb.getConnection();
        const result=await conn.execute(sql,{
            dname : dname,
            loc:loc,
            deptno:deptno
        });
        conn.commit();
        console.log(result);
        res.redirect("/dept")
    }catch (e) {
        throw e;
    }finally {
        conn?.close();
    }
});

//app.use("/dept",deptRouter);
router.get("/",async (req, res, next)=>{
    let conn;
    try {
        let sql=`SELECT * FROM DEPT ORDER BY DEPTNO DESC`;
        conn=await oracledb.getConnection();
        const result=await conn.execute(sql);
        //res.json(JSON.stringify(result.rows))
        res.render("deptList",{depts:result.rows})
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