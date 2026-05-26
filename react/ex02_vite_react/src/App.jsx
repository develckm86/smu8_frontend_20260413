import Card from "./Card.jsx"
import ListGroup from './ListGroup.jsx'
//let {a,b}={a:10,b:20};
export default function App() {
    const fruits=["사과","딸기","바나나","수박"];
    const newFruits=fruits.map((f)=>{return f+f});
    console.log(newFruits);
    // Array 의 반복함수 , forEach, map, filter, reduce..
  return (
    <>
        <h1>안녕 vite react</h1>
        <ul>
            {fruits.map((f,i)=>
                <ListGroup key={i} title={f}/>
            )}

            {/*<ListGroup title={"사과"}/>*/}
            {/*<ListGroup title={"딸기"}/>*/}
            {/*<ListGroup title={20}/>*/}
            {/*<ListGroup title={20/2}/>*/}
        </ul>
        <hr/>
        <Card name={"경민코딩"} age={40}>
            <p>자식요소 추가 props.children</p>
        </Card>
        <hr/>
        <Card name={"리액수업"} age={10}/>
        <hr/>
        <Card name={"철수"} age={20}/>
    </>
  )
}

//export default App
