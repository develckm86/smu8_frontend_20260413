
function sum(a,b){
    return a+b;
} //함수 : 기능의 묶음


let result=sum(10,20);
console.log(result)

//생성자함수의 이름이 파스칼규칙인것은 개발자간의 약속
function Person(){
    this.name="경민코딩";
    this.age=40;
}//type(생성자함수) : 객체의 형(타입)으로 쉽게 객체를 생성, return은 동작하지않음


let km=new Person();
//생성자 함수는 객체를 생성하는 new 연산자로 호출되고 만들어진 객체를 반환한다.
console.log(km);
//함수가 타입이 되는 언어를 함수형언어라 부릅니다.
console.log(new Person());
console.log(new Person());
console.log(new Person());
console.log(new Person());
console.log(new Person()); //객체 -> 인스턴스 (쉽게만들기때문)

//es6 버전부터 도입된 class 타입
class User{
    constructor(name="익명",age=0) {
        //this.name : 객체의 필드를 생성
        //name : 매개변수
        this.name=name; //매개변수로 받은 값을 생성하는 필드에 대입
        this.age=age;
    }
}
let u=new User();
console.log(u)
console.log(new User("뽀로로",23));
console.log(new User("둘리",43));
console.log(new User());
console.log(typeof u);//object (자료형은 모두 object)
console.log(u instanceof User) //instanceof 데이터의 타입을 확인
console.log(u.constructor) //[class User] 무식하게 확인
console.log(u.constructor == User) //[class User] 무식하게 확인