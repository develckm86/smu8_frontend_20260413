//l63_review
//**java,c,c++,python 모든 프로그램 엔진이 오류가 뜨면(예외) 멈춘다 => 예외처리

let n=10;
// console.log(n.a.a);
// console.log(null.a);
// console.log(undefined.a);
let json=`{name:"경민"}`;
try {
    let user=JSON.parse(json);
}catch (e) {
    console.log(e.message)
}
////예외처리를 하는 이유와 방법
///예외발생을 하는 이유!
//throw new Error();
function loadUser(){
    //throw new Error("찾는페이지가 없습니다!");

    return fetch("./l51_users.json").
        then((res)=>{
        console.log(res.status); //100,200,300,400,500
        if(res.status!==200){
            throw new Error("찾는페이지가 없습니다!");
        }
    });
}
usersBtn.onclick=function (){
    loadUser().catch((e)=>{
        alert(e.message)
    }); //오류가 뜨면 -> 경고
}

//주소가 잘못된 오류발생 (js 엔진이 멈춤)


