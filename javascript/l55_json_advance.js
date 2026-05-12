//l55_json_advance
const obj={
    a:"1",
    b:"2",
    c:"3",
};
obj.self = obj; //순환참조
console.log(obj)
console.log(obj.self.self.self.self.self.self.self.a);

let str=JSON.stringify(obj,["a","b"],2);
console.log(str)

//str=JSON.stringify(obj);
//Converting circular structure to JSON

//json으로 깊은복제하기
class User{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
}
let u=new User("경민코딩",40);
console.log(u)
str=JSON.stringify(u);
console.log(str)
let c=new User("자식",5);
u.child=c;
console.log(u)
// ... Object.assign 얕은 복제(깊은레이어는참조)
let newUser={...u};
u.age=50;
u.child.age=10;
console.log("원본",u);
console.log("복제",newUser);

//객체를 JSON으로 변경 후 다시 객체로 변경 -> 깊은 복제
//함수,undefined 제외
let deepUser=JSON.stringify(u,null,2);
console.log("문자열로 변경",deepUser);
deepUser=JSON.parse(deepUser);
u.age=100;
u.child.age=20;
console.log(deepUser);


//set map(==Object)
let set=new Set(); //중복이 혀용되지 않음
set.add("사과");
set.add("사과");
set.add("딸기");
set.add("배");
set.add("배");
console.log(set)
console.log(deepUser)
console.log(Object.keys(deepUser));



