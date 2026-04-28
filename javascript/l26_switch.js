//js switch 는 조건을 복잡하게 작성가능하지만 일반적인 switch로 수업
//switch 대표 상태가 있을때 사용
// 1: 종료, 2:실행, 3:오류 (약속=>상수)
// 요일 -> 0:일, 1:월, 2:화~~~ 6:토
let day=4;
let dayStr="";
if(day===0){
    dayStr="일요일";
}else if(day===1){
    dayStr="월요일";
}else if(day===2){
    dayStr="화요일";
}else if(day===3){
    dayStr="수요일";
}else if(day===4){
    dayStr="목요일";
}else if(day===5){
    dayStr="금요일";
}else if(day===6){
    dayStr="토요일";
}else{
    dayStr="0~6까지만 선택하세요!";
}
console.log(dayStr);
switch (day){
    case 0 : dayStr="일요일"; break;
    case 1 : dayStr="월요일"; break;
    case 2 : dayStr="화요일"; break;
    case 3 : dayStr="수요일"; break;
    case 4 : dayStr="목요일"; break;
    case 5 : dayStr="금요일"; break;
    case 6 : dayStr="토요일"; break;
    default : dayStr="0~6까지만.."; break;
}
console.log(dayStr);
//삼항연산자로 해보기!
day=5;
let dayType="";  //평일 or 주말
switch (day){
    case 0: case 6 : dayType="주말"; break;
    case 1:case 2:case 3:case 4:case 5: dayType="평일"; break;
}
console.log(dayType);
//제발제발 이렇게 쓰지 마세요~
switch (true){
    case day>=1 && day<=5 : dayType="평일"; break;
    case day===0 || day===6 : dayType="주말"; break;
}
console.log(dayType);

day=7;
//Object key 와 switch 는 유사함 (js 개발자는 switch 보다 더 선호)
//else, default 작성이 불가능
let krDatStr="0~6까지만 입력"; //else
const krDayObj={
    0:"월요일",
    1:"화요일",
    2:"수요일",
    3:"목요일",
    4:"금요일",
    5:"토요일",
    6:"일요일"
}
krDatStr=krDayObj[day];
console.log(krDatStr)


