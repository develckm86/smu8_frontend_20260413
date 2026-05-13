function sum(a,b){
    return a+b;
}
console.log(sum(10,20));

async function sum2(a,b){
    return a+b;
}

console.log(sum2(10,20));
//프라미스화에서 프라미스객체를 반환하지 않아야할때 사용
//Promise.resolve, reject
console.log(Promise.resolve(30))
let p=new Promise(resolve => {
    resolve(30)
}); //===Promise.resolve(30)
console.log(p)
//로그인 성공 조회, 로그인 실패  조회하지 않고 null
function request(url){
    return new Promise(resolve => {
        console.log("통신성공");
        resolve("[]");
    })
};
function loadPosts(isLogin){
    if(isLogin){
        return request("./getPosts.json");
    }else{
        //return null;
        return Promise.resolve(null);
        //return new Promise(resolve => resolve(null));
    }
} //심각함 문제!
loadPosts(true).then((res)=>{});
loadPosts(false).then((res)=>{
    console.log(res)
});
//null.then(); => 오류
//async function 은 Promise 객체를 다루기때문에
//반환값으로 Promise.resolve로 하자! 약속함

async function multi(a,b){
    return a*b;
}
multi(11,22).then((result)=>{
    console.log(result)
})
