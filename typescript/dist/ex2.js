"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b) {
    return a + b;
}
//console.log(sum());
console.log(sum(11, 22));
//console.log(sum("11",22));
//기본값의 타입으로 고정
function sum2(a = 0, b = 0) {
    //a=String(a);
    return a + b; //반환타입도 반환하는 타입으로 추론
}
//생성자함수 this의 타입을 지정해야합니다
function Users(name, age) {
    this.name = name;
    this.age = age;
}
const u = new Users("홍길동", 39);
console.log(u);
function sayObj(o) {
    console.log(o.id + "_" + o.name + " 안녕!!");
}
const obj = {
    id: 1234,
    name: true
};
sayObj(obj);
//sayObj(11);
const obj2 = {
    id: "1234",
    name: 11,
    email: "test@test.com"
};
let arr = [1, 2, 3];
let arr2 = [1, 2, 3, "dd"];
//java 제네릭
let arr3 = [1, 2, 3, "dd"];
//# sourceMappingURL=ex2.js.map