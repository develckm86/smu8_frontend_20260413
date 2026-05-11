//l58_promise_chaining
//프라미스의 체이닝
//로그인(1초) => 성공 => users 조회(2초)
function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("유저로딩 성공!")
            resolve({name:"경민"});
        },2000);
    });
}
new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("로그인 성공");
        resolve(true);
    },1000);
}).then((isLogin)=>{
    console.log(isLogin)
    return fetchUser();
}).then((user)=>{
    console.log("로딩된유저",user)
})
