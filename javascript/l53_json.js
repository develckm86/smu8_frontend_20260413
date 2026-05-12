//l53_json
//Object vs JSON (자바스크립트 객체 명세서)
let str='{ "key":13, "name":"경민"}';
//json ->Object
str='[11,22,33,true,null,"안녕",{}]';
//json -> Array
//JSON : 객체를 json으로 변환하거나 json을 객체로 변환
const arr=JSON.parse(str);
console.log(str);
console.log(arr);
console.log(str[0]);
console.log(arr[0]);
str="안녕"; //['안','녕']
let obj=[11,22,33]; //리터럴표기법
obj=new Array();
obj[0]=11;
obj[1]=22;
obj[2]=33;
obj=new Object();
obj["key"]="value"
obj={key:"value"};

