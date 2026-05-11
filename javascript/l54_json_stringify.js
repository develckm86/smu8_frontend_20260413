//l54_json_stringify

//JSON.stringify(obj) : 객체를 문자열 json으로 변환 (직렬화)
//json 으로 변환가능한 데이터
let user={
    name:'경민',
    birth: "1986-5-25",
    age: 40.01,
    isMarried: true,
    children: null,
    u:undefined,
    name:`경민코딩`, //마지막 key만..
    say:()=>{console.log(this.name+"안녕~")},
    birthDate: new Date(1986,4,25)
};
let str=JSON.stringify(user,null,2)
console.log(user)
console.log(str)
//key 는 무조건 "" 문자열로 취급
//문자열데이터는 무조건 "" 큰따옴표 표기
//json 은 객체자체를 저장불가 => 문자열로 변환 후 저장
//Number,Boolean, null 은 타입을 보존한다.
//함수는 해킹에 사용될 수 있기 때문에 제거
//undefined 는 정의되지 않음이기 때문에 제거

//자바
//String s;
//String s=undefined;(X 오류)
//JS
//let s=undefined;  (O)

let jsonError=`{
  name: '경민코딩',
  "birth": 1986-5-25,
  "age": 삼십,
  "isMarried": undefined,
  "children": ()=>{},
  "birthDate": new Date()
}`;
let json=`{
  "name": "경민코딩",
  "birth": "1986-5-25",
  "age": 40.01,
  "isMarried": true,
  "children": null,
  "birthDate": "1986-05-24T15:00:00.000Z"
}`;
let objUser=JSON.parse(json);
console.log(objUser)