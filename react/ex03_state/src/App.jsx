import './App.css'
import Counter from "./Counter.jsx";
import StateCounter from "./StateCounter.jsx";
function App() {
  return (<>
    <h1>State 로 컴포넌트를 재렌더링하자!</h1>
    <hr/>
    <Counter/>
    <hr/>
    <StateCounter/>
  </>)
}

export default App
