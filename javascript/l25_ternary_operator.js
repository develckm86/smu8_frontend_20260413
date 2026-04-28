//l25_ternary_operator
//삼항연산자 (조건) ? true일때 : false 일때 ;
let result="";
let age=17;
if(age>18){
    result="성인";
}else {
    result="미성년";
}
console.log(result);

result= (age>18) ? "성인" : "미성년" ;
console.log("삼항연산자 결과", result);

//자바에서는 불가능 (자바는 대입을 생략할 수 없다.)
(age>18) ? console.log("성인입니다") : console.log("미성년입니다.");

//파이썬  result= "성인" if (age>19) else "미성년";

//삼항연산자의 else if
let price=0;
//0~ 15 :550
//15~64 :1500
//65~ : 0
price=
    age<6 ? 0 :
        age<12 ? 550 :
        age<18 ? 900 :
        age<65 ? 1500
        :0;
//어린이 (6~12) 550원
//청소년 (13~18) 900원
//성인 (19~64) 1500
//나머지 (5세 이하, 65세이상) 0


