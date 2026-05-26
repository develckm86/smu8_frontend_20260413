import {useState} from "react";

function StateCounter(){
    //let cnt=0;
    let [cnt,setCnt]=useState(0);
    //setCnt : cnt 값을 바꾸면서 재렌더링 호출
    const cntHandler=()=>{
        //cnt++;
        // setCnt(cnt++); //리액트에서 권장하지 않는형태
        setCnt(()=>cnt++); //콜백함수 사용권장
    }
    return(<>
        <h2>state로 카운트르 바꾸는 카운터</h2>
        <p>카운트 {cnt}</p>
        <p><button onClick={cntHandler}>증가</button></p>
    </>);
}
export default StateCounter;