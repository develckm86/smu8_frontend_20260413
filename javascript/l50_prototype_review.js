//l50_prototype_review
"use strict"
//js 함수형언어, 프로토타입언어, 객체지향언어의 특징만있다.
// 인터프리터언어,스크립트언어  (<-> 컴파일언어)
//타입을 선언하면 프로토타입(객체)이 생성
function User(){
    this.a=10;
} //생성자함수
class Member{
    a=10;
} //생성자함수의 문법적설탕 class
console.log(new User());
console.log(new Member());

console.log(User)
console.log(Member)

console.log(User.prototype);
//객체는 프로토타입을 기반으로 만들고 프로토타입이 부모가된다.
//__proto__: 부모 접근지정자
console.log( new User().__proto__ === User.prototype )
//상속받지 않았다면 모든 타입의 부모(조상)는 Object.prototype
console.log(User.prototype.__proto__);
console.log(new User().__proto__.__proto__);


class A{
    a=10;
    sayA(){console.log("나는 A")}
}
class B extends A{
    b=20;
    sayB(){console.log("나는 B")}
}
class C extends B{
    c=30;
    sayC(){console.log("나는 C")}
}
let c=new C();
c.sayA();
c.sayB();
c.sayC();
console.log(c.__proto__);//C.prototype (부모인 B로 생성)
console.log(c.__proto__.__proto__);//B.prototype (부모인 B로 생성)
console.log(c.__proto__.__proto__.__proto__);//B.prototype (부모인 B로 생성)
console.log(c.__proto__.__proto__.__proto__.__proto__);//B.prototype (부모인 B로 생성)
