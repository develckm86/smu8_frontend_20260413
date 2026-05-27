//CustomInput
import {useState} from "react";

function CustomInput({inputValue}){
    //props 는 초기값으로 변경되지 않음
    const [val,setVal]=useState(inputValue)

    return(<div>
        <label htmlFor="name">이름</label>
        <input id="name" value={val} type="text"
            onChange={(e)=>{setVal(e.target.value)}}
        />
        <input type="text" value={inputValue}/>
    </div>);
}

export default CustomInput;