import React from 'react'
import { useReducer } from 'react';
import reducer from './reducer';

const initialValue = 0;
const UseReducer = () => {
    //const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialValue);
    //in dispatch there is property 'type:' 
    //reducer, which opertaion we want to perform
   

  return (
    <>
      <h3>Counter using USEREDUCER</h3>
       <button onClick={()=> dispatch({type: "INC"})}> 
        + </button>
         <button>{state}</button>
         <button onClick={()=> dispatch({type: "DEC"})}> 
        - </button>
         
   
    </>
  )
}

export default UseReducer;
