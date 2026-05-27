import {useState} from "react";
import {Link,Routes,Route} from "react-router-dom"
function Users(){
  return (<h2>유저 리스트 컴포넌트</h2>)
}
function Products(){
  return (<h2>상품 리스트 컴포넌트(할인중!!)</h2>)
}

function App() {
  const [page,setPage]=useState("");
  return (<>
    <h1>React-router 로 SPA의 url을 생성하자!</h1>
    <hr/>
    <h2>nav+routes 로 url로 렌더링</h2>
    <nav>
      <Link to={"/users"}>유저리스트</Link> |
      <Link to={"/prods"}>상품리스트</Link>
    </nav>
    <Routes>
      <Route path={"/users"} element={<Users/>}/>
      <Route path={"/prods"} element={<Products/>}/>
    </Routes>
    <hr/>
    <nav>
      <button onClick={()=>{setPage("users")}}>
        유저컴포넌트 호출
      </button>
      <button onClick={()=>{setPage("prods")}}>
        상품컴포넌트 호출
      </button>
    </nav>
    {page==="users" && <Users/>}
    {page==="prods" && <Products/>}
    <hr/>

  </>)
}

export default App
