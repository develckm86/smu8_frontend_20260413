//l61_throw_exception 예외 발생

// throw "오류발생"
//throw new Error("오류발생");

// console.log(
//     Boolean(null),
//     Boolean(undefined),
//     Boolean(0),
//     Boolean(""),
//     Boolean("dd"),
//     Boolean({}),
//     Boolean([]),
// )
function valid(str){
    if(!str){
        throw new Error("사용불가능한 문자열");
    }
}
valid("dd");
try {
    valid("");
}catch (e) {
    console.log(e.message);
}
//JSON.parse("{key:value}")


//try-catch 예외처리후 다시 예외발생시키기
function validObj(json){
    try {
        JSON.parse(json);
    }catch (e) {
        console.log("파싱오류");
        //throw e;
        throw new Error("객체 파싱이 불가능한 문자열");
    }
    //throw 예러를 하면 함수가 종료됨!
}
try {
    validObj("[11,22}")
}catch (e) {
    console.log(e.message)
}
