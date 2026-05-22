//ex4_emp_api_router
import express from "express";
import oracledb from "oracledb";
const router=express.Router();

router.get("/",(req, res)=>{
    res.render("emp");
});
router.get("/api/:empno",async (req,res)=>{
    let empno=req.params.empno;
    let sql="SELECT * FROM EMP WHERE EMPNO=:empno";
    let conn;
    try {
        //http://localhost:7575/emp/api/7839
        conn=await oracledb.getConnection();
        const result=await conn.execute(sql,[empno]);
        if(result.rows.length===0){
            res.status(404).json({message:"사원이 존재하지 않습니다."})
        }
        res.json(result.rows[0]);
    }catch (e) {
        throw e;
    }finally {
        conn && await conn.close();
    }
})


router.get("/api",async(req,res)=>{
    let sql="SELECT * FROM EMP ORDER BY EMPNO DESC";
    let conn;
    try {
        conn=await oracledb.getConnection();
        const result=await conn.execute(sql);
        res.json(result.rows);
    }catch (e) {
        throw e;
    }finally {
        conn && await conn.close();
    }
});

export default router;