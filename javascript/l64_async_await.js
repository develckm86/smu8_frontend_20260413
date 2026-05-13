//l64_async_await
(function ex1(){
    console.log("ex1 Web APIs 비동기 실행 예시");
    let a=10;
    //a=20;
    setTimeout(()=>{
        a=20;
    },0);
    console.log(a)
})();
//ex1();
(function ex2(){
    console.log("ex2 Promise로 동기화 예시");
    let a=1000;
    new Promise((resolve)=>{
        setTimeout(()=>{
            a=2000;
            resolve();
            //a=2000이된 시점을 보장(동기화)
        },0)
    }).then(()=>{
        console.log(a)
    })
    //console.log(a)
})();
//async function 에서만 await 사용가능!
(async function ex3(){
    console.log("ex3 Promise를 await로 동기화");
    let a=10000
    await new Promise((resolve)=>{
        setTimeout(()=>{
            a=20000;
            resolve();
        },0)
    });
    console.log(a)
})();
let num=0;
function increaseMs(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            num++;
            resolve();
        },ms)
    });
}
(async function ex4 (){
    console.log("ex4 프라미스화된 함수를 await로 동기화");
    console.log("ex4-1",num)
    await increaseMs(1000);
    console.log("ex4-2",num)
})();

(function ex5(){
    console.log("ex5 프로미스화된 함수를 then으로 동기화");
    console.log("ex5-1", num);
    increaseMs(2000).then(()=>{
        console.log("ex5-2",num)
    })
})();

