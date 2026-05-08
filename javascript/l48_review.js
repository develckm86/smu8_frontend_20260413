"use strict"
///l48_review

//this 바인딩 : 실행하는 객체가 this
//this 캡처  : 함수가 있는 위치의 타입이 this

class User{
    name="경민"; //필드
    age=40;
    constructor(name,age) { //this는 객체 자신
        this.name=name;
        this.age=age;
    }
    sayHi(){
        console.log("user.sayHi",this);
    }
    hi=()=>{
        console.log("user.hi",this);
    }
}
let u=new User("코에","3");
//일반함수의 this 바인딩
u.sayHi();
let newSayHi=u.sayHi;
newSayHi();
//new User() : User > Object
//{} : Object
u.hi();
let newHi=u.hi;
newHi();



const helloFn=function (){
    console.log(this)
}

const member={
    id: 1234,
    hello : helloFn
}
member.hello();
helloFn()

