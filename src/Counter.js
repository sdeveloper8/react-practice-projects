import React, {useEffect, useState} from 'react';
import MousePosition from './MousePosition';
import './counter.css';


let flag = 0;
const Counter = () => {
    const [count, setCount] = useState(0);
   
    useEffect(() => {
      document.title = `Count(${count})`;
    })
  return (
    <>
        <h3>Counter using simple useState</h3>
       <button onClick={()=> {
        if(count !== 10){setCount(count +1)}
        }}> + </button>
         <button id ="countbg">{count}</button>
         <button onClick={()=> {
        if(count !== 0){setCount(count - 1)}
        }}> - </button>
       
       {/* by usning one same button change bgcolor vice versa */}
        <button id = "changetext" onClick={()=>{
     
          const countbg = document.querySelector('#countbg');
          const changetext = document.querySelector('#changetext');
          if(flag === 0 ){
            countbg.style.backgroundColor = "green";
            flag = 1;
            changetext.innerHTML = "Red";
            changetext.style.color = "red"
          }  
          else{
            countbg.style.backgroundColor = "red";
            flag = 0;
            changetext.innerHTML = "Green";
            changetext.style.color = "green"
          }
        }}>green</button>
        {
        /*  mouse move JS events projects*/
        <MousePosition/>
          }
       
        
    </>
  )
}

export default Counter;
