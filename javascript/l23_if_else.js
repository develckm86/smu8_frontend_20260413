//l23_if_else
//20세 이상이 성인
//성인 주류 구입
//미성년이면 경고
function isAlcohol(age){
    if(age>=19){
        let result=confirm("구입하시겠습니까?");
    }else {
        alert("19세 미만은 주류 구입 불가입니다!!");
    }
}

//console.log(alcoholForm)
alcoholForm.onsubmit=function (e){
    e.preventDefault();//submit 이벤트 멈추기
    //this==이벤트가 발생한 개체 (alcoholForm)
    //console.log(alcoholForm.age.value);
    //console.log(this.age.value);
    let age=Number(this.age.value);
    if(age>=19){
        confirm(age+"는 구입할 수 있습니다.");
    }else{
        alert(age+"는 구입할 수 없습니다.");
    }
}
