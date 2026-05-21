//컨넥션풀: 미리 접속하고 있다가 커넥션을 반환
import oracledb from "oracledb";
//oracledb 객체 내부에 커넥션풀을 포함함
async function connPool(){
    try {
        await oracledb.createPool({
            user:"scott",
            password:"tiger",
            connectionString:"localhost:1521/XEPDB1",
            poolMin:1,
            poolMax:5,
            poolIncrement:1
        });
    }catch (e) {
        console.error(e)
    }
}
await connPool();

async function connTest(){
    let conn;
    try {
        conn=await oracledb.getConnection(); //커넥션풀일때 커넥션반환
        const result=await conn.execute("SELECT * FROM DEPT");
        console.log(result);
    }catch (e) {
        console.error(e)
    }finally {
        conn?.close();
    }
}
await connTest();
oracledb.getPool().close();



