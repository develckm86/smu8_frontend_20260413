//리터럴
let obj={
    'd':40,
    "c":30,
    b:20,
    a:10,
    420:70,
    310:60,
    570:50
};
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj[0]);
console.log(obj["1"]);
// console.log(obj.0)
let keys=Object.keys(obj);//['0', '1', '2','a', 'b', 'c', 'd']
//js key가 수이면 오름차순으로 정렬합니다.
console.log(keys);
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log( "a" in obj);
console.log( "e" in obj);
console.log( Object.hasOwn(obj, "b") );
let user={name:"경민"};
let user2=
    {...user, age:40 }; //객체 복제
console.log(user,user2)
user2.name="km";
console.log(user,user2)

