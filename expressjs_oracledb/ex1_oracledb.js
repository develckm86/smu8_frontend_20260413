//ex1_oracledb
import oracledb from "oracledb";

oracledb.outFormat=oracledb.OUT_FORMAT_OBJECT;

const dbConfig={
    user:"scott",
    password:"tiger",
    connectString:"localhost:1521/XEPDB1"
}
async function dbConnTest(){
    let conn;
    let sql=`SELECT DEPTNO "deptno",DNAME "dname",LOC "loc" FROM DEPT`;
    try{
        conn=await oracledb.getConnection(dbConfig);
        const result=await conn.execute(sql);

        console.log(JSON.stringify(result.rows));

        for(const dept of result.rows){
            console.log(dept["deptno"],dept.dname,dept.loc)
        }
    }catch (e) {
        console.error(e);
    }finally {
        //conn || conn.close();
        conn?.close()
    }
}
dbConnTest();


