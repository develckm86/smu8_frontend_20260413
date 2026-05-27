import { useState } from 'react'
import './App.css'

function App() {
  //js 기본형 :number,string,bigint,symbol,null,undefined
  //js 자료형 : [], Object
  let [count, setCount] = useState(0)
  const countHandler=()=>{
    //count++; //state 는 재렌더링 될때 바뀐값이 전달됨
    //setCount(count++); //count= count+1;
    //state는 현재 값을 바꾸는 것을 의미 없기 때문에 대입연산자 사용금지!
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
  };

  //const users=["철수","영희","길동","경민"];
  const [users, setUsers]=useState(["철수","영희","길동","경민"])
  const delUser=(event,index)=>{
    console.log(index,"번 삭제");
    //state 수정시 잘못된 방법 : 객체나 배열을 새롭게 만들지 않고 변경(***)
    //Array.splice() : 배열을 바로 수정
    //Array.slice() : 기존의 배열에서 바뀐 새로운 배열 반환
    // users.splice(index,1);
    // setUsers(users);
    setUsers((prevUsers)=>{
      // prevUsers.splice(index,1);
      // return prevUsers;
     const newUsers=[...prevUsers]; //객체복사
      newUsers.splice(index,1);
      return newUsers;
    });

  };
  return (<>
    <h1>state 사용시 주의할 점</h1>
    <ul>
      {users.map((u,i)=>
          <li key={i}>
            {u}
            {/*<button onClick={delUser}>삭제</button>*/}
            <button onClick={(e)=>{delUser(e,i)}}>삭제</button>
          </li>)}
    </ul>


    <hr/>
    <p>카운트 : {count}</p>
    {/*<button onClick={()=>{countHandler()}}>카우트 증가</button>*/}
    <button onClick={countHandler}>카우트 증가</button>
  </>)
}

export default App
