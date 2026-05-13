//l67_async_catch
function ex1(str){
    if(str){
        return String(str);
    }else{
        throw new Error("사용할수 없는 문자열"); //예외발생 -> 처리!
    }
}
let s=ex1(10);
console.log(s+1)
try {
    s=ex1(null);
}catch (e) {
    console.log(e.message);
} //일반적으로 예외를 발생시키고 예외처리하는 과정

let n=-10;
//fetch(res=>{})  프라미스화된 함수에 reject가 없을때  throw new Error
//Promise 동기화시 예외처리방법!!
new Promise((resolve,reject)=>{
    if(n<0){
        //throw new Error("n은 0보다 커야합니다.");
        reject(new Error("n>0"));
    }
}).catch(err=>{
    console.log(err.message);
})
console.log("다음코드!!");

function validPw(pw){
    return new Promise((resolve,reject)=>{
        if(pw && pw.length>3){
            resolve(pw);
        }else{
            //throw new Error("사용할 수 없는 비번(길이가 4이상)");
            reject(new Error("잘못된비번!"))
        }
    })
}
validPw("123").then((pw)=>{
    console.log("pw :",pw);
}).catch((err)=>{
    console.log(err.message)
})

//async 함수로 프라미스화된 함수의 예외처리
async function aa(){
    console.log("async 함수내부");
    try {
        let pw=await validPw("321");
        console.log(pw)
    }catch (e) {
        console.log("async 함수내부", e.message)
    }
}
await aa()
//catch를 async에서 사용가능하지만 권장하지 않음
async function bb(){
    console.log("async 함수내부 bb");
    let pw=await validPw("321").catch((err)=>{
        console.log(err.message)
    })
    console.log(pw)
}
await bb()



