import React from 'react';

const Photos = ({photos}) => {
  return (
    <>
      <h1>Photo Gallery</h1>
      <section className='main-card-container'>
        { photos.map((ele) => {
          const {id, title} = ele;
            return(
              <div className='card-container' key={id}>
                <div className="card"  >
                  {id + ":"}
                {title.toUpperCase()}
                </div>
              </div>
            )})
          }      
      </section>   
    </>
    ); 
  };
  
  export default Photos;
              
           
       
    
