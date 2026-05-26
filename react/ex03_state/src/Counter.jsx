function Counter(){
    let cnt=0;
    const cntHandler=()=>{
        cnt++;
        alert(cnt);
    }
    return(<>
        <h2>state 없는 카운터</h2>
        <p>카운트 {cnt}</p>
        <p><button onClick={cntHandler}>증가</button></p>
    </>);
}
export default Counter;