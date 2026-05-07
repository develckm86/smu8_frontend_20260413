//l44_this_bind
globalThis.name="글로벌"; //
const user={
    name:"경민코딩",
    sayHi:function (){
        console.log(this.name+" 안녕")
    }
}
user.sayHi();
const newHi=user.sayHi;
newHi();
//console.log(this)  nodejs 는 window가 아니고 globalThis


//class
class A{
    //필드,생성자,함수
    //a=10;b=20;
    constructor(a=0,b=0) {
        //js 개발자는 생성자에서 필드 선언
        this.a=a;
        this.b=b;
    }
    sum(){
        //console.log(this.a)
        return this.a+this.b;
    }
}
let obj=new A(111,222);
console.log(obj.a,obj.b)
console.log(obj.sum())
//let newSum=obj.sum;
//newSum();


//자바스크립트는 함수형 -> 함수가 타입이될수 있다
function User(name){ //생성자함수(타입)
    this.name=name
    this.say=function (){
        console.log(this.name+" 오호~ 안녕!")
    }
}
function sum(a,b){ //일반함수 (타입X)
    return a+b;
}
let u=new User("kosmo");
//u.name="smu8";
let result=sum(10,20);
console.log(u);
console.log(result);
u.say();
let obj2={name:"현빈짱!"}

let newSay=u.say.bind(obj2);
newSay();
//function aa(){} : 실행하는 주체로 this 바인딩
//()=>{} : 선언단에서 this 바인딩
