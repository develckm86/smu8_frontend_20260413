//l31_array_method_iterator

const arr=["철수","영희","둘리","뽀로로"];
//객체는 필드와 메소드가 존재합니다.
console.log(arr.length); //필드
console.log(arr.push("강혁")); //함수
console.log(arr.toString()); //함수
console.log(arr.pop());
console.log(arr);
//배열의 메소드 중에 반복탐색하는 메소드
//find(찾는),sort(정렬),forEach(반복),map(변경),filter(제거),reduce(하나로)
let is철수=false; //철수가 있으면 true
arr.forEach((name,i)=>{
    if(name==="철수") is철수=true;
    console.log(i,name)
});
console.log(is철수);

let result=arr.findIndex((name)=>name==="뽀로로");
console.log(result);
let is영희=arr.includes("영희");
console.log(is영희);

//map 기존의 배열을 바꾸어서 새배열로 반환하는 함수
const nums=[11,22,33,44];
const newNums=nums.map((n)=>n*n);
console.log(nums);
console.log(newNums);

const strNums=["123","십일","345",undefined,"456",null];
console.log(strNums)
console.log(strNums.map(str=>Number(str)));

//filter 원하지 않는 데이터 제거 (NaN 데이터 제거)
let arr2=strNums
    .filter(str=>!isNaN(str) && str!=null)
    .map(str=>Number(str));
console.log(arr2)
//reduce : 하나의 결과를 반환
let sum=0;
strNums.forEach((str)=>{
    if(!isNaN(str)) sum+=Number(str);
})
console.log(sum)
let sum2=strNums.reduce((str1,str2)=>str1+str2);
console.log(sum2)
let sum3=strNums.reduce((result,str)=>result+str,0);
console.log(sum3)
let sum4=strNums
    .filter(str=>!isNaN(str) && str!=null)
    .map(str=>Number(str))
    .reduce((result,str)=>result+str,0);
console.log(sum4)
//sort() : 기존의 배열을 정렬합니다. (기본값 : 문자열 기준 정렬)
let arr3=[111,22,-33,789,-999];
arr3.sort();
console.log(arr3);
arr3.sort((a,b)=>b-a); //내림차순
console.log(arr3)
arr3.sort((a,b)=>a-b); //오름차순
console.log(arr3)

arr3=["zz","aa","ff","bb","AA","cc","AB"];
arr3.sort();
console.log(arr3)
arr3.reverse(); //문자열의 내림차순
console.log(arr3)
