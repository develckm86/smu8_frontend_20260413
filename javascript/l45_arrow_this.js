//l45_arrow_this
const a=()=>{
    console.log("a 화살표함수")
} //화살표함수
const b=function (){
    console.log("b 일반함수 입니다.")
} //함수
a();
b();
console.log(new b());
//console.log(new a());
//화살표함수는 타입이 될수 없다
//화살표함수는 this를 선언단에서 캡처한다.
function Clock(){
    this.name="smu8";
    this.start=function (){
        let now = new Date();
        console.log(this.name, now);
        //setInterval 글로벌이 실행하기 때문에
        //setInterval의 콜백함수의 this 는 글로벌
        setInterval(()=>{
            let now = new Date();
            console.log(this.name, now);
        },1000);

    }
}
let clock=new Clock();
clock.start();


