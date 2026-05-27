import './App.css'
import Counter from "./Counter.jsx";
import StateCounter from "./StateCounter.jsx";
import CustomInput from "./CustomInput.jsx";
function App() {
  return (<>
    <h1>State 로 컴포넌트를 재렌더링하자!</h1>
    <CustomInput inputValue={"경민코딩"}/>
    <hr/>
    <Counter/>
    <hr/>
    <StateCounter/>
  </>)
}

export default App
