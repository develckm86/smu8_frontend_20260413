//l30_for_in
//일반적으로 객체 반복문을 불가능
const user={name:"경민",age:40,isMarried:true};
console.log(user["name"]);
console.log(user["age"]);
console.log(user.isMarried);
console.log("age" in user);
//객체 탐색방법 : key,entry,forin
for(let key in user){
    console.log(key,user[key]);
}
console.log(Object.keys(user));
for(let key of Object.keys(user)){
    console.log(key,user[key]);
}
//entries : key 와 상관없이 객체를 반복탐색할때 사용
console.log(Object.entries(user));
for(let entry of Object.entries(user)){
    let key=entry[0];
    let value= entry[1];
    console.log(key,value)
}
