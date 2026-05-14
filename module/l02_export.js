//l02_export
//export 를 해야 라이브러리로(모듈) 사용가능
//common.js 방식의 export
function multi(a,b,c){
    return a*b*c;
}
//module.exports=multi; //모듈전체==multi
module.exports={
    multi: multi
};