//l57_promise
//비동기 실행을 동기화하는 Promise
//WebAPIs setTimeout(*), setInterval, XMLHttpRequest, fetch

let a=10;
setTimeout(()=>{
    a=20;
},1)
console.log(a); //20기대하지만 10
//동기화 : 코드가 순서대로 실행되는 것 처럼 보이게하는 것

let b=10;
new Promise((resolve)=>{
    setTimeout(()=>{
        b=20;
        resolve("성공"); //동기화하고 시점에 실행=>then
    },5000);
}).then((msg)=>{
    console.log("promise",msg,b);
})
console.log(b)

async function aa(){
    let c=1000;
    let msg=await new Promise((resolve)=>{
        setTimeout(()=>{
            c=2000;
            resolve("전달!");
        },7*1000);
    });
    console.log("aa().c",msg,c);
    //위의 코드가 완료될때까지 기다렸다가 실행=
}
aa();




