let arr=["사과","망고","딸기"];
arr[3]="바나나";
console.log(arr);

arr=new Array("사과","망고","딸기");
arr[3]="파인애플";
console.log(arr);

arr=Array.of("사과","망고","딸기");
arr[3]="파인애플";
arr[10]="바나나"
console.log(arr);
console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);

let o={0:"사과",1:"망고",2:"딸기",5:"바나나",length:6};
console.log(o)
console.log(o.length)
console.log(o[0])
console.log(o[1])
console.log(o[2])
//Array.from : Array 타입과 유사한 배열이거나 배열인척하는 object를 Array로 변환
console.log(Array.from(o));
