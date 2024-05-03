import React, { useEffect, useState } from 'react'

const UseEffectClock = () => {
    const [time, setTime] = useState(new Date());

    const clock = ()=> {
        setTime(new Date());
    }
   
    useEffect(()=>{
     
     setInterval(clock, 1000);
       // return clearInterval(myTime);
    });//same results here even if addind [] 
    
   // const cDate = new Date().toLocaleDateString();
    //const cTime = new Date().toLocaleTimeString();
  return (
    <>
      <h1>Hooks Practice</h1>
      <h2 style={{color:'green'}}>Current Date:{time.toLocaleDateString()}<br /></h2>
      <h2 style={{color:'orangered'}}>Current Time:{time.toLocaleTimeString()}</h2>
    </>
  )
}

export default UseEffectClock;
