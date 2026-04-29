let age=19; //Boundary Value Analysis 경계값분석
//성인은 버스요금을 내고 성인이 아니면 버스요금을 내지 않음!!
//어린이 (6~12) 550원
//청소년 (13~18) 900원
//성인 (19~64) 1500
//나머지 (5세 이하, 65세이상) 0
function checkBus( age ){
    if(isNaN(age) && (age>=0 && age<=140)){
        console.log("나이는 수(0~140)만 입력하세요~")
        return; //함수는 return 하면 종료
    }
    if( age<6 || age>64 ){
        console.log("버스가 무료입니다.");
    }else if(age<13){
        console.log("어린이는 550원 입니다.");
    }else if(age<19){
        console.log("청소년은 900원 입니다.")
    }else {
        console.log("성인은 1500원입니다.")
    }
}
checkBus(40);

// if(age>18){
//     console.log("버스 요금 내세요!!")
// }else{
//     console.log("그냥 버스 타세요!")
// }
//
