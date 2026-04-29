//l29_iterator
//배열의 반복탐색
const arr=[111,-1230,349];
//인덱스(배열의 순서) 기반 반복문 (인덱스를 계산해서 데이터를 참조하기 때문에 느림)
for(let i=0; i<arr.length; i++){
    let num=arr[i];
    console.log(i,num)
}
//반복자 기반 반복문 (반복자가 next 로 이동하면 데이터를 참조하기 때문에 인덱스 기반보다 빠르다.)
for(let num of arr){
    console.log(num)
}
//Array 내부 반복문 forEach
//동작은 이터레이터와 유사하고 배열 내부에서 반복문이 동작,함수를 반복 실행하면서 동작하기 때문에
//함수를 재사용 가능하다.
console.log("\n내부반복문 시작")
arr.forEach(function (value,index,array){
    console.log(index,value);
});
const arrFunc=(num)=>{
    console.log("내부반복문 :",num)
}
arr.forEach(arrFunc);