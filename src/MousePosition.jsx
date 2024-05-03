import React, {useState } from "react";



const MousePosition = () => {
    const [mousePosition, setMousePosition] = useState({
      //if we give left and top value of zero then its not starting from center
      //so null works better as it choose postion from css
        left: null,
        top: null,
      });
  /*  this also works perfectly
   useEffect(() => {
        document.addEventListener('mousemove', (e) => {
        setMousePosition( {left: e.pageX, top: e.pageY });  
        })
    }, []) */
    
  return (
    <>
      <div id="main-center-text" onMouseMove={(e)=>{
         setMousePosition( {left: e.pageX, top: e.pageY });  
      }}>
          <div className="cursur" style={mousePosition}>hi</div>
          <h2>WElCOME HERE</h2>
          
        </div>
       
    </>
  )
}

export default MousePosition
