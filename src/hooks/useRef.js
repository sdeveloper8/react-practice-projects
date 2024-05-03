import React from 'react';
import { useRef } from 'react';

const UseRef1 = () => {
    //const [inputValue, setInputValue] = useState("");
    const ref1 = useRef('hello useRef'); //it has 'current' property///and here 'count is like an object'
 const changeBG = ()=>{
    ref1.current.focus();
    ref1.current.style.color = "blue";
 }

    return (
    <>
      <p>{ref1.current}</p>
     {/*  <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /> */}
      <button ref={ref1}>change me</button>
        <button onClick={changeBG}>Click me</button>
    </>
  )
}

export default UseRef1;
