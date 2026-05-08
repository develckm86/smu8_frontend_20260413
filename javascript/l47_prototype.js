//l47_prototype
function User(name){
    this.name=name
}
//시제품도 객체 (생성자가 시제품에 포함됨,필드없음)
console.log(User.prototype);//constructor:ƒ User(name)
//__proto__ 상속
console.log(User.prototype.__proto__);
//Object.prototype
console.log(User.prototype.__proto__.__proto__);
//Object.prototype 부모는 없다.

let km=new User("경민");
console.log(km);
//프로토타입을 기반으로 객체생성
//User.prototype 으로 new User() 객체 생성 (상속)
console.log(km.__proto__===User.prototype);
console.log(km.valueOf());
//console.log(km.__proto__.__proto__.valueOf())

//화살표함수는 prototype 이 없다.(타입이 될수 없다.)
const Member=()=>{};
console.log(Member.prototype);//undefined
//new Member();//TypeError: Member is not a constructor

//class 생성자 함수의 문법적 설탕
//class 는 생성자 함수인데 class인척한다.
//자바에서 화살표함수를 함수형언어(문법적설탕)
//function Dog(){}
class Animal{
    constructor(name) {
        this.name=name;
    }
    sayHi(){
        console.log(this.name+"안녕!")
    }
}
//Animal.prototype.sayHi=function(){}
//Dog.prototype.__proto__=Animal.prototype
class Dog extends Animal{
    sayHi(){ //부모의 함수를 오버라이드함
        console.log("강아지 안녕")
    }
}
console.log(Dog.prototype)
let d=new Dog("코에");
console.log(d)
d.sayHi();


