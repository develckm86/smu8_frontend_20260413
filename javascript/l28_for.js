//l28_for
let n=0;
while (n<3){
    console.log(n);
    n++;
}
const arr=["사과","바나나","망고","딸기"];
console.log(arr[0]+" 먹습니다.");
console.log(arr[1]+" 먹습니다.");
console.log(arr[2]+" 먹습니다.");
n=0;
while (n<arr.length){
    console.log(arr[n++]+" 먹나요?");
}
//break; 더이상 반복하지 않겠다.
for(let i=0; i<4; i++){
    if(arr[i]==="딸기")break;
    console.log(i+arr[i]+"먹나?")
}
//continue; 해당 구간만 무시하겠다.
for(let i=3; i>=0; i--){
    if(arr[i]==="바나나")continue;
    console.log(i,arr[i]);
}